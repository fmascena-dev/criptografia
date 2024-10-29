## Documentação do Projeto: Criptografia de Texto

*Este projeto é uma aplicação web de criptografia e descriptografia de textos. O usuário pode inserir um texto, criptografá-lo com uma transformação simples e, em seguida, descriptografá-lo para recuperar o texto original. Além disso, o projeto permite que o usuário copie o texto criptografado ou descriptografado e limpe os campos de entrada e saída.*

#### Índice

*1 - Pré-requisitos;*
*2 - Como Usar;*
*3 - Estrutura de Arquivos;*
*4 - Tecnologias Utilizadas;*
*5 - Funcionalidades;*
*6 - Estilização e Responsividade;*
*7 - Contribuição;*
*8 - Licença.*

#### Pré-requisitos

- *Navegador web atualizado (Chrome, Firefox, Safari ou Edge).*
- *Conexão com a internet para carregar e testar a aplicação em um servidor local (opcional).*

#### Como Usar

- *Clone o repositório ou baixe os arquivos.*
- *Abra o arquivo index.html em seu navegador.*
- *No campo "Digite seu texto aqui...", insira o texto que deseja criptografar.*
- *Clique no botão "Criptografar" para ver o texto criptografado no campo de saída.*
- *Clique em "Descriptografar" para reverter a criptografia e exibir o texto original.*
- *Use o botão "Copiar" para copiar o texto da saída.*
- *Use o botão "Limpar" para limpar ambos os campos.*

#### Estrutura de Arquivos

- **index.html** – *Estrutura HTML da aplicação.*
- **style.css** – *Estilos e ajustes responsivos.*
- **script.js** – *Funções JavaScript para criptografia, descriptografia, cópia e limpeza de texto.*

#### Tecnologias Utilizadas

- **HTML5** – *Estruturação e semântica.*
- **CSS3** – *Estilização e responsividade.*
- **JavaScript** – *Lógica de criptografia, descriptografia e manipulação de eventos.*

#### Funcionalidades

- **Criptografia e Descriptografia**

  - **Criptografar:** *Substitui as vogais no texto por strings específicas:*
    **e** → *enter*
    **i** → *imes*
    **a** → *ai*
    **o** → *ober*
    **u** → *ufat*

  - **Descriptografar:** *Reverte a substituição para recuperar o texto original.*

#### Copiar Texto

- *Cópia do conteúdo da área de saída para a área de transferência com um alerta de sucesso.*

#### Limpar Campos

- *Limpeza dos campos de entrada e saída de texto.*

#### Estilização e Responsividade

- **Desktop:** *Largura fixa para o contêiner, com botões dispostos em linha.*
- **Tablet (largura entre 481px e 968px):** *O contêiner ocupa 70% da tela e os botões são organizados em colunas.*
- **Mobile (largura até 480px):** *O contêiner ocupa 75% da tela, os botões são organizados em colunas e o layout do cabeçalho e rodapé é ajustado para maior legibilidade.*