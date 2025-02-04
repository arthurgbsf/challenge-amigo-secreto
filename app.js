function addFriend(){

    let friendName = document.getElementById("amigo");
    friendList.push(friendName.value);
    setTimeout( () => friendName.value = "", 400);  
}

function sortFriend(){

    updateFriendList();
    [sortedFriend] = friendList.splice(parseInt(Math.random() * friendList.length), 1);
    displaySecretFriend();
    sortedFriendList.push(sortedFriend);
    
}

function updateFriendList(){

    let displayList  = document.getElementById("listaAmigos");
    displayList.innerHTML = "";
    for( item of sortedFriendList){
        displayList.innerHTML += `<li> ${item} </li>`
    }

}

function displaySecretFriend(){
    let secretFriend = document.getElementById("resultado");
    secretFriend.innerHTML = `<li> ${sortedFriend} </li>`;
}

let sortedFriend = "";
let friendList = [];
let sortedFriendList = [];
