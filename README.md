# Gerador de Amigo Secreto 

O Web app é um  simples gerador onde é possível adicionar  os nomes dos amigos e posteriormente sortea-los. 

## Projeto

O projeto é um desafio proposto pela ONE (Oracle Next Education) um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras.

## Como Executar o Projeto

### Pré-requisitos

- Navegador web atualizado
- Git instalado

### Instalação

1. Clone o repositório:
    ```bash
    git https://github.com/arthurgbsf/challenge-amigo-secreto.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd challenge-amigo-secreto
    ```
3. Abra a página inicial:
   
    - No Linux ou Mac:
    ```bash
    open index.html
    ```
    - No Windows:
    ```cmd
    index.html
    ```
## Funcionalidades 

<ul>
  <li>
    Adição dos nomes dos amigos de forma unitária na lista para sorteio;
  </li>
  <li>
    Proibição de inserir dados em vazio;
  </li>
  <li>
    Certificação se deseja realmente iniciar o sorteio antes de sortear o primeiro nome;
  </li>
<li>
Proibição de realizar o sorteio com a lista de nomes de amigos vazia;        
</li>
  <li>
    Sinalização de término do sorteio;
  </li>
  <li>
  Proibição de iniciar outro sorteio caso ainda exista algum em progresso;  
  </li>
  <li>
    Limpeza da lista de sorteados de forma automática antes de iniciar o próximo sorteio.
  </li>
</ul>

## Arquivos

### Index.html & Style.css

O `index.html` é responsável em estruturar os elementos da página e o `style.css` pela estilização. Esses arquivos foram fornecidos pelos organizadores da proposta do exercício e foram seguidos fielmente sem alterações.

### App.js

É o arquivo responsável por toda a lógia do app. Abaixo segue as funções, variáveis e suas responsabilidades.

#### Funções

| Funções | Responsabilidades  |
|-----------|-----------|
| `addFriend()`   | <ul> <li> Adiciona o nome de um dado amigo a lista de amigos secretos `friendList`. </li>  <li> Não permite a adição de um novo amigo caso o sorteio esteja em andamento.</li> <li> Não permite input vazio. </li> </ul>
| `sortFriend()`  | <ul> <li> Sorteia um amigo da lista de amigos secretos `friendList`. </li> <li> Verifica se realmente o usuário deseja iniciar o sorteio. </li> <li> Não realiza o sorteio caso a lista de amigos secretos `friendList` esteja vazia. </li> </ul>  |
| `displayFriendList()`  |<ul> <li> Adiciona os itens da lista de amigos secretos `friendList` na lista de amigos secretos do `html`. </li> </ul>|
| `displaySecretFriend()`| <ul> Adiciona o amigo sorteado `sortedFriend` na lista de amigo sorteado do `html`. </li></ul>|
| `cleanHtmlList()`| <ul> <li> Limpa a lista de amigos secretos e de amigo sorteado do `html`. </li></ul>|

#### Variáveis 
| Variáveis | Tipo | Responsabilidades  |
|----------|----------|----------|
| `sortedFriend` | `string`   |  Armazenar o nome do amigo sorteado.  |
| `friendList` | `array`  | Armazenar a lista de amigos adicionados.  |
| `sortedFriendList` | `array`  | Armazenar a lista de amigos sorteados. |
| `friendName` | `object`  | Acessa o elemento `<inpput>` `id="amigo` do `Html` onde os nomes dos amigos adicionados.  |
| `displayList`  | `object`|  Acessa o elemento `<ul>` `id="listaAmigos"` do `Html` responsável em exibir a lista de amigos sorteados.  |
| `secretFriend` | `object`| Acessa o elemento `<ul>` `id="resultado"` do `Html` responsável em exibir o nome do atual amigo sorteado. |

