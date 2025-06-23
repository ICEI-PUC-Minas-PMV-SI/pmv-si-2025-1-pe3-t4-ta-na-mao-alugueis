# 5. PLANO DE TESTES DE SOFTWARE
   
[Avaliação_Heurística.xlsx](https://docs.google.com/spreadsheets/d/1QipAaNs_S8PoPJFnLZOnm6UwMiyYCNmAW43aU83k-es/edit?usp=sharing) 


## Relatório de Teste com Usuário

**Projeto:** “Tá Na Mão - Aluguéis” 
**Nome do Avaliador:** Luis Filipe Silva de Oliveira, Sebastião Felipe de Oliveira Barros, José Alexandre Santos Barbosa e Vitor Casimiro Madureira Souza. 
**Data:** 22/06/2025   

### Proposta
A proposta deste teste é verificar o entendimento e a usabilidade do projeto desenvolvido a partir das interações de um usuário representativo do público-alvo. O teste também avalia a satisfação geral do uso pelo usuário.

### Cenário
Com o desejo de fazer uma viagem pilotando uma moto icônica, mas não tendo certeza se deveria comprar uma, o usuário começa a buscar opções na internet. Durante a navegação, se depara com um site que exibe a mensagem: “Querendo viver uma experiência sem compromisso? Alugue hoje mesmo!”. A partir disso, surge a ideia de procurar se a moto Triumph 2014 está disponível para aluguel na plataforma.

<br/>

## <p align="center"><ins>Participante N°1</ins></p>

### Questões Introdutórias e Tarefas

<br/>

**Pergunta 1:** "Você já ouviu falar desse tipo de sistema?" 

**Resposta:** “Conheço a OLX que se parece muito na metodologia de funcionamento, mas nunca tinha visto para aluguel.”

---
**Pergunta 2:** "Apenas olhando para esse sistema, que tipo de informação você acha que poderia obter dele? Por favor, seja específico."

**Resposta:** ”Que quase tudo que alguém precisa ela pode adquirir na forma de aluguel sem precisar comprar, consigo ver todas as informações relevantes sobre os anúncios.”

---
**Pergunta 3:** “Para quem você acha que esse sistema foi desenvolvido? Por quê?” (Por exemplo: cidadão, profissionais da saúde, etc.)

**Resposta:** “Foi desenvolvido para qualquer tipo de pessoa, pois todos independente da profissão precisam das mais diversas coisas. Como pode ser realizado o anúncio de quase qualquer tipo de item, serve para todas as pessoas.” 

---
**Pergunta 4:** “Quem você acha que é o responsável por esse sistema?” (Por exemplo: empresa, empreendedor, marca, etc)

**Resposta:** “Como eu vi anúncios pertencentes a muitas pessoas diferentes, o responsável pelo sistema não é uma empresa que tem esses itens, e sim um empreendedor que apenas conecta pessoas.” 

---
**Tarefa 1**

Realizar Cadastro 

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Página inicial -> Modal de aviso (aguarda ou clica) -> Redirecionado para Página de Cadastro -> Preenche formulário (Nome, Telefone, CPF/CNPJ opcional, Senha, Confirma Senha) -> Clica "Cadastrar" -> Modal de sucesso -> Clica para fechar/redirecionar para Página Principal. |0<br/>Não completou<br/>0<br/>Completou com dificuldade ou ajuda<br/>1<br/>Completou facilmente|O usuário foi surpreendido ao perceber que não poderia entrar em um anúncio sem estar cadastrado.|

---
**Tarefa 2**

Localizar Anúncio de "Moto Triumph Street 2014" 

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal ->(Opção 1: Pesquisa) Usa barra de pesquisa (header ou Recomendados) -> Digita "Moto Triumph Street" (ou "Moto") -> Clica "Buscar" / Seleciona sugestão -> Página de resultados -> Clica no anúncio da moto. (Opção 2: Carrossel) Aguarda carrossel ou usa setas -> Clica no anúncio da moto. (Opção 3: Categoria) Clica em "Autos" (barra de categorias) -> Encontra e clica no anúncio da moto. |0<br/>Não completou<br/>0<br/>Completou com dificuldade ou ajuda<br/>1<br/>Completou facilmente||

---
**Tarefa 3**

Enviar Proposta de Aluguel  

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na página de detalhes do anúncio da "Moto Triumph Street 2014" -> Localiza card "Aluguel" -> Clica "Alugar" -> Abre modal de proposta (com preço pré-preenchido) -> (Opcional: Edita preço / Adiciona mensagem) -> Clica "Enviar Proposta" -> Fecha modal de proposta -> Abre modal de confirmação -> Clica para fechar/redirecionar para Página Principal. |0<br/>Não completou<br/>0<br/>Completou com dificuldade ou ajuda<br/>1<br/>Completou facilmente|O usuário achou interessante que a proposta pode ser negociada.|

---
**Tarefa 4**

Enviar Anúncio 

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> Clica "Anunciar grátis!" (header) -> Redirecionado para Página de Criação de Anúncio -> Preenche formulário (Título, Descrição, Categoria, Fotos, Preço, Unidade, Localização) -> Clica "Publicar Anúncio" -> Abre modal "Anúncio Enviado para Análise!" -> Clica para fechar/redirecionar para Página Principal. |0<br/>Não completou<br/>0<br/>Completou com dificuldade ou ajuda<br/>1<br/>Completou facilmente|O usuário achou interessante que os anúncios irão passar por uma verificação antes de serem de fato publicados.|

---

### Impressões finais

<br/>

**Pergunta 5:** "Qual foi sua impressão geral do sistema?"

**Resposta:** “Achei simples, mas sem deixar a desejar na funcionalidade.”

---
**Pergunta 6:** "Qual foi a sua impressão sobre as atividades propostas?"

**Resposta:** “Foram bem fáceis e intuitivas, mas pela estrutura do sistema, nenhuma atividade é complexa.”

---
**Pergunta 7:** "Você acha que este sistema é atual? Por quê?"

**Resposta:**  “É bastante atual, e acrescento que falta isso no mercado, nunca tinha me deparado com um sistema voltado de fato pra isso.”

---
**Pergunta 8:** "O que você mais gostou neste sistema?"

**Resposta:** “Poder enviar outra proposta a não ser a anunciada.”

---
**Pergunta 9:** "O que você menos gostou neste sistema?"

**Resposta:** “Não ter sido permitido acessar o anúncio sem que estivesse cadastrado, apesar de saber que isso é útil para evitar robôs sobrecarregarem o site.”

---
**Pergunta 10:** "Há alguma coisa que você acha que está faltando neste sistema? (Por exemplo: conteúdo, funções, etc.)"

**Resposta:** “Uma seção para fazer perguntas no próprio anúncio sobre o produto.”

---
**Pergunta 11:** "Se você fosse descrever este sistema para um colega em uma sentença ou duas, o que você diria?

**Resposta:**  “Alugar qualquer tipo de coisa, e colocar para que seja alugado.” 

---
**Pergunta 12:** "Você gostaria de fazer algum comentário final ou pergunta?"

**Resposta:** “É interessante ver que tem mercados que ainda não foram muito explorados.” 

--- 

### Conclusões do avaliador sobre o teste com o usuário

"O teste foi bastante produtivo e extremamente valioso para a análise do software. A inclusão de uma seção para perguntas diretamente no anúncio do produto seria uma funcionalidade muito interessante e agregaria valor à construção do sistema."

<br/><br/><br/>

## <p align="center"><ins>Participante N°2</ins></p>

### Questões Introdutórias e Tarefas

<br/>

**Pergunta 1:** "Você já ouviu falar desse tipo de sistema?"

**Resposta:** “Conheço sistemas de aluguel de casas, como o quinto andar ou ou de carros como localiza, mas não um que alugue tudo como esse.”

---
**Pergunta 2:** "Apenas olhando para esse sistema, que tipo de informação você acha que poderia obter dele? Por favor, seja específico."

**Resposta:** “Que o site proporciona opções de aluguel, nas áreas de automóveis, ferramentas, imóveis, esportes e decorações de festas.”

---
**Pergunta 3:** “Para quem você acha que esse sistema foi desenvolvido? Por quê?” (Por exemplo: cidadão, profissionais da saúde, etc.)

**Resposta:** “Para qualquer pessoa que tenha interesse em alugar alguma coisa”

---
**Pergunta 4:** “Quem você acha que é o responsável por esse sistema?” (Por exemplo: empresa, empreendedor, marca, etc)

**Resposta:** “Uma empresa de tecnologia.”

---
**Tarefa 1**

Realizar Cadastro

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Página inicial -> Modal de aviso (aguarda ou clica) -> Redirecionado para Página de Cadastro -> Preenche formulário (Nome, Telefone, CPF/CNPJ opcional, Senha, Confirma Senha) -> Clica "Cadastrar" -> Modal de sucesso -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|Usuário completou facilmente o cadastrado.|

---
**Tarefa 2**

Localizar Anúncio de "Moto Triumph Street 2014"

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> (Opção 1: Pesquisa) Usa barra de pesquisa (header ou Recomendados) -> Digita "Moto Triumph Street" (ou "Moto") -> Clica "Buscar" / Seleciona sugestão -> Página de resultados -> Clica no anúncio da moto. (Opção 2: Carrossel) Aguarda carrossel ou usa setas -> Clica no anúncio da moto. (Opção 3: Categoria) Clica em "Autos" (barra de categorias) -> Encontra e clica no anúncio da moto.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|Usuário localizou e navegou facilmente para o anúncio da Moto Triumph Street 2014.|

---
**Tarefa 3**

Enviar Proposta de Aluguel

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na página de detalhes do anúncio da "Moto Triumph Street 2014" -> Localiza card "Aluguel" -> Clica "Alugar" -> Abre modal de proposta (com preço pré-preenchido) -> (Opcional: Edita preço / Adiciona mensagem) -> Clica "Enviar Proposta" -> Fecha modal de proposta -> Abre modal de confirmação -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|Usuário achou prático e encontrou rapidamente o botão para enviar a proposta de aluguel, concluindo a tarefa sem dificuldades.|

---
**Tarefa 4**

Enviar Anúncio

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> Clica "Anunciar grátis!" (header) -> Redirecionado para Página de Criação de Anúncio -> Preenche formulário (Título, Descrição, Categoria, Fotos, Preço, Unidade, Localização) -> Clica "Publicar Anúncio" -> Abre modal "Anúncio Enviado para Análise!" -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|Usuário demonstrou estranhamento ao notar que o anúncio não apareceu na tela após ter sido criado, entretanto, achou interessante a ideia de moderação dos anúncios, pois poderia evitar crimes ou fraudes.|

---

### Impressões finais

<br/>

**Pergunta 5:** "Qual foi a sua impressão geral do sistema?"

**Resposta:** “Achei o sistema extremamente objetivo e intuitivo.”

---
**Pergunta 6:** "Qual foi a sua impressão sobre as atividades propostas?"

**Resposta:** “Achei simples e prático.”

---
**Pergunta 7:** "Você acha que este sistema é atual? Por quê?"

**Resposta:** “Sim, pois achei o design e as funcionalidades visualmente modernas.”

---
**Pergunta 8:** "O que você mais gostou neste sistema?"

**Resposta:** “Da praticidade em realizar as funções e da possibilidade de ter uma conversa direta com o anunciador, enviando nova proposta.”

---
**Pergunta 9:** "O que você menos gostou neste sistema?"

**Resposta:** “Não conseguir acessar o anúncio logo após ter criado ele.”

---
**Pergunta 10:** "Há alguma coisa que você acha que está faltando neste sistema? (Por exemplo: conteúdo, funções, etc.)"

**Resposta:** “Mais de uma opção de período de aluguel por anúncio, com valores diários, semanais e mensais.”

---
**Pergunta 11:** "Se você fosse descrever este sistema para um colega em uma sentença ou duas, o que você diria?"

**Resposta:** “Um site que tem tudo que você precisa, disponível para aluguel de forma prática.”

---
**Pergunta 12:** "Você gostaria de fazer algum comentário final ou pergunta?"

**Resposta:** “Não pensei em nada em especifico.”

---

### Conclusões do avaliador sobre o teste com o usuário

"Talvez seja interessante uma tela de pré-visualização do anúncio, enquanto este está sendo verificado."

<br/><br/><br/>

## <p align="center"><ins>Participante N°3</ins></p>

### Questões Introdutórias e Tarefas

<br/>

**Pergunta 1:** "Você já ouviu falar desse tipo de sistema?"

**Resposta:** “Não, nunca ouvi sobre sistema de aluguel online.”

---
**Pergunta 2:** "Apenas olhando para esse sistema, que tipo de informação você acha que poderia obter dele? Por favor, seja específico."

**Resposta:** “Que funciona de forma a ajudar seus usuários a alugarem as coisas ao invés de comprá-las, por exemplo.”

---
**Pergunta 3:** “Para quem você acha que esse sistema foi desenvolvido? Por quê?” (Por exemplo: cidadão, profissionais da saúde, etc.)

**Resposta:** “Me pareceu que qualquer pessoa que fizer seu cadastro pode realizar anúncios e alugar itens, então para todos eu acredito.”

---
**Pergunta 4:** “Quem você acha que é o responsável por esse sistema?” (Por exemplo: empresa, empreendedor, marca, etc.)

**Resposta:** “Se eu não soubesse que é o seu trabalho da faculdade, diria que possivelmente uma Start-up ou algo assim.”

---
**Tarefa 1**

Realizar Cadastro

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Página inicial -> Modal de aviso (aguarda ou clica) -> Redirecionado para Página de Cadastro -> Preenche formulário (Nome, Telefone, CPF/CNPJ opcional, Senha, Confirma Senha) -> Clica "Cadastrar" -> Modal de sucesso -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O usuário conseguiu realizar o cadastro sem dificuldades.|

---
**Tarefa 2**

Localizar Anúncio de "Moto Triumph Street 2014"

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> (Opção 1: Pesquisa) Usa barra de pesquisa (header ou Recomendados) -> Digita "Moto Triumph Street" (ou "Moto") -> Clica "Buscar" / Seleciona sugestão -> Página de resultados -> Clica no anúncio da moto. (Opção 2: Carrossel) Aguarda carrossel ou usa setas -> Clica no anúncio da moto. (Opção 3: Categoria) Clica em "Autos" (barra de categorias) -> Encontra e clica no anúncio da moto.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O usuário localizou o anúncio sem dificuldades.|

---
**Tarefa 3**

Enviar Proposta de Aluguel

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na página de detalhes do anúncio da "Moto Triumph Street 2014" -> Localiza card "Aluguel" -> Clica "Alugar" -> Abre modal de proposta (com preço pré-preenchido) -> (Opcional: Edita preço / Adiciona mensagem) -> Clica "Enviar Proposta" -> Fecha modal de proposta -> Abre modal de confirmação -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O usuário realizou o envio da proposta de aluguel sem problemas.|

---
**Tarefa 4**

Enviar Anúncio

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> Clica "Anunciar grátis!" (header) -> Redirecionado para Página de Criação de Anúncio -> Preenche formulário (Título, Descrição, Categoria, Fotos, Preço, Unidade, Localização) -> Clica "Publicar Anúncio" -> Abre modal "Anúncio Enviado para Análise!" -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O usuário conseguiu finalizar o anúncio sem problemas.|

---

### Impressões finais

<br/>

**Pergunta 5:** "Qual foi a sua impressão geral do sistema?"

**Resposta:** “A estrutura está bem agradável e o site bem eficiente.”

---
**Pergunta 6:** "Qual foi a sua impressão sobre as atividades propostas?"

**Resposta:** “Necessárias para verificar o funcionamento do site.”

---
**Pergunta 7:** "Você acha que este sistema é atual? Por quê?"

**Resposta:** “Acho sim, porque é uma ideia inovadora. Gostei bastante.”

---
**Pergunta 8:** "O que você mais gostou neste sistema?"

**Resposta:** “Seu layout está muito lindo, com cores chamativas e formatos satisfatórios.”

---
**Pergunta 9:** "O que você menos gostou neste sistema?"

**Resposta:** “Acredito que sua parte interativa está um pouco estática pelo fato de serem estudantes ainda em processo de aprendizagem.”

---
**Pergunta 10:** "Há alguma coisa que você acha que está faltando neste sistema? (Por exemplo: conteúdo, funções, etc.)"

**Resposta:** “Como falei na pergunta acima, acho que falta um pouco de interatividade.”

---
**Pergunta 11:** "Se você fosse descrever este sistema para um colega em uma sentença ou duas, o que você diria?"

**Resposta:** “Um site para alugar coisas.”

---
**Pergunta 12:** "Você gostaria de fazer algum comentário final ou pergunta?"

**Resposta:** “Parabenizar pelo trabalho, somente.”

---

<br/><br/><br/>

## <p align="center"><ins>Participante N°4</ins></p>

### Questões Introdutórias e Tarefas

<br/>

**Pergunta 1:** "Você já ouviu falar desse tipo de sistema?"

**Resposta:** “Não.”

---
**Pergunta 2:** "Apenas olhando para esse sistema, que tipo de informação você acha que poderia obter dele? Por favor, seja específico."

**Resposta:** “Acho que o sistema parece focado em facilitar o aluguel de diversos tipos de objetos e serviços, talvez algo como uma plataforma para conectar quem tem algo para alugar com quem precisa temporariamente.”

---
**Pergunta 3:** “Para quem você acha que esse sistema foi desenvolvido? Por quê?”

**Resposta:** “Parece ser para qualquer pessoa que queira economizar ou não queira comprar algo caro. Pode ser útil para estudantes, profissionais autônomos ou mesmo pessoas que querem uma renda extra alugando seus bens.”

---
**Pergunta 4:** “Quem você acha que é o responsável por esse sistema?”

**Resposta:** “Imagino que seja um grupo de desenvolvedores.”

---
**Tarefa 1**

Realizar Cadastro

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Página inicial -> Modal de aviso (aguarda ou clica) -> Redirecionado para Página de Cadastro -> Preenche formulário (Nome, Telefone, CPF/CNPJ opcional, Senha, Confirma Senha) -> Clica "Cadastrar" -> Modal de sucesso -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O processo de cadastro foi muito simples e direto, sem nenhuma complicação.|

---
**Tarefa 2**

Localizar Anúncio de "Moto Triumph Street 2014"

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> (Opção 1: Pesquisa) Usa barra de pesquisa (header ou Recomendados) -> Digita "Moto Triumph Street" (ou "Moto") -> Clica "Buscar" / Seleciona sugestão -> Página de resultados -> Clica no anúncio da moto. (Opção 2: Carrossel) Aguarda carrossel ou usa setas -> Clica no anúncio da moto. (Opção 3: Categoria) Clica em "Autos" (barra de categorias) -> Encontra e clica no anúncio da moto.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|A barra de pesquisa funcionou perfeitamente e o anúncio foi encontrado rapidamente. A categorização também é bem útil.|

---
**Tarefa 3**

Enviar Proposta de Aluguel

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na página de detalhes do anúncio da "Moto Triumph Street 2014" -> Localiza card "Aluguel" -> Clica "Alugar" -> Abre modal de proposta (com preço pré-preenchido) -> (Opcional: Edita preço / Adiciona mensagem) -> Clica "Enviar Proposta" -> Fecha modal de proposta -> Abre modal de confirmação -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|Conseguir enviar uma proposta foi bem intuitivo. Gostei da opção de poder ajustar o valor ou adicionar uma mensagem.|

---
**Tarefa 4**

Enviar Anúncio

|**Caminhos**|**Sucesso na Execução da Tarefa**|**Anotações / Observações**|
|:---:|:---:|:---:|
|Na Página Principal -> Clica "Anunciar grátis!" (header) -> Redirecionado para Página de Criação de Anúncio -> Preenche formulário (Título, Descrição, Categoria, Fotos, Preço, Unidade, Localização) -> Clica "Publicar Anúncio" -> Abre modal "Anúncio Enviado para Análise!" -> Clica para fechar/redirecionar para Página Principal.|0<br/>Não completou<br/>1<br/>Completou com dificuldade ou ajuda<br/>2<br/>Completou facilmente|O formulário para criar um anúncio é bem completo e fácil de preencher. A ideia de que o anúncio passa por análise antes de ser publicado é ótima para garantir a segurança.|

---

### Impressões finais

<br/>

**Pergunta 5:** "Qual foi a sua impressão geral do sistema?"

**Resposta:** “O sistema parece bem organizado e fácil de navegar, com uma interface limpa e objetiva. Dá para perceber que há uma preocupação com a experiência do usuário.”

---
**Pergunta 6:** "Qual foi a sua impressão sobre as atividades propostas?"

**Resposta:** “As atividades são interessantes para testar as funcionalidades básicas do site, mas acho que poderiam incluir testes mais focados em usabilidade e segurança.”

---
**Pergunta 7:** "Você acha que este sistema é atual? Por quê?"

**Resposta:** “Sim, a ideia de economia compartilhada está em alta, e o sistema segue tendências modernas de design e funcionalidade para esse tipo de aplicação.”

---
**Pergunta 8:** "O que você mais gostou neste sistema?"

**Resposta:** “A ideia do site é muito interessante, e também inovadora.”

---
**Pergunta 9:** "O que você menos gostou neste sistema?"

**Resposta:** “Acho que algumas interações poderiam ser mais dinâmicas, como animações ou feedbacks visuais mais claros durante o uso, para melhorar o engajamento.”

---
**Pergunta 10:** "Você gostaria de fazer algum comentário final ou pergunta?"

**Resposta:** “Acredito que vale pontuar que eu utilizaria esse sistema caso se tornasse verdadeiro.”

---
