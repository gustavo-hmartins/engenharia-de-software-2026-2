# Descoberta do problema

## Problema
Pessoas que possuem investimentos podem ter dificuldade para organizar e acompanhar os ativos que fazem parte de sua carteira. As informações sobre os investimentos podem ficar distribuídas em diferentes locais, dificultando a visualização da composição da carteira, do valor investido e da evolução dos ativos.

O problema identificado é a dificuldade de organizar e acompanhar, de forma centralizada, as informações relacionadas aos investimentos de uma pessoa.

## Partes interessadas
| Parte Interessada | Interesse no projeto | Poder de decisão | Contato |
|---|---|---|---|
| Usuário/investidor | Organizar e acompanhar seus investimentos | Alto | A definir |
| Equipe de desenvolvimento | Desenvolver e validar o sistema | Alto | Repositório da equipe |
| Professor da disciplina | Avaliar o desenvolvimento do projeto | Alto | A definir |
| Corretoras/ plataformas de investimentos | Possível fonte externa de informações sobre a B3 | Baixo | A definir |

## Personas
### João, investidor iniciante
- **Contexto:** 22 anos, estudante universitário e estagiário, começou a investir recentemente com uma pequena parte da renda mensal.
- **Objetivo:** acompanhar seus investimentos e entender quanto seu dinheiro está rendendo sem precisar utilizar várias ferramentas diferentes.
- **Dificuldade atual:** possui pouco conhecimento sobre investimentos e tem dificuldade para acompanhar a rentabilidade e a distribuição dos seus ativos.
- **Condição de uso:** acessa a carteira principalmente pelo celular, geralmente no intervalo das aulas ou durante o deslocamento para a universidade.
- **O que ele não precisa:** ferramentas avançadas de análise ou informações destinadas a investidores profissionais.

### Mariana, investidora em crescimento
- **Contexto:** 28 anos, trabalha na área de tecnologia e investe parte da renda mensal em diferentes tipos de ativos, como ações, fundos e renda fixa.
- **Objetivo:** centralizar seus investimentos e acompanhar a evolução do patrimônio e da rentabilidade da carteira.
- **Dificuldade atual:** utiliza planilhas e diferentes aplicativos para registrar e acompanhar seus investimentos, dificultando a visualização do desempenho geral da carteira.
- **Condição de uso:** acessa o sistema pelo celular durante o dia e pelo computador quando deseja analisar sua carteira com mais detalhes.
- **O que ela não precisa:** funcionalidades voltadas exclusivamente para iniciantes, como explicações básicas sobre o que são ações ou renda fixa.

## Fontes consultadas
---------------------
## Necessidades levantadas
| id | Necessidade | Parte | Fonte | Situação |
|---|---|---|---|---|
| N1 | Cadastrar e organizar em uma única carteira | investidor | E1 | Confirmada |
| N2 | Visualizar o valor total investido e a evolução do patrimônio | Investidor | E2 | Confirmada |
| N3 | Acompanhar a rentabilidade dos investimentos | Investidor | E2 | Confirmada |
| N4 | Consultar a distribuição da carteira por tipo de investimento | Investidor | E1 | Confirmada |
| N5 | Registrar aportes e retiradas realizadas na carteira | Investidor | E2 | Confirmada |
| N6 | Visualizar o histórico das movimentações realizadas | Investidor | E2 | Confirmada |
| N7 | Receber informações claras sobre o desempenho da carteira | Investidor iniciante | E3 | Confirmada |
| N8 | Acessar a carteira pelo celular de forma simples e rápida | Investidor | E3 | Confirmada |

## Escopo
### **Cadastro de usuário**
O sistema permitirá que novos usuários criem uma conta para utilizar a aplicação.
O cadastro deverá armazenar informações básicas necessárias para identificação do usuário e acesso ao sistema.

**Inclui:**
- Criação de uma conta;
- Cadastro das informações básicas do usuário;
- Validação das informações obrigatórias;
- Armazenamento dos dados do usuário;
- Identificação do usuário dentro do sistema.
  
### **Login e autenticação**
O sistema deverá permitir que o usuário cadastrado acesse sua conta por meio de um mecanismo de autenticação.

**Inclui:**
- Tela de login;
- Identificação do usuário;
- Verificação das credenciais;
- Controle de acesso à carteira do usuário;
- Impedimento de acesso aos dados de outros usuários.
  
### **Perfil do investidor**
O usuário poderá possuir um perfil dentro da aplicação, contendo informações utilizadas para caracterizar sua forma de investir.
O perfil terá como objetivo organizar informações do usuário e poderá ser utilizado posteriormente para ampliar funcionalidades do sistema.

**Inclui:**
- Cadastro das informações relacionadas ao perfil;
- Visualização das informações do perfil;
- Alteração dos dados cadastrados.
  
### **Criação e gerenciamento da carteira**
- O usuário poderá criar e acessar sua carteira de investimentos dentro do sistema.
- A carteira funcionará como o espaço principal para organização dos ativos pertencentes ao usuário.
- 
**Inclui:**
- Criação da carteira;
- Identificação da carteira;
- Acesso à carteira pelo usuário autenticado;
- Visualização dos ativos pertencentes à carteira;
- Organização das informações dos investimentos.
 
### **Cadastro de ativos**
O usuário poderá adicionar ativos à sua carteira.
Para cada ativo, deverão ser registradas as informações necessárias para identificar e acompanhar o investimento.

**Inclui:**
- Adição de um novo ativo;
- Identificação do ativo;
- Registro da quantidade de ativos;
- Registro do valor relacionado ao investimento;
- Associação do ativo à carteira do usuário;
- Visualização dos ativos cadastrados.
  
### **Edição de ativos**
O usuário poderá alterar informações de ativos que já estejam cadastrados em sua carteira.
Essa funcionalidade permitirá corrigir ou atualizar informações sem precisar excluir o ativo e cadastrá-lo novamente.

**Inclui:**
- Seleção de um ativo cadastrado;
- Alteração das informações permitidas;
- Atualização dos dados;
- Manutenção do ativo dentro da carteira após a edição.

### **Remoção de ativos**
O usuário poderá remover da carteira os ativos que não deseja mais acompanhar.

**Inclui:**
- Seleção do ativo;
- Solicitação de remoção;
- Confirmação da operação;
- Exclusão do ativo da carteira;
- Atualização das informações da carteira após a remoção.
  
### **Visualização da composição da carteira**
O sistema deverá apresentar uma visão geral dos ativos cadastrados na carteira.
O objetivo é permitir que o usuário compreenda quais investimentos fazem parte de sua carteira e como ela está composta.

**Inclui:**
- Listagem dos ativos;
- Identificação de cada ativo;
- Quantidade cadastrada;
- Valor associado ao investimento;
- Participação dos ativos na carteira, quando aplicável;
- Apresentação organizada das informações.
  
### **Consulta do valor total investido**
O sistema deverá permitir que o usuário consulte o valor total associado aos investimentos cadastrados.
O valor deverá ser apresentado de forma centralizada para facilitar o acompanhamento da carteira.

**Inclui:**
- Cálculo do valor total dos investimentos cadastrados;
- Exibição do valor total na carteira;
- Atualização do valor quando os ativos forem adicionados, editados ou removidos.

### **Acompanhamento do desempenho**
O sistema deverá apresentar informações que permitam ao usuário acompanhar o desempenho de sua carteira.

**Inclui:**
- Visualização do desempenho geral da carteira;
- Comparação entre valores registrados em diferentes momentos, quando os dados disponíveis permitirem;
- Apresentação das informações de maneira organizada;
- Identificação de evolução positiva ou negativa da carteira.

### **Valorização e desvalorização dos ativos**
O sistema deverá permitir que o usuário visualize se os ativos cadastrados apresentaram valorização ou desvalorização.

**Inclui:**
- Identificação da variação de valor;
- Apresentação da valorização;
- Apresentação da desvalorização;
- Visualização das informações individualmente por ativo;
- Apresentação das informações de forma compreensível ao usuário.

## Fora de escopo nesta versão
### **Compra e venda real de ativos**
O sistema não realizará operações reais de compra ou venda de investimentos.
O usuário poderá cadastrar que possui determinado ativo, mas não poderá utilizar a aplicação para enviar ordens de compra ou venda ao mercado.

**Motivo da exclusão:** realizar operações financeiras reais exigiria integração com instituições financeiras ou corretoras, além de requisitos de segurança e outras condições que não fazem parte do objetivo inicial do projeto acadêmico.

### **Integração direta com corretoras**
O sistema inicialmente não será integrado diretamente às contas de corretoras ou instituições financeiras.
Isso significa que os investimentos não serão automaticamente importados de uma conta externa.
O cadastro dos ativos será realizado pelo próprio usuário.
**Motivo da exclusão:** a integração dependeria de serviços externos, APIs e regras específicas de cada instituição. Essa dependência aumentaria a complexidade do projeto e não é necessária para validar a ideia principal da aplicação.

### **Movimentação de dinheiro**
A aplicação não permitirá que o usuário:
- Realize depósitos;
- Realize saques;
- Faça transferências;
- Efetue pagamentos;
- Transfira dinheiro entre contas;
- Movimente valores financeiros reais.
  
**Motivo da exclusão:** o sistema possui finalidade de gerenciamento e acompanhamento de investimentos, não de gerenciamento bancário ou movimentação financeira.

### **Consultoria ou recomendação financeira**
O sistema não terá como objetivo indicar ao usuário quais investimentos ele deve comprar, vender ou manter.
Também não será responsável por fornecer recomendações personalizadas de investimento.

**Motivo da exclusão:** a proposta inicial é fornecer organização e acompanhamento das informações da carteira, e não atuar como consultor financeiro.

### **Negociação automática de investimentos**
O sistema não realizará operações automáticas com base em regras de mercado.
Por exemplo, não haverá uma funcionalidade que compre ou venda automaticamente determinado ativo quando ele atingir um preço específico.

**Motivo da exclusão:** essa funcionalidade aumentaria significativamente a complexidade do sistema e não é necessária para atender ao objetivo principal da aplicação.

### **Análise avançada do mercado financeiro**
A primeira versão não terá como objetivo oferecer uma plataforma completa de análise do mercado financeiro.

Não estão incluídos inicialmente recursos como:
- Análise técnica avançada;
- Indicadores financeiros complexos;
- Previsões automatizadas de preços;
- Estratégias automatizadas de investimento;
- Análise aprofundada de empresas;
- Modelos de previsão do mercado.
  
**Motivo da exclusão:** essas funcionalidades ultrapassam o objetivo inicial de gerenciamento da carteira e poderiam ampliar excessivamente o escopo do projeto.

### **Integração com serviços externos para cotações em tempo real**
A primeira versão não terá como requisito obrigatório a obtenção automática e em tempo real das cotações dos ativos por meio de APIs externas.

**Motivo da exclusão:** depender de serviços externos adicionaria uma dependência técnica ao projeto. Além disso, o objetivo inicial é validar o gerenciamento da carteira, podendo a obtenção automática de cotações ser considerada em uma evolução futura.

### **Aplicativo mobile nativo**
O projeto inicialmente não terá como requisito o desenvolvimento de aplicativos nativos separados para Android e iOS.

**Motivo da exclusão:** desenvolver e manter versões específicas para diferentes sistemas operacionais aumentaria o esforço de desenvolvimento. A primeira versão deverá priorizar a aplicação principal necessária para validar o projeto.

### **Compartilhamento público da carteira**
A primeira versão não permitirá que o usuário torne sua carteira pública ou compartilhe seus investimentos com outros usuários.

**Motivo da exclusão:** o foco inicial é o gerenciamento individual da carteira. O compartilhamento adicionaria requisitos relacionados à privacidade, permissões e controle de acesso que não são necessários para o MVP.

### **Sistema social entre investidores**
Não serão implementadas inicialmente funcionalidades como:
- Seguir outros investidores;
- Curtir carteiras;
- Comentar investimentos;
- Criar grupos de investidores;
- Enviar mensagens entre usuários;
- Compartilhar publicações sobre investimentos.

**Motivo da exclusão:** essas funcionalidades transformam a aplicação de uma ferramenta de gerenciamento de carteira em uma plataforma social, aumentando significativamente o escopo do projeto.

### **Gestão de impostos e declaração de investimentos**
O sistema não realizará cálculos completos para declaração de imposto de renda ou obrigações fiscais relacionadas aos investimentos.

**Motivo da exclusão:** regras tributárias podem variar conforme o tipo de investimento e a situação do investidor. Essa funcionalidade não é necessária para o objetivo principal da aplicação.

### **Atendimento financeiro profissional**
O sistema não oferecerá atendimento de consultores ou especialistas financeiros.

**Motivo da exclusão:** a aplicação será uma ferramenta de software para organização e acompanhamento das informações dos investimentos, não uma plataforma de prestação de serviços financeiros.

## Produto mínimo viável
O Produto Mínimo Viável (MVP) da Carteira de Investimentos será uma versão funcional e reduzida do sistema, capaz de atender à principal necessidade identificada pelos usuários e, ao mesmo tempo, permitir que a equipe valide a solução com usuários reais.

A definição da fatia do MVP considera três critérios principais: necessidade confirmada, risco técnico e demonstrabilidade. A partir das necessidades levantadas, foi escolhida como primeira fatia a funcionalidade de cadastrar e acompanhar investimentos, permitindo que o usuário registre seus ativos e visualize as principais informações de sua carteira.

Essa escolha possibilita que o usuário tenha contato com o objetivo central do sistema sem que seja necessário implementar inicialmente todas as funcionalidades planejadas.

### **Funcionalidades incluídas no MVP**
O MVP será composto pelas seguintes funcionalidades:
| ID | Funcionalidade | Descrição |
|---|---|---|
| F1 | Cadastro de investimento | Permitir que o usuário registre um investimento informando dados básicos, como ativo, tipo, quantidade e valor investido. |
| F2 | Visualização da carteira | Exibir os investimentos cadastrados pelo usuário em uma visão organizada. |
| F3 | Consulta de informações | Permitir que o usuário consulte os dados dos investimentos registrados. |
| F4 | Edição e exclusão | Permitir alterar ou remover um investimento cadastrado. |
| F5 | Cálculo básico da carteira | Apresentar o valor total investido e a distribuição dos investimentos cadastrados. |
| F6 | Persistência dos dados |Armazenar os investimentos no banco de dados para que as informações não sejam perdidas. |

A fatia escolhida atravessa as principais camadas do sistema: interface, regras de negócio e banco de dados. Dessa forma, o MVP não será apenas uma tela demonstrativa, mas uma funcionalidade completa que poderá ser utilizada e avaliada.

## Riscos iniciais
### **R1** 
- **Risco:** A API utilizada para obter cotações dos ativos pode apresentar limitações ou indisponibilidade. 
- **Probabilidade:** média 
- **Impacto:** alto 
- **Resposta:** mitigar 
- **Ação e responsável:** testar a API durante as primeiras iterações e avaliar alternativas caso ela não atenda às necessidades do projeto; responsável: João Pedro.

### **R2** 
- **Risco:** A equipe pode encontrar dificuldades técnicas durante o desenvolvimento por pouca experiência com as tecnologias utilizadas. 
- **Probabilidade:** média 
- **Impacto:** alto 
- **Resposta:** mitigar 
- **Ação e responsável:** iniciar nas primeiras iterações as funcionalidades que envolvem tecnologias ainda não dominadas pela equipe; responsável: Vitor Rodrigues.

### **R3**
- **Risco:** Mudanças nos requisitos podem aumentar o trabalho necessário durante o desenvolvimento. 
- **Probabilidade:** média 
- **Impacto:** médio 
- **Resposta:** mitigar 
- **Ação e responsável:** revisar os requisitos e o backlog a cada iteração para incorporar mudanças sem comprometer o andamento do projeto; responsável: Gustavo Ferreira.

### **R4** 
- **Risco:** A disponibilidade dos integrantes pode diminuir em períodos de provas e outras atividades acadêmicas. 
- **Probabilidade:** média 
- **Impacto:** médio 
- **Resposta:** aceitar 
- **Ação e responsável:** caso ocorra, reduzir ou redistribuir o escopo da iteração durante o planejamento; responsável: Gustavo Henrique. 

## Histórico de revisão
- 2026-08-31: versão inicial 
