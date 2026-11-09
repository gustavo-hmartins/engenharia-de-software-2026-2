# **Iterações**

Este documento registra o planejamento, o acompanhamento, os resultados e as retrospectivas das iterações do projeto **Carteira de Investimentos**. O PROCESSO.md define como a equipe trabalha; o REQUISITOS.md define o escopo, as prioridades e os critérios de aceitação do produto; este arquivo registra o trabalho planejado e o que foi aprendido a cada ciclo.

**Link do Quadro:** https://github.com/orgs/vertice-patrimonio/projects/4

## **Acordos de planejamento e acompanhamento**

* **Duração:** uma semana, com início na quinta-feira, conforme o PROCESSO.md.  
* **Planejamento:** segunda-feira, às 19h30, com duração prevista de 30 minutos.  
* **Acompanhamento e comunicação:** Google Meet para reuniões, WhatsApp para comunicação contínua e GitHub para pull requests, backlog e tarefas.  
* **Demonstração:** segunda-feira, conforme o processo definido pela equipe.  
* **Retrospectiva:** 10 minutos após a demonstração.

## **Quadro de tarefas**

O quadro do GitHub deverá mostrar, no mínimo, os estados **Backlog**, **Pronto para desenvolver**, **Em andamento**, **Em revisão**, **Em teste**, **Concluído** e **Bloqueado**.

Como regra inicial a ser confirmada pelo grupo, recomenda-se limitar a **dois itens em andamento** e **dois itens em revisão** ao mesmo tempo. Se uma coluna atingir o limite, a equipe deve ajudar a concluir ou revisar os itens existentes antes de iniciar novos trabalhos.

## **Iteração 1 — Cadastro de usuário e autenticação**

**Período:** 2026-10-22 a 2026-10-29

**Situação:** planejamento proposto.

### **Meta da iteração**

Permitir que uma pessoa crie uma conta e, utilizando credenciais válidas, entre no sistema. Tentativas de acesso com credenciais inválidas devem ser recusadas. Ao final da iteração, a equipe deverá conseguir demonstrar esse fluxo em um ambiente integrado.

A escolha começa pelos dois primeiros itens do backlog ordenado do REQUISITOS.md: **cadastrar usuário** e **realizar login**. Eles são dependências para que, nas próximas iterações, o cadastro e a consulta dos investimentos possam ser associados ao usuário correto. Esta primeira meta estabelece a base de acesso, mas ainda não representa, isoladamente, todo o MVP descrito no DESCOBERTA.md.

### **Itens selecionados (Backlog de interação)**

| Ordem no backlog | Item | Estimativa provisória | Necessário para a demonstração? |
| ----- | ----- | ----- | ----- |
| 1 | Cadastrar usuário | 3 pontos | Sim |
| 2 | Realizar login no sistema | 5 pontos | Sim |
|  | **Total planejado** | **8 pontos** |  |

### **Critérios verificáveis para a demonstração**

**Item 1 — Cadastrar usuário**

* Dado que uma pessoa ainda não está cadastrada, quando preencher os campos obrigatórios com dados válidos e enviar o formulário, então o sistema deve registrar a conta e apresentar uma confirmação.  
* Dado que existam campos obrigatórios ausentes ou inválidos, quando a pessoa tentar concluir o cadastro, então o sistema deve informar o problema e não registrar a conta com dados incompletos.

**Item 2 — Realizar login no sistema**

* Dado que existe uma conta cadastrada, quando a pessoa informar credenciais válidas, então o sistema deve autenticar o usuário e permitir o acesso à área protegida.  
* Dado que as credenciais sejam inválidas, quando a pessoa tentar entrar, então o sistema deve recusar o acesso e apresentar uma mensagem apropriada.  
* O sistema não deve permitir acesso à área protegida sem autenticação. O controle de acesso deve respeitar o requisito RNF-02 e impedir que um usuário acesse dados pertencentes a outra conta.

### 

### 

### 

### 

### **Divisão inicial das tarefas**

| Tarefa | Item relacionado | Resultado verificável | Responsável | Prazo previsto |
| ----- | ----- | ----- | ----- | ----- |
| Refinar os campos, validações e critérios do cadastro de usuário | Cadastrar usuário | Critérios acordados e issue detalhada | A definir pelo grupo | Até 1 dia útil |
| Implementar o formulário e as validações do cadastro | Cadastrar usuário | Formulário validado com dados válidos e inválidos | A definir pelo grupo | 1–2 dias úteis |
| Persistir os dados da conta e testar o cadastro | Cadastrar usuário | Conta salva e testes executados | A definir pelo grupo | 1–2 dias úteis |
| Implementar o login e a verificação de credenciais | Realizar login | Credenciais válidas aceitas e inválidas recusadas | A definir pelo grupo | 1–2 dias úteis |
| Verificar proteção de acesso e integração dos fluxos | Realizar login | Rotas protegidas e testes de acesso não autorizado | A definir pelo grupo | 1–2 dias úteis |
| Revisar o código, executar os testes, integrar os pull requests e preparar a demonstração | Ambos | Fluxos integrados e demonstração reproduzível | A definir pelo grupo | Antes da demonstração |

### **Durante a iteração**

No acompanhamento, a equipe deve atualizar o quadro conforme o trabalho acontece. A comunicação diária deve esclarecer apenas o que não estiver evidente no quadro: o que foi concluído, qual é o próximo passo e o que está bloqueado.

Novas funcionalidades ou mudanças de escopo identificadas durante a semana devem ser registradas no backlog para análise no próximo planejamento. A meta desta iteração não deve mudar de forma que comprometa a demonstração. Defeitos que impeçam o uso do sistema devem ser avaliados imediatamente.

A preparação da demonstração faz parte do trabalho: reservar tempo para conferir o ambiente, usar dados de teste e percorrer o fluxo de cadastro e login. Como prática de segurança, as alterações necessárias à demonstração devem estar integradas e verificadas antes do ensaio final; evitar integrações arriscadas nas 24 horas anteriores à apresentação.

## **Resultado da Iteração 1**

| Indicador | Resultado real |
| ----- | ----- |
| Itens planejados | 2 |
| Pontos planejados | 8 |
| Itens concluídos conforme a definição de pronto | Item 1 e Item 2|
| Pontos concluídos | 8 |
| Itens devolvidos ao backlog | Nenhum |
| Primeiro item concluído em | Item 1, foi concluído em 1 semana |
| Issues bloqueadas e duração dos bloqueios | Nenhuma |
| Pull requests integrados | PR #1 - https://github.com/gustavo-hmartins/engenharia-de-software-2026-2/pull/30 PR #2 - https://github.com/gustavo-hmartins/engenharia-de-software-2026-2/pull/30 |
| Velocidade observada | Aproximadamente 1 semana |

## **Demonstração e observação do usuário**
Ao final da primeira iteração, foi apresentada a implementação das funcionalidades de cadastro de usuário e login, demonstrando o fluxo inicial de acesso ao sistema Carteira de Investimentos.

Durante a demonstração, foram contemplados os seguintes aspectos:
* **Cadastro de usuário:** apresentação do formulário de criação de conta e do registro das informações necessárias para o acesso ao sistema.
* **Validação dos dados:** verificação do comportamento do sistema diante do preenchimento incorreto ou incompleto dos campos obrigatórios.
* **Login e autenticação:** demonstração do acesso ao sistema utilizando credenciais cadastradas e da validação das informações de autenticação.
* **Controle de acesso:** verificação de que o usuário precisa estar autenticado para acessar as funcionalidades protegidas.

### **Observações do usuário:**
A primeira iteração estabeleceu a estrutura inicial de acesso à aplicação. A demonstração permitiu verificar o funcionamento do cadastro e da autenticação, que servirão de base para as próximas funcionalidades.

## **Retrospectiva da Iteração 1**

A retrospectiva da primeira iteração avaliou a organização e a execução do trabalho realizado durante aproximadamente uma semana. A meta definida para o ciclo foi concluída: implementar o cadastro de usuário e o login da aplicação Carteira de Investimentos.

### O que funcionou bem

- A equipe trabalhou com uma meta objetiva, concentrada em duas funcionalidades fundamentais para o sistema.
- A divisão do trabalho em tarefas menores ajudou a organizar as atividades entre os integrantes.
- O cadastro de usuário e o login foram concluídos dentro do período aproximado de uma semana.
- A conclusão dessas funcionalidades estabeleceu a base de acesso necessária para que os usuários possam utilizar as próximas funcionalidades da carteira.

### O que pode ser melhorado

- **Comunicação durante o desenvolvimento:** como as tarefas são divididas entre os integrantes, é importante compartilhar decisões técnicas, alterações e dificuldades durante a execução, evitando que informações fiquem isoladas.
- **Revisão e integração do código:** a integração não deve depender de apenas um integrante. As contribuições devem ser registradas em pull requests e revisadas por outra pessoa da equipe antes de serem incorporadas à branch principal.
- **Acompanhamento das tarefas:** o GitHub Projects e as issues devem ser atualizados durante a semana, para que o quadro represente o andamento real do trabalho.

### Ações de melhoria para a Iteração 2

| Ação | Como será realizada | Como verificar |
|---|---|---|
| Ampliar a revisão compartilhada do código | O integrante responsável pela tarefa abrirá ou atualizará o pull request, e outro integrante fará a revisão antes da integração à branch `main`. | Verificar se os pull requests da iteração possuem revisão de outro integrante e se foram integrados somente após a conferência. |
| Manter o quadro atualizado | Cada responsável atualizará a issue e o cartão no GitHub Projects quando iniciar, bloquear, enviar para revisão ou concluir uma tarefa. | Conferir, durante a iteração e no encerramento, se os estados do quadro correspondem ao andamento das atividades. |

### O que a equipe deve manter

A equipe deve manter o planejamento com uma meta definida, a divisão das funcionalidades em tarefas menores, o acompanhamento pelo GitHub Projects e a demonstração ao final da iteração. A duração de aproximadamente uma semana pode continuar como referência inicial, sendo reavaliada conforme a capacidade e os resultados dos próximos ciclos.

## **Revisão dos riscos**

| Risco relacionado aos documentos do projeto | Relevância para esta iteração | Ação / acompanhamento |
| ----- | ----- | ----- |
| Dificuldades técnicas por pouca experiência com as tecnologias escolhidas (DESCOBERTA.md) | Alta, especialmente na implementação de cadastro e autenticação | Definir a tecnologia necessária, testar as partes desconhecidas cedo e registrar bloqueios assim que surgirem. Responsável: a definir pelo grupo. |
| Mudanças nos requisitos durante o desenvolvimento (DESCOBERTA.md) | Média | Registrar novas demandas no backlog e priorizá-las no próximo planejamento, sem alterar a meta em curso sem negociação explícita. Responsável: a definir pelo grupo. |
| Indisponibilidade ou limitação de API externa para cotações (DESCOBERTA.md) | Baixa nesta iteração, pois cotações externas não fazem parte da meta de cadastro e autenticação | Manter o registro de riscos e reavaliar quando a equipe priorizar a integração de cotações. |
| Proteção das contas e dos dados de cada investidor (REQUISITOS.md, RNF-02) | Alta | Verificar acesso não autenticado e tentar acessar dados associados a outra conta; registrar o resultado dos testes. |

## **Preparação da Iteração 2**

A seleção definitiva deve ocorrer após a retrospectiva da Iteração 1, considerando o que foi realmente concluído, os itens devolvidos ao backlog, os riscos e a capacidade observada. Como direção inicial, a próxima iteração deverá priorizar a primeira fatia funcional do MVP: **cadastrar um investimento e visualizar os investimentos da própria carteira**, respeitando as dependências de cadastro e autenticação e os critérios do REQUISITOS.md (especialmente HU-01 e o caso de uso UC-01).

A composição exata, as estimativas e a meta da Iteração 2 não estão fixadas aqui, pois dependem do resultado do ciclo anterior e do planejamento da equipe.

## **Histórico de revisão**

* \[18/10/2026\]: criação da proposta inicial de ITERACOES.md, baseada no PROCESSO.md, no REQUISITOS.md, no DESCOBERTA.md e nas orientações do capítulo 8 — Planejamento ágil e estimativas.

