function addFriend(){
    if(friendList.length == 0){
        cleanHtmlList();
    }
    if(sortedFriendList != 0){
        friendName.value = "";
        return alert("Sorteio em andamento. Aguarde o próximo!");
    }
    if(friendName.value == ""){
        return alert("Entre com o nome de uma pessoa.");
    }
    friendList.push(friendName.value);
    displayFriendList();
    setTimeout( () => friendName.value = "", 400);  
};
function sortFriend(){
    if (friendList.length == 0){
        return alert("Nenhum amigo adicionado.");
    };
    if(sortedFriendList.length == 0){
        if(!confirm("Tem certeza que deseja iniciar o sorteio?")){
            return;
        };
    };
    [sortedFriend] = friendList.splice(parseInt(Math.random() * friendList.length), 1);
    displaySecretFriend();
    sortedFriendList.push(sortedFriend);   
    if (friendList.length == 0){
        setTimeout(() => {
            alert("Sorteio finalizado.");
            sortedFriendList = [];
        }, 150);
    };
};
function displayFriendList(){
    displayList.innerHTML = "";
    for( item of friendList){
        displayList.innerHTML += `<li> ${item} </li>`
    };
};
function displaySecretFriend(){
    secretFriend.innerHTML = `<li> ${sortedFriend} </li>`;
};
function cleanHtmlList(){
    displayList.innerHTML = "";
    secretFriend.innerHTML = "";
};

let sortedFriend = "";
let friendList = [];
let sortedFriendList = [];
let friendName = document.getElementById("amigo");
let displayList  = document.getElementById("listaAmigos");
let secretFriend = document.getElementById("resultado");