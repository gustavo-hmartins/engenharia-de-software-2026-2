\# Requisitos  
\#\# Glossário do domínio  
| Termo | Definição | Fonte |  
|---|---|---|  
| Carteira de investimento | Espaço principal para organizar os ativos pertencentes ao usuário | Descoberta do problema |
| Ativo | Investimento cadastrado pelo usuário em sua carteira | Descoberta do problema |
| Valor investido | Valor associado ao investimento cadastrado na carteira | Descoberta do problema |
| Composição da carteira | Forma como os diferentes investimentos estão distribuídos dentro da carteira | N4 |
| Rentabilidade | Desempenho dos investimentos ao longo do tempo | N3 |
| Aporte | Valor adicionado pelo usuário aos seus investimentos | N5 |
| Retirada | Valor retirado pelo usuário de seus investimentos | N5 |
| Patrimônio | Valor total associado aos investimentos cadastrados pelo usuário | N2 |

\#\# Backlog ordenado  
| Ordem | Item | Origem | MoSCoW | Risco | Depende de |  
|---:|---|---|---|---|---|   
| 1 | Cadastrar usuário | Escopo | Obrigatório | Baixo | — |  
| 2 | Realizar login no sistema | Escopo | Obrigatório | Médio | Item 1 |  
| 3 | Cadastrar um investimento na carteira | N1 | Obrigatório | Médio | Item 2 |  
| 4 | Visualizar os investimentos cadastrados | N1 | Obrigatório | Baixo | Item 3 |  
| 5 | Editar um investimento cadastrado | N1 | Deveria ter | Baixo | Item 3 |  
| 6 | Remover um investimento cadastrado | N1 | Deveria ter | Baixo | Item 3 |   
| 7 | Visualizar o valor total investido | N2 | Poderia ter | Médio | Item 3 |  
| 8 | Consultar cotação de ativos por meio de API externa | N3 | Poderia ter | Alto | Item 3 |        

\#\# Histórias de usuário e critérios de aceitação  
\#\#\# HU-01: Cadastro de novo investimento  
Como novo investidor Renato quero registrar um novo investimento informando o ativo, tipo, quantidade e valor, para organizar meus investimentos em uma única carteira. \[Origem: N1 e N5, confirmada em E1 e E2\]

CA-01.1: Cadastro com sucesso  
**\- Dado** que o usuário está autenticado e na tela principal da carteira.  
**\- Quando** ele preenche os campos obrigatórios (nome do ativo, tipo, quantidade e valor) e submete o formulário.  
**\- Então** o sistema deve registrar o ativo, exibi-lo na listagem da carteira e apresentar uma mensagem de sucesso.

CA-01.2: Tentativa de cadastro com dados incompletos  
**\- Dado** que o usuário está na tela de cadastro de ativo.  
\- **Quando** ele tenta submeter o formulário com um ou mais campos obrigatórios em branco.  
\- **Então** o sistema não deve salvar o investimento e deve exibir uma mensagem de erro indicando os campos faltantes.

\#\#\# HU-02: Consulta do valor total investido  
Como investidor Renato, quero consultar o valor financeiro total dos meus investimentos somados, para acompanhar o tamanho do meu patrimônio de forma centralizada. \[Origem: N2, confirmada em E2\]

CA-02.1: Cálculo e exibição do patrimônio  
\- **Dado** que o usuário possui ativos em sua carteira.  
\- **Quando** ele visualiza a tela principal.  
\- **Então** o sistema deve calcular a soma do valor de todos os ativos e exibir esse montante como "Valor Total Investido".

CA-02.2: Atualização após remoção  
\- **Dado** que o usuário está visualizando a tela principal com o valor total calculado.  
\- **Quando** ele remove um ativo da carteira.  
\- **Então** o sistema deve subtrair o valor do ativo removido e atualizar a exibição do "Valor Total Investido" imediatamente.

\#\#\# HU-03: Edição de informações do ativo  
Como investidor Renato, quero alterar as informações de um ativo já cadastrado, para corrigir erros de digitação ou atualizar o valor investido sem precisar excluí-lo. \[Origem: F4 do MVP (Descoberta)\]

CA-03.1: Edição com sucesso  
\- **Dado** que o usuário está visualizando os detalhes de um ativo cadastrado.  
\- **Quando** ele altera a quantidade ou o valor e confirma a edição  
\- **Então** o sistema deve salvar as novas informações e atualizar os dados exibidos na listagem geral da carteira.

\#\#\# HU-04: Exclusão de um ativo  
Como investidor, quero remover um ativo da minha carteira, para manter meu controle organizado caso eu não possua mais aquele investimento. \[Origem: F4 do MVP (Descoberta)\]

CA-04.1: Exclusão com confirmação  
\- **Dado** que o usuário seleciona a opção de excluir um ativo.  
\- **Quando** ele confirma a exclusão no alerta do sistema.  
\- **Então** o ativo deve ser removido definitivamente do banco de dados e desaparecer da listagem da carteira.

\#\# Casos de uso  
\#\#\# UC-01 Cadastrar investimento  
Ator principal: Investidor  
\- Fluxo principal:

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

\- Fluxos alternativos:

* A1 — Dados obrigatórios não preenchidos: o sistema informa quais campos precisam ser preenchidos e não realiza o cadastro.  
* A2 — Dados inválidos: o sistema informa o erro e solicita a correção dos dados.  
* A3 — Falha no armazenamento: o sistema informa que não foi possível concluir o cadastro.

\#\#\# UC-02 Visualizar carteira  
Ator principal: Investidor  
\- Fluxo principal:

1. O investidor acessa sua carteira.  
2. O sistema consulta os investimentos cadastrados.  
3. O sistema apresenta os ativos, quantidades e valores.  
4. O investidor visualiza a composição da carteira.

\- Fluxo alternativo:

* A1 — Carteira vazia: o sistema informa que ainda não existem investimentos cadastrados.

\#\# Requisitos não funcionais

**RNF-01 Definição Tecnológica:** A stack de tecnologias utilizadas no desenvolvimento da aplicação deverá ser definida pelo grupo (Grandeza: Arquitetura, Condição: Fase inicial de projeto, Aceitável: Tecnologias web padrão, Pretendido: A definir pelo grupo, Como verificar: Documento de arquitetura). 

**RNF-02 Segurança e Acesso:** O sistema deve garantir restrição por login e autenticação (Grandeza: Segurança, Condição: Acesso ao sistema, Aceitável: JWT ou Session, Pretendido: Restringir visualização de ativos apenas ao dono da carteira, Como verificar: Testes de tentativa de acesso não autenticado).

**RNF-03 Velocidade :** O sistema deve processar e carregar as informações rapidamente, especialmente ao consultar o valor total investido e visualizar o desempenho da carteira (grandeza: velocidade, condição: carregamento de dados e transições de tela, aceitável: tempo de resposta de até 3 segundos, pretendido: tempo de resposta inferior a 1 segundo, como verificar: testes de carga e monitoramento do tempo de resposta das requisições).

**RNF-04 Disponibilidade:** O sistema deve estar sempre disponível para que o usuário possa acessar sua carteira de investimentos a qualquer momento (grandeza: disponibilidade, condição: operação normal do sistema hospedado, aceitável: 95% de tempo no ar no mês, pretendido: 99,9% de tempo no ar, como verificar: relatórios de ferramentas de monitoramento de uptime)

**RNF-05 Usabilidade:** O sistema deve ser fácil de usar e apresentar uma interface intuitiva, cumprindo o objetivo de facilitar o gerenciamento e permitir que as informações sejam acompanhadas de forma organizada (grandeza: usabilidade, condição: interação de um usuário leigo ao criar a carteira e adicionar ativos, aceitável: o usuário consegue criar uma conta e adicionar um ativo em até 3 minutos sem ajuda, pretendido: navegação clara ao ponto de não necessitar de manual ou tutorial, como verificar: aplicação de testes de usabilidade práticos com potenciais usuários).

\#\# Restrições e regras de negócio

\*\*RE-01 Ausência de Compra e Venda Real de Ativos\*\* O sistema não realizará operações reais de compra ou venda nem enviará ordens de negociação ao mercado. \[Origem: D1, Fora de escopo\] 

\*\*RE-02 Ausência de Integração Direta com Corretoras\*\* Não haverá importação automática de dados de contas de corretoras ou instituições financeiras; todo cadastro é realizado manualmente pelo usuário. \[Origem: D1, Fora de escopo\] 

\*\*RE-03 Proibição de Movimentação Financeira\*\* A aplicação não permitirá depósitos, saques, transferências, pagamentos ou qualquer movimentação de recursos financeiros reais. \[Origem: D1, Fora de escopo\] 

\*\*RE-04 Ausência de Consultoria ou Recomendação Financeira\*\* O sistema não fornecerá indicações, recomendações personalizadas ou sugestões sobre compra, venda ou manutenção de investimentos. \[Origem: D1, Fora de escopo\]

\*\*RE-05 Desenvolvimento sem Aplicativo Mobile Nativo\*\* Não serão desenvolvidos aplicativos nativos (Android/iOS) separados; o foco exclusivo será a aplicação Web responsiva. \[Origem: D1, Fora de escopo\]   
   
\*\*RE-06 Ausência de Compartilhamento Público e Recursos Sociais\*\* A carteira é estritamente privada. Funcionalidades como compartilhamento público, grupos, mensagens, comentários ou opção de seguir outros investidores estão fora do escopo. \[Origem: D1, Fora de escopo\] 

\*\*RE-07 Ausência de Atendimento Profissional\*\* A aplicação não oferecerá suporte de especialistas, consultores ou corretores financeiros. \[Origem: D1, Fora de escopo\]

\#\# Validações realizadas  
\#\#\# V1 — 2026-09-01, com aluno em estágio (perfil de E3)  
| Achado | Efeito | Item alterado |

\#\# Histórico de revisão  
\- 2026-09-07: linha de base do marco 1 
