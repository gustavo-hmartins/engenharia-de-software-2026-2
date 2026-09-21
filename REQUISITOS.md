# Requisitos  
## Glossário do domínio  
| Termo | Definição | Fonte |  
|---|---|---|  
| Carteira de investimento | Espaço principal para organizar os ativos pertencentes ao usuário | Descoberta do problema |
| Ativo | Investimento cadastrado pelo usuário em sua carteira | Descoberta do problema |
| Valor investido | Valor associado ao investimento cadastrado na carteira | Descoberta do problema |
| Valor total investido | Soma dos valores investidos nos ativos cadastrados na carteira | N2 |
| Composição da carteira | Forma como os diferentes investimentos estão distribuídos dentro da carteira | N4 |
| Rentabilidade |Variação do valor de um investimento ou da carteira ao longo do tempo | N3 |
| Aporte | Valor adicionado pelo usuário aos seus investimentos | N5 |
| Retirada | Valor retirado pelo usuário de seus investimentos | N5 |
| Patrimônio | Valor total associado aos investimentos do usuário, considerando os critérios de avaliação adotados pelo sistema | N2 |
| Movimentação | Operação registrada pelo usuário que altera os valores associados à carteira, como aporte ou retirada | N5 e N6 |

## Backlog ordenado  
| Ordem | Item | Origem | MoSCoW | Risco | Depende de |  
|---:|---|---|---|---|---|   
| 1 | Cadastrar usuário | Escopo | Obrigatório | Baixo | — |  
| 2 | Realizar login no sistema | Escopo | Obrigatório | Médio | Item 1 |  
| 3 | Cadastrar um investimento na carteira | N1 | Obrigatório | Médio | Item 2 |  
| 4 | Visualizar os investimentos cadastrados | N1 | Obrigatório | Baixo | Item 3 |  
| 5 | Editar um investimento cadastrado | N1 | Deveria ter | Baixo | Item 3 |  
| 6 | Remover um investimento cadastrado | N1 | Deveria ter | Baixo | Item 3 |   
| 7 | Visualizar o valor total investido | N2 | Poderia ter | Médio | Item 3 |  
| 8 | Visualizar composição da carteira | N4 | Deveria ter | Médio | Item 3 |        

## Backlog futuro

Os seguintes itens foram identificados durante a descoberta, mas não fazem parte da primeira fatia do MVP:

| Item | Origem | Prioridade inicial |
|---|---|---|
| Acompanhar rentabilidade | N3 | Futuro |
| Registrar aportes | N5 | Futuro |
| Registrar retiradas | N5 | Futuro |
| Visualizar histórico de movimentações | N6 | Futuro |
| Acompanhar evolução histórica do patrimônio | N2 | Futuro |
| Consultar cotações por API externa | N3 | Futuro |

## Histórias de usuário e critérios de aceitação  
### HU-01: Cadastro de novo investimento  
Como novo investidor João quero registrar um novo investimento informando o ativo, tipo, quantidade e valor, para organizar meus investimentos em uma única carteira. \[Origem: N1 e N5, confirmada em E1 e E2\]

CA-01.1: Cadastro com sucesso  
**- Dado** que o usuário está autenticado e na tela principal da carteira.  
**- Quando** ele preenche os campos obrigatórios (nome do ativo, tipo, quantidade e valor) e submete o formulário.  
**- Então** o sistema deve registrar o ativo, exibi-lo na listagem da carteira e apresentar uma mensagem de sucesso.

CA-01.2: Tentativa de cadastro com dados incompletos  
- **Dado** que o usuário está na tela de cadastro de ativo.  
- **Quando** ele tenta submeter o formulário com um ou mais campos obrigatórios em branco.  
- **Então** o sistema não deve salvar o investimento e deve exibir uma mensagem de erro indicando os campos faltantes.

### HU-02: Consulta do patrimônio  
Como investidor João, quero consultar o valor financeiro total dos meus investimentos somados, para acompanhar o tamanho do meu patrimônio de forma centralizada. \[Origem: N2, confirmada em E2\]

CA-02.1: Cálculo e exibição do patrimônio  
- **Dado** que o usuário possui ativos em sua carteira.  
- **Quando** ele visualiza a tela principal.  
- **Então** o sistema deve calcular a soma do valor de todos os ativos e exibir esse montante como "Valor Total Investido".

CA-02.2: Atualização após remoção  
- **Dado** que o usuário está visualizando a tela principal com o valor total calculado.  
- **Quando** ele remove um ativo da carteira.  
- **Então** o sistema deve subtrair o valor do ativo removido e atualizar a exibição do "Valor Total Investido" imediatamente.

### HU-03: Edição de informações do ativo  
Como investidor João, quero alterar as informações de um ativo já cadastrado, para corrigir erros de digitação ou atualizar o valor investido sem precisar excluí-lo. \[Origem: F4 do MVP (Descoberta)\]

CA-03.1: Edição com sucesso  
- **Dado** que o usuário está visualizando os detalhes de um ativo cadastrado.  
- **Quando** ele altera a quantidade ou o valor e confirma a edição  
- **Então** o sistema deve salvar as novas informações e atualizar os dados exibidos na listagem geral da carteira.

CA-03.2: Edição com dados inválidos
- **Dado** que o usuário está editando um ativo;
- **Quando** ele informa um valor ou quantidade inválidos;
- **Então** o sistema não deve salvar a alteração e deve informar o erro ao usuário.

### HU-04: Exclusão de um ativo  
Como investidor João, quero remover um ativo da minha carteira, para manter meu controle organizado caso eu não possua mais aquele investimento. \[Origem: F4 do MVP (Descoberta)\]

CA-04.1: Exclusão com confirmação  
- **Dado** que o usuário seleciona a opção de excluir um ativo.  
- **Quando** ele confirma a exclusão no alerta do sistema.  
- **Então** o ativo deve ser removido definitivamente do banco de dados e desaparecer da listagem da carteira.

CA-04.2: Cancelamento da exclusão
- **Dado** que o usuário seleciona a opção de excluir um ativo;
- **Quando** ele cancela a operação;
- **Então** o sistema não deve remover o ativo e deve mantê-lo na carteira.

### HU-05: Visualização da composição da carteira

Como investidor, quero visualizar como meus investimentos estão distribuídos na carteira, para compreender a composição dos meus ativos.

CA-05.1: Visualização da composição
- **Dado** que o usuário possui investimentos cadastrados;
- **Quando** ele acessa a tela principal da carteira;
- **Então** o sistema deve apresentar os ativos, tipos, quantidades e valores cadastrados de forma organizada.

CA-05.2: Atualização da composição
- **Dado** que o usuário possui investimentos cadastrados;
- **Quando** ele adiciona, edita ou remove um ativo;
- **Então** o sistema deve atualizar as informações apresentadas na composição da carteira.

## Casos de uso  
### UC-01 Cadastrar investimento  
Ator principal: Investidor  
- Fluxo principal:

1. O investidor acessa sua carteira.  
2. Seleciona a opção de cadastrar investimento.  
3. Informa o ativo.  
4. Informa o tipo de investimento.  
5. Informa a quantidade.  
6. Informa o valor investido.  
7. O sistema valida os dados.  
8. O sistema associa o investimento à carteira do usuário.  
9. O sistema salva os dados.  
10. O sistema apresenta o investimento cadastrado.

- Fluxos alternativos:

* A1 — Dados obrigatórios não preenchidos: o sistema informa quais campos precisam ser preenchidos e não realiza o cadastro.  
* A2 — Dados inválidos: o sistema informa o erro e solicita a correção dos dados.  
* A3 — Falha no armazenamento: o sistema informa que não foi possível concluir o cadastro.

### UC-02 Visualizar carteira  
Ator principal: Investidor  
- Fluxo principal:

1. O investidor acessa sua carteira.  
2. O sistema consulta os investimentos cadastrados.  
3. O sistema apresenta os ativos, quantidades e valores.  
4. O investidor visualiza a composição da carteira.

- Fluxo alternativo:

A1 — Carteira vazia: o sistema informa que ainda não existem investimentos cadastrados.

### UC-03 — Editar investimento
Ator principal: Investidor
- Fluxo principal:

1. O investidor acessa sua carteira.
2. Seleciona um investimento cadastrado.
3. Seleciona a opção de edição.
3. Altera as informações permitidas.
4. O sistema valida os dados.
5. O sistema salva as alterações.
6. O sistema atualiza as informações da carteira.

- Fluxos alternativos:
A1 — Dados inválidos: o sistema informa o erro e solicita a correção.
A2 — Falha no armazenamento: o sistema informa que não foi possível concluir a alteração.

### UC-04 — Remover investimento

Ator principal: Investidor
- Fluxo principal:

1. O investidor acessa sua carteira.
2. Seleciona um investimento cadastrado.
3. Seleciona a opção de remoção.
4. O sistema solicita confirmação.
5. O investidor confirma a operação.
6. O sistema remove o investimento.
7. O sistema atualiza a carteira e o valor total investido.

- Fluxo alternativo:
A1 — Operação cancelada: o usuário cancela a confirmação e o investimento permanece na carteira.

## Requisitos não funcionais

**RNF-01 Definição Tecnológica:** A stack de tecnologias utilizadas no desenvolvimento da aplicação deverá ser definida pelo grupo (Grandeza: Arquitetura, Condição: Fase inicial de projeto, Aceitável: Tecnologias web padrão, Pretendido: A definir pelo grupo, Como verificar: Documento de arquitetura). 

**RNF-02 Segurança e Acesso:** O sistema deve garantir restrição por login e autenticação (Grandeza: Segurança, Condição: Acesso ao sistema, Aceitável: JWT ou Session, Pretendido: Restringir visualização de ativos apenas ao dono da carteira, Como verificar: Testes de tentativa de acesso não autenticado).

**RNF-03 Velocidade :** O sistema deve processar e carregar as informações rapidamente, especialmente ao consultar o valor total investido e visualizar o desempenho da carteira (grandeza: velocidade, condição: carregamento de dados e transições de tela, aceitável: tempo de resposta de até 3 segundos, pretendido: tempo de resposta inferior a 1 segundo, como verificar: testes de carga e monitoramento do tempo de resposta das requisições).

**RNF-04 Disponibilidade:** O sistema deve estar sempre disponível para que o usuário possa acessar sua carteira de investimentos a qualquer momento (grandeza: disponibilidade, condição: operação normal do sistema hospedado, aceitável: 95% de tempo no ar no mês, pretendido: 99,9% de tempo no ar, como verificar: relatórios de ferramentas de monitoramento de uptime)

**RNF-05 Usabilidade e responsividade:** O sistema deve apresentar interface intuitiva, organizada e responsiva, permitindo que o usuário gerencie sua carteira tanto em computadores quanto em dispositivos móveis.

## Restrições e regras de negócio

**RE-01 Ausência de Compra e Venda Real de Ativos** O sistema não realizará operações reais de compra ou venda nem enviará ordens de negociação ao mercado. \[Origem: D1, Fora de escopo\] 

**RE-02 Ausência de Integração Direta com Corretoras** Não haverá importação automática de dados de contas de corretoras ou instituições financeiras; todo cadastro é realizado manualmente pelo usuário. \[Origem: D1, Fora de escopo\] 

**RE-03 Proibição de Movimentação Financeira** A aplicação não permitirá depósitos, saques, transferências, pagamentos ou qualquer movimentação de recursos financeiros reais. \[Origem: D1, Fora de escopo\] 

**RE-04 Ausência de Consultoria ou Recomendação Financeira** O sistema não fornecerá indicações, recomendações personalizadas ou sugestões sobre compra, venda ou manutenção de investimentos. \[Origem: D1, Fora de escopo\]

**RE-05 Desenvolvimento sem Aplicativo Mobile Nativo** Não serão desenvolvidos aplicativos nativos (Android/iOS) separados; o foco exclusivo será a aplicação Web responsiva. \[Origem: D1, Fora de escopo\]   
   
**RE-06 Ausência de Compartilhamento Público e Recursos Sociais** A carteira é estritamente privada. Funcionalidades como compartilhamento público, grupos, mensagens, comentários ou opção de seguir outros investidores estão fora do escopo. \[Origem: D1, Fora de escopo\] 

**RE-07 Ausência de Atendimento Profissional** A aplicação não oferecerá suporte de especialistas, consultores ou corretores financeiros. \[Origem: D1, Fora de escopo\]

## Validações realizadas  
### V1 — 2026-09-01, com aluno em estágio (perfil de E3)  
| Achado | Efeito | Item alterado |

## Histórico de revisão  
- 2026-09-14: linha de base do marco 1 
