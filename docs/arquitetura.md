# **Arquitetura**

## **1\. Visão geral**

O sistema Carteira de Investimentos será uma aplicação Web responsiva destinada ao gerenciamento e à visualização dos investimentos cadastrados pelo usuário.

A arquitetura será organizada em frontend, backend e banco de dados relacional. O frontend será responsável pela interface e pela interação com o usuário. O backend concentrará as regras de negócio, a autenticação, as validações e o acesso aos dados. O banco de dados armazenará as informações persistentes da aplicação.

A comunicação entre frontend e backend ocorrerá por meio de uma API REST, utilizando JSON para troca de dados.

A primeira versão adotará uma arquitetura de monólito modular, com separação de responsabilidades entre os módulos, evitando a complexidade de manter serviços independentes durante o desenvolvimento do MVP.

Diagrama principal: `diagramas/arquitetura.md`.

## **2\. Responsabilidades**

| Parte | Sabe | Faz | RESPONSÁVEIS |
| ----- | ----- | ----- | ----- |
| Frontend | Apresentação dos dados e interação com o usuário | Exibe a carteira, apresenta formulários, válida entradas básicas e consome a API | GUSTAVO FS VITOR GABRIEL JOÃO PEDRO |
| Backend — Borda | Requisições HTTP, autenticação e formatos de resposta | Recebe as requisições, verifica acesso, chama os serviços de domínio e retorna respostas | GUSTAVO FS VITOR GABRIEL JOÃO PEDRO |
| Backend — Domínio | Regras de negócio e conceitos da carteira | Gerencia investimentos, valida operações e calcula o valor total investido | GUSTAVO FS VITOR GABRIEL JOÃO PEDRO |
| Backend — Persistência | Mapeamento entre objetos e dados armazenados | Consulta, registra, atualiza e inativa os dados no banco | GUSTAVO FS VITOR GABRIEL JOÃO PEDRO |
| Banco de dados | Dados persistentes e integridade estrutural | Armazena usuários, perfis, carteiras e ativos, garantindo chaves e restrições de integridade | GUSTAVO HENRIQUE VITOR RODRIGUES |

O frontend não terá acesso direto ao banco de dados. Todas as operações persistentes serão realizadas pelo backend.

## **3\. Onde cada parte roda**

Durante o desenvolvimento, frontend, backend e banco de dados poderão executar no ambiente local dos desenvolvedores.

Na implantação, o navegador do usuário acessa o frontend, que fará requisições ao backend. O backend acessa o banco de dados por uma conexão própria.

Diagrama de implantação: `diagramas/implantacao.md`.

A aplicação será implantada como uma unidade lógica, mantendo os módulos do backend organizados internamente. A hospedagem definitiva será definida posteriormente, conforme os requisitos de implantação da disciplina.

## **4\. Organização interna do backend**

O backend será dividido em três camadas:

* **Borda:** controladores responsáveis por receber requisições HTTP, validar o formato das entradas e montar as respostas.  
* **Domínio:** serviços e entidades responsáveis pelas regras de negócio da carteira de investimentos.  
* **Persistência:** repositórios responsáveis pelo acesso ao banco de dados.

As dependências seguirão da borda para o domínio e do domínio para as abstrações de persistência. As regras de negócio não dependerão diretamente dos detalhes HTTP ou da interface visual.

Essa separação facilitará os testes, a manutenção e futuras alterações na interface ou no banco de dados.

## **5\. Contrato da API**

A API será baseada em recursos, utilizando os métodos HTTP e respostas JSON. Os caminhos abaixo representam a proposta inicial de contrato e deverão ser revisados pela equipe antes da implementação.

| Método | Endpoint | Responsabilidade |
| ----- | ----- | ----- |
| POST | `/api/usuários` | Cadastrar um usuário |
| POST | `/api/auth/login` | Autenticar um usuário |
| GET | `/api/perfil` | Consultar o perfil do usuário autenticado |
| PUT | `/api/perfil` | Atualizar o perfil do usuário |
| GET | `/api/carteira` | Consultar a carteira do usuário autenticado |
| GET | `/api/carteira/ativos` | Listar os investimentos ativos da carteira |
| POST | `/api/carteira/ativos` | Cadastrar um investimento |
| GET | `/api/carteira/ativos/{id}` | Consultar um investimento específico |
| PUT | `/api/carteira/ativos/{id}` | Editar um investimento |
| DELETE | `/api/carteira/ativos/{id}` | Remover um investimento da carteira |

O contrato definitivo deverá especificar os campos de entrada e saída, as respostas de sucesso e os erros possíveis para cada operação.

Os códigos HTTP previstos incluem:

* `200 OK`: operação de consulta ou atualização concluída.  
* `201 Created`: recurso criado com sucesso.  
* `204 No Content`: remoção concluída sem corpo de resposta.  
* `400 Bad Request`: entrada inválida ou malformada.  
* `401 Unauthorized`: usuário não autenticado.  
* `403 Forbidden`: operação não permitida.  
* `404 Not Found`: recurso inexistente ou não acessível.  
* `409 Conflict`: conflito com uma restrição, como e-mail já cadastrado.  
* `422 Unprocessable Content`: dados válidos sintaticamente, mas incompatíveis com as regras de negócio, quando adotado pela implementação.

Os endpoints de carteira e investimentos deverão retornar apenas informações pertencentes ao usuário autenticado.

## **6\. Fluxo principal da aplicação**

O fluxo de visualização da carteira ocorrerá da seguinte maneira:

1. O usuário acessa o sistema e realiza a autenticação.  
2. O frontend solicita a carteira do usuário à API.  
3. O backend identifica o usuário autenticado e verifica suas permissões.  
4. A camada de domínio solicita os investimentos ativos à persistência.  
5. A persistência consulta o banco de dados.  
6. O backend calcula o valor total investido a partir dos valores cadastrados.  
7. A API devolve os dados consolidados em JSON.  
8. O frontend apresenta o patrimônio, a composição da carteira e a listagem dos ativos.

O cadastro e a edição seguirão fluxo semelhante, com validação das informações antes da persistência.

## **7\. Verificações e validações**

| Verificação | Frontend | Backend |
| ----- | ----- | ----- |
| Campos obrigatórios | Informa os campos ausentes | Válida novamente antes de salvar |
| Quantidade e valor investido | Ajuda a impedir entradas inválidas | Aplica as regras definitivas de validação |
| Autenticação | Controla a apresentação das telas privadas | Verifica a identidade em cada operação protegida |
| Propriedade da carteira | Exibe os dados da conta atual | Impede o acesso aos dados de outros usuários |
| Cadastro duplicado | Pode informar previamente o conflito | Garante as restrições de unicidade aplicáveis |
| Cálculo do valor total | Apresenta o resultado recebido | Calcula o total a partir dos dados persistidos |
| Remoção de investimento | Solicita confirmação e atualiza a interface | Confere a propriedade e executa a operação autorizada |

As validações do frontend terão finalidade de usabilidade. O backend será a autoridade final para as regras de negócio e de segurança.

## **8\. Qualidades e custos**

| Qualidade | Decisão arquitetural | Consequência aceita |
| ----- | ----- | ----- |
| Segurança | Autenticação e autorização no backend | Implementação e manutenção das verificações de acesso |
| Manutenibilidade | Separação em camadas e módulos | Maior organização inicial e necessidade de definir interfaces internas |
| Usabilidade | Interface Web responsiva, seguindo o protótipo | Necessidade de testar diferentes tamanhos de tela |
| Desempenho | Consultas adequadas e cálculo do total no backend | O cálculo precisará ser refeito após alterações na carteira |
| Confiabilidade | Banco relacional com transações quando necessárias | Configuração e tratamento de falhas nas operações de persistência |
| Flexibilidade | Comunicação por API REST | Necessidade de manter o contrato compatível entre frontend e backend |

## **9\. Decisões arquiteturais**

| ID | Decisão | Motivo | Consequência aceita | Situação |
| ----- | ----- | ----- | ----- | ----- |
| A-01 | Adotar monólito modular | Adequado ao escopo do MVP e ao prazo acadêmico | O sistema será implantado como uma unidade | Proposta |
| A-02 | Separar frontend, backend e persistência | Isolar apresentação, regras de negócio e armazenamento | Necessidade de definir interfaces entre as partes | Proposta |
| A-03 | Utilizar API REST com JSON | Permitir comunicação clara entre frontend e backend | Contrato deverá ser documentado e mantido | Proposta |
| A-04 | Restringir o acesso aos dados pelo backend | Garantir a privacidade das carteiras | Toda operação protegida exigirá verificação de acesso | Aceita |
| A-05 | Calcular o valor total no backend | Centralizar o cálculo e evitar divergências entre telas | O cálculo será refeito após alterações nos investimentos | Aceita no PROJETO.md |
| A-06 | Utilizar banco de dados relacional | Atender às relações entre usuários, perfis, carteiras e ativos | Será necessário definir o esquema e as restrições de integridade | Proposta |
| A-07 | Permitir cadastro manual independentemente de cotações externas | Evitar que a indisponibilidade de serviços externos impeça o uso principal | Os valores exibidos dependerão dos dados cadastrados, não necessariamente de cotações atuais | Aceita no PROJETO.md |
| A-08 | Definir a tecnologia do frontend, backend e banco | O grupo ainda não concluiu a seleção tecnológica | A implementação dependerá dessa decisão | Pendente |

## **10\. Pontos em aberto**

* Definir as tecnologias e os frameworks de frontend e backend, considerando o conhecimento da equipe, os testes e a facilidade de implantação.  
* Definir o sistema gerenciador de banco de dados relacional.  
* Definir o mecanismo de autenticação, como sessão ou token JWT.  
* Formalizar o contrato da API em `contrato/operacoes.md` e criar exemplos de requisições e respostas.  
* Criar e revisar os diagramas Mermaid de arquitetura e implantação.  
* Confirmar a estratégia de remoção de investimentos: o `PROJETO.md` prevê apagamento lógico, enquanto o critério CA-04.1 de `REQUISITOS.md` menciona exclusão definitiva. A equipe deverá resolver essa divergência antes de implementar a operação.  
* Definir a estratégia de implantação e hospedagem.  
* Manter a integração com cotações externas fora do caminho crítico do MVP.

## **11\. Histórico de revisão**

* 2026-10-19: elaboração da primeira proposta de arquitetura com base nos requisitos e no modelo de projeto existentes.

