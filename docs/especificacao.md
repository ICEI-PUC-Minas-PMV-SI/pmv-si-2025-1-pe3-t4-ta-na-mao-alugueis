# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

A especificação de requisitos de software é o processo responsável por levantar, organizar e documentar tudo o que um sistema deve cumprir para atingir seus objetivos com precisão e qualidade. No projeto "Tá na Mão", essa etapa é fundamental para estruturar uma solução eficiente de intermediação de aluguéis, assegurando que todas as funcionalidades e comportamentos esperados da plataforma estejam alinhados às necessidades reais dos usuários e aos princípios da economia colaborativa.

## 3.1 Objetivos deste documento
Este documento tem como objetivo apresentar, de forma clara e detalhada, os requisitos do sistema "Tá na Mão", abordando tanto os aspectos funcionais quanto os não funcionais. Além disso, define os limites e o escopo da solução proposta, oferecendo uma base sólida para o desenvolvimento e validação do sistema, com foco em sustentabilidade, segurança e praticidade para usuários pessoas físicas e jurídicas.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto desenvolvido será denominado "Tá na Mão - Aluguéis". Trata-se de um sistema multiplataforma, com versões web e mobile, composto por diferentes módulos integrados. Entre seus componentes principais, destaca-se o módulo de gerenciamento de usuários, responsável pelo cadastro, autenticação e administração de perfis. Outro componente essencial é o módulo de gerenciamento de anúncios, o qual permite o cadastro, edição e busca de itens disponíveis para locação. O sistema também contará com um módulo de comunicação interna entre os usuários, possibilitando a troca de mensagens via chat. Haverá, ainda, um módulo de avaliações, que permitirá a análise das experiências entre locadores e locatários; um módulo financeiro, que abrangerá pagamentos e solicitações de reembolsos; e, por fim, um módulo de relatórios, que possibilitará a emissão de registros detalhados sobre as transações realizadas na plataforma. 

### 3.2.2 Missão do produto
A missão do sistema "Tá na Mão" é facilitar a locação de itens entre usuários, promovendo o uso eficiente e compartilhado de bens materiais. Ao permitir que itens sejam utilizados por diferentes pessoas por um período determinado, o sistema contribui para a economia sustentável e colaborativa. Além disso, busca-se proporcionar uma experiência segura, prática e acessível, gerando oportunidades de renda extra para quem possui itens ociosos e suprindo, de forma econômica, as necessidades de quem deseja utilizá-los temporariamente.  

### 3.2.3 Limites do produto
O sistema "Tá na Mão" não tem como escopo a gestão de processos jurídicos decorrentes de disputas entre usuários, tampouco se responsabiliza pelo transporte ou pela logística envolvida na entrega e devolução dos itens alugados. Também não contempla garantias contratuais ou seguros relacionados aos bens cadastrados na plataforma. O sistema não será destinado à intermediação de serviços que não envolvam objetos físicos, nem abrangerá integrações com serviços de pagamento internacionais. Por fim, não será de responsabilidade da plataforma o controle fiscal ou a emissão automática de notas fiscais. 

  

Dessa forma, o foco do "Tá na Mão" permanece na criação de uma experiência digital segura e eficiente para o aluguel e empréstimo de objetos de maneira temporária, tanto entre pessoas físicas quanto jurídicas. 

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Economia de dinheiro.  |	Já que poderão alugar somente pelo tempo necessário ao invés de comprar.  |
|2 | Acessibilidade a Produtos de Custo Alto.  | Também pelo fato de serem alugados e não comprados.  | 
|3 | Facilidade de Acesso | A plataforma torna o processo mais rápido e conveniente do que procurar localmente.  | 
|4	| Desapego temporário.	| O poder de lucrar em cima de algo que você não está utilizando no momento, mas não quer se desfazer. | 
|5	| Segurança	| O termo comum para alugar informalmente é “emprestar”. Com nosso site, qualquer usuário poderá alugar seus itens de maneira segura e confiável. | 
|6	| Flexibilidade na Definição de Condições de Uso.	| O anunciante pode estabelecer condições específicas para o aluguel. | 
|7	| Faça o seu perfil. 	| Permite uma personalização do seu perfil dentro do site. | 
|8	| Troque mensagens com o locador e/ou locatário de seus itens.	| O sistema permitirá a troca de mensagens da pessoa proprietária do item a ser alugado, com quem pretende alugar. | 



## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

 
| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Cadastrar Usuário  |	Permitir o cadastro do usuário com informações pessoais  |
| RF2 | Realizar login 	| Permitir que o usuário faça login no sistema  |
| RF3	| Realizar logout |	Permitir que o usuário faça logout do sistema.  |
| RF4 |	Gerenciar Perfil de Usuário	| Permitir que o usuário visualize, edite ou exclua seus dados pessoais.  |
| RF5 |	Gerenciar Usuário	| O sistema deve permitir que o administrador gerencie os usuários do sistema. |
| RF6 |	Denunciar Usuário	| Permitir que o usuário denuncie outros usuários que descumprirem os termos da transação. |
| RF7 |	Gerenciar Anúncio	| Permitir que o usuário edite, promova ou exclua seus anúncios ativos.  |
| RF8 |	Visualizar Anúncio	| Exibir os detalhes de um anúncio selecionado, incluindo fotos, descrição e dados do anunciante. |
| RF9 |	Favoritar Anúncio	| Permitir que o usuário adicione anúncios à sua lista de favoritos.  |
| RF10 |	Compartilhar Anúncio	| Permitir que os usuários compartilhem anúncios nas redes sociais.  |
| RF11 |	Enviar Mensagens a Usuários	| Disponibilizar um sistema de mensagens para conversas entre locador e locatário.y |
| RF12 | Realizar Locação 	| Permitir que o locatário solicite a locação de um item.  |
| RF13 |	Cadastrar Anúncio	| Permitir que o usuário crie um novo anúncio com título, descrição, imagens e informações relevantes. |
| RF14 |	Avaliar Locação	| Permitir que locadores e locatários avaliem a experiência de locação após a devolução do item. A avaliação será composta por uma nota de 1 a 5 estrelas e um campo de texto para que o usuário descreva sua experiência com a locação. |
| RF15 |	Emitir Relatórios de Locação	| Permitir que o usuário realize o download de relatórios contendo informações sobre locações e empréstimos. |
| RF16 |	Pesquisar Itens para Locação	| Permitir que o usuário pesquise por itens disponíveis para locação utilizando filtros como categoria, preço, localização, data de disponibilidade e palavras-chave. |
| RF17 |	Realizar Pagamento	| O Sistema deve permitir que o locatário realize o pagamento da locação ao locador. |
 


### 3.3.2 Requisitos Não Funcionais
 
| Código | Requisito Não Funcional (Restrição) | Descrição |
|--------------------|---------------------------|----------------------------|
| RNF1 | Ambiente | O sistema deve ser responsivo e acessível via dispositivos móveis e desktop.|
| RNF2 | Desempenho | O tempo de resposta das buscas não deve ultrapassar 3 segundos. |
| RNF3 |	Segurança | O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| RNF4 |	Acessibilidade | O sistema deve ser compatível com leitores de tela para usuários com deficiências visuais. |
| RNF5 |	Auditoria | Todos os aluguéis devem ser registrados para fins de auditoria e segurança. |
| RNF6 | Backup e Recuperação  | O sistema deve realizar backups automáticos periódicos e permitir a recuperação de dados em caso de falha. |
| RNF7 | Escalabilidade | O sistema deve ser escalável, garantindo a capacidade de expansão do banco de dados conforme o aumento do número de usuários e de sua utilização.   |
| RNF8 |	Conformidade Legal  | O sistema deve cumprir todas as leis e regulamentos aplicáveis ao aluguel de bens entre pessoas físicas e jurídicas. |
| RNF9 |	Compatibilidade | O sistema deve ser compatível com os principais navegadores modernos e sistemas operacionais. |
| RNF10 |	Confiabilidade | O sistema deverá estar sempre ativo, e apresentar backups regulares. |



### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador  |	Usuário responsável pela gestão do sistema. Possui acesso privilegiado a relatórios gerenciais e dados não sigilosos de todos os usuários, permitindo a supervisão e manutenção da plataforma.  |
| Locador (Perfil Empresarial)  |	Usuário empresarial que disponibiliza produtos para aluguel. Pode criar, editar e excluir anúncios, além de gerenciar reservas e avaliar locatários. No entanto, esse perfil não pode alugar produtos de outros usuários.  |
| Locador/Locatário (Pessoa Física) |	Usuário individual que pode tanto disponibilizar produtos para aluguel quanto alugar produtos de outros usuários.  |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Um diagrama de casos de uso é uma representação visual que descreve as interações entre os atores (usuários ou sistemas externos) e o sistema em desenvolvimento. 

Figura 1: 
![Image](https://github.com/user-attachments/assets/acc9115b-390d-43b9-aed8-9d020f56c0cd)

### 3.4.2 Descrições de Casos de Uso

 

Cada caso de uso está representado a seguir, com sua respectiva descrição, fluxo principal, fluxo alternativo e pós-condições. 

 

Cadastrar Usuário (CSU01) 

Sumário: O novo usuário realiza o cadastro no sistema. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário não deve estar logado no sistema e não deve possuir cadastro ativo. 

Fluxo Principal: 

O usuário acessa a opção "Cadastre-se" na tela inicial do sistema. 

O sistema apresenta um formulário solicitando as informações pessoais obrigatórias (nome completo, e-mail, senha, CPF e telefone.). 

O usuário preenche os campos e envia os dados. 

O sistema valida as informações fornecidas (e-mail único, formato dos dados e força da senha.). 

O sistema registra o novo usuário e armazena os dados no banco. 

O sistema confirma o cadastro com uma mensagem de sucesso e, opcionalmente, redireciona o usuário para a tela de login ou já o autentica automaticamente. 

 

Fluxo Alternativo (1): Dados Inválidos 

Caso alguma informação esteja incorreta ou incompleta, o sistema exibe mensagens de erro específicas. 

O usuário corrige os dados e retorna ao passo 3. 

 

Fluxo Alternativo (2): E-mail Já Cadastrado 

Se o e-mail informado já estiver em uso, o sistema alerta o usuário e impede a continuação do cadastro. 

O usuário pode informar outro e-mail ou recuperar a conta existente.     

 

Pós-condições: O usuário é cadastrado com sucesso no sistema e pode realizar login com suas credenciais. 

  

Realizar login (CSU02) 

Sumário: O usuário realiza o login no sistema, informando suas credenciais de acesso. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve possuir um cadastro válido no sistema. 

Fluxo Principal: 

O usuário acessa a tela de login do sistema. 

O sistema solicita o nome de usuário (ou e-mail) e a senha. 

O usuário informa os dados solicitados. 

O sistema valida as credenciais fornecidas. 

Se os dados forem válidos, o sistema autentica o usuário e redireciona para a tela principal. 

O caso de uso é encerrado com sucesso. 

 

Fluxo Alternativo (1): Dados inválidos 

O sistema identifica que o nome de usuário ou a senha estão incorretos. 

O sistema exibe uma mensagem de erro ao usuário. 

O usuário pode tentar novamente. 

O fluxo retorna ao passo 2 do fluxo principal. 

 

Fluxo Alternativo (2): Conta inativa ou bloqueada 

O sistema identifica que o usuário está com a conta desativada ou bloqueada. 

O sistema informa a situação ao usuário e orienta a procurar o administrador. 

O caso de uso é encerrado sem sucesso. 

 

Fluxo Alternativo (3): Esqueci minha senha 

O usuário seleciona a opção "Esqueci minha senha". 

O sistema solicita o e-mail cadastrado para recuperação. 

O usuário informa o e-mail. 

O sistema envia instruções para redefinição de senha. 

O fluxo de redefinição de senha é iniciado externamente a este caso de uso. 

  

Pós-condições: O usuário está autenticado no sistema e tem acesso às funcionalidades permitidas conforme seu perfil de acesso. 

 

Realizar Logout (CSU03) 

Sumário: O usuário realiza o logout do sistema, encerrando sua sessão ativa. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema. 

Fluxo Principal: 

O usuário acessa a opção de logout disponível no sistema. 

O sistema solicita a confirmação para encerrar a sessão (opcional). 

O usuário confirma a solicitação de logout. 

O sistema encerra a sessão do usuário. 

O sistema redireciona o usuário para a tela inicial ou de login. 

O caso de uso é encerrado com sucesso. 

 

Fluxo Alternativo (1): Cancelamento do Logout 

O sistema solicita confirmação para logout. 

O usuário opta por cancelar a operação. 

O sistema mantém a sessão ativa e retorna à tela anterior. 

O caso de uso é encerrado sem alteração de estado. 

 

Fluxo Alternativo (2): Tempo de Sessão Expirado 

O sistema identifica inatividade do usuário por tempo prolongado. 

O sistema encerra automaticamente a sessão por segurança. 

O usuário é redirecionado para a tela de login com uma notificação sobre o tempo expirado. 

O caso de uso é encerrado. 

 

Pós-condições: A sessão do usuário é finalizada, e o sistema encontra-se em estado pronto para novo login. 

 

Gerenciar Perfil de Usuário (CSU04) 

Sumário: O usuário visualiza, edita e atualiza as informações do seu próprio perfil no sistema. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar logado no sistema. 

Fluxo Principal: 

O usuário acessa a opção "Perfil" no menu do sistema. 

O sistema exibe os dados atuais do perfil do usuário. 

O usuário seleciona a opção para editar seus dados. 

O sistema permite a edição de campos como: nome, e-mail, senha, imagem de perfil, telefone, entre outros. 

O usuário altera os dados desejados e confirma a operação. 

O sistema valida os dados informados 

O sistema atualiza o perfil com os novos dados. 

O sistema confirma a atualização com sucesso. 

O caso de uso é encerrado. 

 

Fluxo Alternativo (1): Dados inválidos 

O sistema identifica que os dados informados são inválidos. 

O sistema exibe uma mensagem de erro detalhando o problema. 

O fluxo retorna ao passo 4 do fluxo principal para nova tentativa de edição. 

 

Fluxo Alternativo (2): Cancelamento da edição 

O usuário opta por cancelar a edição antes de confirmar as alterações. 

O sistema retorna ao modo de visualização do perfil sem salvar nenhuma alteração. 

O caso de uso é encerrado. 

 

Pós-condições: As informações do perfil do usuário são atualizadas no sistema, caso a edição tenha sido concluída com sucesso. 

 

Gerenciar Usuário (CSU05) 

Sumário: O Administrador realiza a gestão dos dados dos usuários do sistema. 

Ator Primário: Usuário administrador. 

Ator Secundário: Sistema. 

Pré-condições: O Administrador deve estar autenticado no sistema. 

Fluxo Principal: 

O Administrador acessa a funcionalidade de gerenciamento de usuários. 

O Sistema apresenta as operações possíveis: inclusão de um novo usuário, alteração, exclusão ou consulta. 

O Administrador seleciona a operação desejada ou opta por finalizar o caso de uso. 

Se o Administrador desejar continuar a gestão, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. 

 

Fluxo Alternativo (1): Inclusão 

O Administrador seleciona a opção para incluir um novo usuário. 

O Sistema solicita o CPF do novo usuário. 

O Administrador fornece o CPF. 

O Sistema verifica se o CPF já está cadastrado.  

O Administrador preenche os dados solicitados. 

O Sistema valida os dados e, se estiverem corretos, inclui o novo usuário e atualiza a lista de usuários; caso contrário, informa o erro e solicita a correção. 

 

Fluxo Alternativo (2): Remoção 

O Administrador seleciona um usuário na lista e solicita sua remoção. 

O Sistema verifica se a remoção é possível. Se for, remove o usuário; caso contrário, informa o motivo da impossibilidade. 

 

Fluxo Alternativo (3): Alteração 

O Administrador seleciona um usuário e edita seus dados. 

O Sistema valida os dados modificados. Se estiverem corretos, realiza a atualização; caso contrário, informa os erros e solicita ajustes. 

  

Fluxo Alternativo (4): Consulta 

O Administrador escolhe entre pesquisar por nome, CPF ou outro critério. 

O Sistema apresenta uma lista de usuários correspondentes à busca. 

O Administrador seleciona um usuário. 

O Sistema exibe os dados completos do usuário. 

 

Pós-condições: Um usuário foi incluído, removido, seus dados foram atualizados ou visualizados na interface administrativa do sistema. 

 

Denunciar Usuário (CSU06) 

Sumário: Permitir que um usuário denuncie outro usuário por descumprimento dos termos acordados em uma transação realizada no sistema. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema, e deve existir uma transação entre o usuário denunciante e o usuário denunciado. 

Fluxo Principal: 

O usuário acessa o histórico de transações realizadas. 

O usuário seleciona a transação associada ao problema. 

O sistema exibe as informações da transação e apresenta a opção “Denunciar usuário”. 

O usuário seleciona a opção de denúncia. 

O sistema exibe um formulário de denúncia solicitando o motivo da denúncia, uma descrição detalhada do ocorrido. 

O usuário preenche e envia a denúncia. 

O sistema valida as informações e registra a denúncia. 

O sistema exibe uma confirmação e encaminha implicitamente a denúncia para análise pelo usuário administrador. 

 

Fluxo Alternativo (1): Tentativa de Denúncia Sem Transação Associada 

Caso o usuário tente denunciar alguém com quem não teve transação registrada, o sistema impede a denúncia e exibe uma mensagem explicativa. 

 

Pós-condições: A denúncia é registrada no sistema, vinculada à transação e ao usuário denunciado, e estará disponível para análise pelo usuário administrador. 

 

Gerenciar Anúncio (CSU07) 

Sumário: Permitir que o usuário edite, promova ou exclua seus anúncios ativos. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema e possuir ao menos um anúncio ativo. 

Fluxo Principal: 

O usuário acessa a área de gerenciamento de seus anúncios. 

O sistema exibe a lista de anúncios cadastrados pelo usuário. 

O usuário seleciona o anúncio que deseja gerenciar. 

O sistema exibe as opções disponíveis: Editar, Promover ou Excluir. 

O usuário seleciona a ação desejada. 

O sistema executa a ação correspondente. 

O sistema confirma a operação e atualiza a exibição da lista de anúncios. 

 

Fluxo Alternativo (1): Editar anúncio 

O usuário seleciona a opção “Editar”. 

O sistema exibe o formulário de edição com os dados atuais preenchidos. 

O usuário altera as informações desejadas. 

O sistema valida e atualiza o anúncio. 

O sistema confirma a edição com sucesso. 

 

Fluxo Alternativo (2): Promover anúncio 

O usuário seleciona a opção “Promover”. 

O sistema apresenta a opção de destaque. 

O usuário escolhe promoção, insere os dados de pagamento e confirma a ação. 

O sistema processa o pagamento. 

Estando o pagamento confirmado, o sistema aplica a promoção ao anúncio. 

O sistema confirma a promoção com sucesso. 

 

Fluxo Alternativo (3): Excluir anúncio 

O usuário seleciona a opção “Excluir”. 

O sistema solicita confirmação. 

O usuário confirma a exclusão. 

O sistema remove o anúncio e confirma a exclusão. 

 

Pós-condições: O anúncio é editado, promovido ou excluído conforme a ação realizada pelo usuário. 

 

Visualizar Anúncio (CSU08) 

Sumário: Exibir todos os detalhes de um anúncio selecionado. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema. 

Fluxo Principal: 

O usuário acessa a área de anúncios no sistema. 

O sistema exibe a lista de anúncios disponíveis. 

O usuário seleciona o anúncio que deseja visualizar. 

O sistema exibe os detalhes completos do anúncio, incluindo título, descrição, fotos, preço, dados de contato do anunciante e avaliações (se disponíveis). 

 

Fluxo Alternativo (1): Anúncio não encontrado 

O usuário tenta acessar um anúncio que não existe mais ou foi removido. 

O sistema exibe uma mensagem informando que o anúncio não está mais disponível. 

 

Fluxo Alternativo (2): Anúncio sem fotos 

O usuário seleciona um anúncio que não contém fotos. 

O sistema exibe o anúncio com a descrição e dados do anunciante, mas sem fotos. 

O sistema informa ao usuário que o anúncio não possui imagens (opcional). 

 

Pós-condições: O usuário visualiza os detalhes completos do anúncio, podendo tomar a decisão de contatar o anunciante ou não. 

 

Favoritar Anúncio (CSU09) 

Sumário: Permitir que o usuário adicione anúncios à sua lista de favoritos. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema. 

Fluxo Principal: 

O usuário acessa a área de anúncios do sistema por meio da caixa de pesquisa. 

O sistema exibe a lista de anúncios disponíveis 

O usuário seleciona o anúncio que deseja favoritar. 

O sistema exibe a opção de "Favoritar" o anúncio. 

O usuário seleciona a opção "Favoritar". 

O sistema adiciona o anúncio à lista de favoritos do usuário e confirma a ação. 

 

Fluxo Alternativo (1): Anúncio já favoritado 

O usuário tenta favoritar um anúncio que já está na sua lista de favoritos. 

O sistema informa ao usuário que o anúncio já foi adicionado aos favoritos, sem realizar outra adição. 

 

Fluxo Alternativo (2): Remover de Favoritos 

O sistema identifica que o usuário está com a conta desativada ou bloqueada.O usuário tenta remover um anúncio da lista de favoritos. 

O sistema exibe a opção "Remover de Favoritos". 

O usuário clica na opção, e o sistema remove o anúncio da lista de favoritos e confirma a ação. 

 

Pós-condições: O anúncio é adicionado ou removido da lista de favoritos do usuário conforme a ação realizada. 

 

Compartilhar Anúncio (CSU10)  

Sumário: O usuário compartilha um anúncio disponível na plataforma em redes sociais externas.  

Ator Primário: Usuário.  

Ator Secundário: Sistema.  

Pré-condições: O usuário deve estar logado no sistema e visualizar um anúncio ativo. 

Fluxo Principal:  

O usuário acessa a visualização de um anúncio.  

O sistema apresenta a opção de compartilhamento.  

O usuário seleciona a rede social desejada para compartilhamento.  

O sistema redireciona ou disponibiliza o conteúdo para a rede social escolhida. 

O usuário conclui o compartilhamento na plataforma externa. 

  

Fluxo Alternativo (1): Compartilhamento cancelado 

O usuário inicia o processo de compartilhamento, mas decide cancelar antes de concluir a ação na rede social.  

O sistema retorna para a visualização do anúncio sem registrar o compartilhamento.  

  

Pós-condições: O anúncio foi compartilhado com sucesso ou o usuário cancelou o compartilhamento. 

 

Enviar Mensagem a Usuários (CSU11)  

Sumário: O usuário utiliza um sistema interno de mensagens para se comunicar com outros usuários. 

Ator Primário: Usuário.  

Ator Secundário: Sistema.  

Pré-condições: O usuário deve estar logado no sistema.  

Fluxo Principal:  

O usuário acessa a área de mensagens.  

O sistema exibe conversas existentes e permite iniciar novas conversas.  

O usuário seleciona ou busca um destinatário.  

O usuário digita e envia uma nova mensagem.  

O sistema registra a mensagem e a disponibiliza para o destinatário. 

   

Fluxo Alternativo (1): Falha no envio  

O sistema detecta falha na conexão ou no envio da mensagem.  

O sistema exibe uma mensagem de erro ao usuário.  

O usuário pode tentar reenviar a mensagem. 

  

Pós-condições: A mensagem foi enviada com sucesso ou a tentativa de envio foi cancelada.   

 

Realizar Locação (CSU12)  

Sumário: O locatário solicita a locação de um item disponível na plataforma. 

Ator Primário: Usuário locatário.  

Ator Secundário: Sistema.  

Pré-condições: O locatário deve estar logado no sistema.  

Fluxo Principal:  

O locatário acessa o anúncio do item desejado.  

O sistema exibe detalhes da locação e botão de solicitação.  

O locatário seleciona os dados da locação (data de início, fim, quantidade de itens locados).  

O sistema valida os dados e confirma a solicitação. 

O locador é notificado da solicitação. 

  

Fluxo Alternativo (1): Item indisponível  

O sistema verifica que o item está reservado ou indisponível.  

O sistema notifica o locatário e impede a solicitação.  

  

Fluxo Alternativo (2): Dados inválidos  

O sistema detecta que algum dado está fora do formato esperado (ex: datas inconsistentes). 

O usuário é informado e pode corrigir os dados).  

   

Pós-condições: Uma solicitação de locação foi registrada e o locador é notificado.  

 

Cadastrar Anúncio (CSU13)  

Sumário: O locador cria um anúncio, informando os dados necessários para disponibilizar um item para locação. 

Ator Primário: Usuário.  

Ator Secundário: Sistema.  

Pré-condições: O locador deve estar logado no sistema.  

Fluxo Principal:  

O locador acessa a opção de cadastro de novo anúncio. 

O sistema solicita as informações obrigatórias (título, descrição, imagens, valor, disponibilidade). 

O usuário preenche os campos e envia o formulário.  

O sistema valida os dados fornecidos.  

O sistema registra o anúncio e o torna visível na plataforma. 

  

Fluxo Alternativo (1): Dados inválidos ou incompletos.  

O sistema identifica campos obrigatórios não preenchidos ou inválidos.  

O sistema exibe mensagens de erro para correção.  

O usuário corrige os dados e tenta novamente.  

  

Pós-condições: Um novo anúncio foi cadastrado com sucesso e está disponível para visualização pública. 

 

Avaliar Locação (CSU14) 

Sumário: Permitir que o usuário avalie uma locação após a devolução do item, contribuindo para a reputação dos envolvidos 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema e a locação selecionada deve estar concluída. 

Fluxo Principal: 

O usuário acessa a área de histórico de locações. 

O sistema exibe a lista de locações concluídas. 

O usuário seleciona uma locação para avaliar. 

O sistema exibe a interface de avaliação.  

O usuário atribui uma nota de 1 a 5 estrelas.  

O usuário escreve um comentário sobre sua experiência.  

O sistema armazena a avaliação e a associa à locação e ao usuário avaliado.  

O sistema confirma o registro da avaliação com sucesso. 

 

Fluxo Alternativo (1): Avaliar sem comentário 

O usuário decide não inserir um comentário.  

O sistema permite o envio apenas com a nota de estrelas.  

O sistema salva a avaliação e retorna ao passo 8 do fluxo principal. 

 

Pós-condições: A avaliação fica disponível para visualização pública no perfil do usuário avaliado. 

 

Emitir Relatórios de Locação (CSU15) 

Sumário: Permitir que o usuário gere relatórios personalizados sobre suas locações e empréstimos. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema. 

Fluxo Principal: 

O usuário acessa a seção de relatórios.  

O sistema apresenta as opções de tipo de relatório.  

O usuário seleciona o tipo desejado (locações realizadas, recebidas, por período etc.).  

O usuário define filtros adicionais (datas, categorias, status).  

O sistema processa os dados e gera o relatório.  

O usuário solicita o download.  

O sistema disponibiliza o arquivo em PDF ou CSV.  

O usuário realiza o download. 

 

Fluxo Alternativo (1): Nenhum dado encontrado 

O sistema não encontra dados compatíveis com os filtros aplicados. 

O sistema informa a ausência de resultados. 

O usuário pode ajustar os filtros e retornar ao passo 4 do fluxo principal. 

 

Pós-condições: O relatório é gerado e disponibilizado para download. 

 

Pesquisar Itens para Locação (CSU16) 

Sumário: Permitir que o usuário busque itens disponíveis para locação com base em critérios personalizados. 

Ator Primário: Usuário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado no sistema. 

Fluxo Principal: 

O usuário acessa a tela de busca de itens. 

O usuário insere palavras-chave e/ou aplica filtros (categoria, preço, localização, data). 

O sistema processa a pesquisa e exibe os resultados correspondentes. 

O usuário navega pelos itens exibidos. 

O usuário pode acessar os detalhes dos itens. 

O sistema mantém os filtros aplicados durante a navegação. 

 

Fluxo Alternativo (1): Nenhum item encontrado 

O sistema não encontra itens com os filtros definidos. 

O sistema informa a ausência de resultados. 

O usuário pode ajustar os filtros e voltar ao passo 2 do fluxo principal. 

 

Pós-condições: O usuário visualiza os itens disponíveis de acordo com os filtros aplicados. 

 

Realizar Pagamento (CSU17) 

Sumário: Permitir que o usuário (locatário) efetue o pagamento pela locação de um item 

Ator Primário: Usuário locatário. 

Ator Secundário: Sistema. 

Pré-condições: O usuário deve estar autenticado e ter confirmado a intenção de locar um item. 

Fluxo Principal: 

O usuário confirma o interesse em alugar um item. 

O sistema calcula o valor total da locação com base nos critérios acordados. 

O sistema apresenta as opções de pagamento (cartão, boleto, PIX etc.). 

O usuário escolhe o método de pagamento e insere os dados necessários. 

O sistema processa o pagamento com segurança. 

O sistema confirma a aprovação do pagamento. 

O sistema atualiza o status da locação para "paga". 

O locador é notificado sobre o recebimento. 

 

Fluxo Alternativo (1): Pagamento recusado 

A operadora recusa o pagamento. 

O sistema exibe uma mensagem de erro. 

O usuário pode tentar novamente com outro método de pagamento, voltando ao passo 3 do fluxo principal. 

 

Pós-condições: A locação tem o status atualizado para "paga" e o locador é informado e pode prosseguir com a entrega do item.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![Image](https://github.com/user-attachments/assets/d41c5a96-7a22-43a6-a858-5efd84ffcedb)


### 3.4.4 Descrições das Classes 


# 

Nome 

Descrição 

 

Usuário 
Classe abstrata que armazena os dados dos usuários. 

 

Administrador 
Usuário com permissões para gerenciar outros usuários. 

 

Locador 
Usuário que oferece produtos para aluguel. 

 

Locatário 
Usuário que aluga produtos.  

Anúncio 
Página de aluguel de um produto disponível para locação 

6 
Item de Locação 
Item disponível para locação. 

7 
Locação 
Registro de transação de aluguel. 

8 
Pagamento 
Pagamento referente a locação. 

