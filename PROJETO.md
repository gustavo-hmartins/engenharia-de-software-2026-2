# **Projeto**

# **Modelo de domínio**

O diagrama de domínio detalha a estrutura conceitual do sistema e suas interações fundamentais.  
Arquivo do diagrama: File (Localizado em diagrams/dominio.mmd).

| Classe | Origem no REQUISITOS.md | Observação |
| :---- | :---- | :---- |
| Investidor | Glossário, HU-01, UC-01 | Ator principal do sistema. Não possui atributos sociais ou relacionamento com outras contas, mantendo a carteira estritamente privada (conforme restrição RE-06). |
| Perfil do Investidor | Escopo (Descoberta), Distribuição de Responsabilidades | Armazena as preferências e o perfil do investidor para personalização do acompanhamento da carteira. |
| Carteira de Investimento | Glossário, HU-02, UC-02 | Espaço principal para organizar os ativos pertencentes ao usuário. É a entidade agregadora responsável por compilar o valor total associado aos investimentos cadastrados (Patrimônio). |
| Ativo (Investimento) | Glossário, HU-01, HU-03, UC-01 | Representa o investimento cadastrado pelo usuário em sua carteira. Contém os atributos fundamentais informados no cadastro: ativo, tipo, quantidade e valor investido. |

# **Modelo de dados**

O modelo de dados reflete o domínio central da aplicação, focado nas entidades principais: Usuário (Investidor), Perfil do Investidor, Carteira de Investimento e Ativo (Investimento). Arquivo do diagrama: File (Localizado em `diagrams/dados.mmd`).

1. **Estratégia de identidade:** Utilizaremos chave artificial (como UUIDs ou IDs numéricos auto-incrementais) como chave primária para todas as entidades do sistema. Chaves naturais serão aplicadas estritamente como restrição de unicidade `unique`, como é o caso do e-mail de cadastro do usuário, garantindo que não existam contas duplicadas.  
2. **Relacionamentos:** Um usuário possui um Perfil do Investidor e uma Carteira de Investimento. Uma Carteira pode conter múltiplos Ativos cadastrados.  
3. **Armazenamento de Ativos:** A tabela de ativos deverá conter os campos obrigatórios levantados nos requisitos: nome do ativo, tipo de investimento, quantidade e valor investido.  
4. **Apagamento lógico (Soft Delete):** Adotaremos o apagamento lógico por meio de uma coluna `ativo` (booleana) ou `status` na entidade de investimentos. Quando o usuário remover um investimento cadastrado (HU-04), o registro não será deletado fisicamente do banco de dados (hard delete), mas sim inativado. Essa decisão garante a integridade referencial dos dados e facilita futuras implementações de histórico de movimentações.

# **Comportamento**

Os diagramas de comportamento mapeiam as interações do usuário com o sistema, baseados nos Casos de Uso (UC) definidos nos requisitos.

## **1\. Sequência de Cadastro de Investimento**

Arquivo do diagrama: File (Localizado em `diagrams/sequencia-cadastrar-investimento.mmd`).

* 1.1. Reflete o fluxo do UC-01.  
* 1.2. O diagrama ilustra o caminho feliz (fluxo principal): o investidor informa os dados (ativo, tipo, quantidade, valor), o sistema valida as informações, associa o investimento à carteira e persiste os dados no banco, retornando a confirmação de sucesso.  
* 1.3. Também prevê as validações dos fluxos alternativos, como a recusa do sistema ao receber dados obrigatórios não preenchidos (A1) ou dados inválidos (A2).

## **2\. Sequência de Visualização da Carteira**

Arquivo do diagrama: File (Localizado em diagrams/sequencia-visualizar-carteira.mmd).

* 2.1. Reflete o fluxo do UC-02.  
* 2.2. O diagrama detalha como o sistema consulta o banco de dados para buscar os investimentos ativos do usuário, realiza o cálculo em memória do valor total investido (Patrimônio) e devolve as informações consolidadas para a interface.  
* 2.3. Inclui o tratamento do fluxo alternativo de Carteira vazia (A1), onde o sistema orienta o usuário quando não há dados a exibir.

## **3\. Máquina de Estados do Ativo**

Arquivo do diagrama: File (Localizado em `diagrams/estados-investimento.mmd`).

* 3.1. Mapeia o ciclo de vida de um ativo dentro do sistema: desde o momento em que é Cadastrado (ativo na carteira), passando por possíveis atualizações (Editado), até o momento em que o usuário decide excluí-lo, mudando seu estado para Removido/Inativo (refletindo a regra de apagamento lógico).

# **Distribuição de responsabilidades**

| Parte | Sabe | Faz |
| :---- | :---- | :---- |
| Usuário | Informações básicas de cadastro e dados de acesso | Fornece os dados de cadastro, acessa o sistema e utiliza sua carteira de investimentos |
| Perfil do investidor | Informações cadastradas relacionadas ao perfil do usuário | Permite visualizar e alterar as informações do perfil do investidor |
| Carteira de investimento | Usuário proprietário, ativos cadastrados, composição da carteira e valores dos investimentos | Organiza os ativos, apresenta a composição da carteira, calcula o valor total investido e apresenta uma visão geral dos investimentos |
| Ativo | Identificação, tipo, quantidade e valor relacionado ao investimento | Mantém as informações do investimento cadastrado e permite seu cadastro, edição e remoção |

# **Decisões de projeto**

| Id | Decisão | Motivo | Consequência aceita |
| :---- | :---- | :---- | :---- |
| D-01 | Adoção de apagamento lógico (Soft Delete) para ativos | Mitigar risco R3 e manter rastreabilidade/integridade referencial de dados | Necessidade de aplicar filtro padrão (`ativo = true`) em todas as consultas da carteira |
| D-02 | Cálculo de patrimônio total em memória | Simplificar a primeira versão da aplicação (MVP) sem sobrecarregar a camada de dados | Requer nova busca e processamento no backend a cada atualização/remoção |
| D-03 | Integração isolada de API externa de cotações em serviço opcional | Risco R1 (instabilidade/limitação da API externa) | O sistema funcionará com inserção manual de valores mesmo que a API externa esteja fora do ar |

# **Protótipo**

Telas do fluxo principal e as recusas previstas podem ser consultadas em:  
Pasta do protótipo: File (Localizado em prototipo/).

# **Conferência cruzada**

* **2026-09-15:** Conduzido pela equipe de desenvolvimento. Verificada a consistência entre a Descoberta, Requisitos e Projeto. Corrigidas as decisões de projeto divergentes (removidos resquícios sobre prazos e supervisores), incluída a entidade Perfil do Investidor no modelo de domínio/dados e alinhada a estratégia de resiliência para a API externa de cotações.

# **Histórico de revisão** 

* 2026-09-21: Correção e alinhamento de coerência entre Descoberta, Requisitos e Projeto.

