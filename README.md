# Gerador de Amigo Secreto 

O Web app é um  simples gerador onde é possível adicionar  os nomes dos amigos e posteriormente sortea-los. 

## Projeto

O projeto é um desafio proposto pela ONE (Oracle Next Education) um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras.

## App.js

É o arquivo responsável por toda a lógia do app. Abaixo segue as funções, variáveis e suas responsabilidades.

### Funções

| Funções | Responsabilidades  |
|-----------|-----------|
| `addFriend()`   | <ul> <li> Adiciona o nome de um dado amigo a lista de amigos secretos `friendList`. </li>  <li> Não permite a adição de um novo amigo caso o sorteio esteja em andamento.</li> <li> Não permite input vazio. </li> </ul>
| `sortFriend()`  | <ul> <li> Sorteia um amigo da lista de amigos secretos `friendList`. </li> <li> Verifica se realmente o usuário deseja iniciar o sorteio. </li> <li> Não realiza o sorteio caso a lista de amigos secretos `friendList` esteja vazia. </li> </ul>  |
| `displayFriendList()`  |<ul> <li> Adiciona os itens da lista de amigos secretos `friendList` na lista de amigos secretos do `html`. </li> </ul>|
| `displaySecretFriend()`| <ul> Adiciona o amigo sorteado `sortedFriend` na lista de amigo sorteado do `html`. </li></ul>|
| `cleanHtmlList()`| <ul> <li> Limpa a lista de amigos secretos e de amigo sorteado do `html`. </li></ul>|

### Variáveis 
| Variáveis | Tipo | Responsabilidades  |
|----------|----------|----------|
| `sortedFriend` | `string`   |  Armazenar o nome do amigo sorteado.  |
| `friendList` | `array`  | Armazenar a lista de amigos adicionados.  |
| `sortedFriendList` | `array`  | Armazenar a lista de amigos sorteados. |
| `friendName` | Dado 7   | Acessa o elemento `<inpput>` `id="amigo` do `Html` onde os nomes dos amigos adicionados.  |
| `displayList`  | Dado 9   |  Acessa o elemento `<ul>` `id="listaAmigos"` do `Html` responsável em exibir a lista de amigos sorteados.  |
| `secretFriend` | Dado 11  | Acessa o elemento `<ul>` `id="resultado"` do `Html` responsável em exibir o nome do atual amigo sorteado. |

