function addFriend(){

    let friendName = document.getElementById("amigo");
    friendList.push(friendName.value);
    setTimeout( () => friendName.value = "", 400);  
}

function sortFriend(){
    
    updateFriendList();
    let [sortedFriend] = friendList.splice(parseInt(Math.random() * friendList.length), 1);
    sortedFriendList.push(sortedFriend);
    
}

function updateFriendList(){

    let displayList  = document.getElementById("listaAmigos");
    displayList.innerHTML = "";
    for( item of sortedFriendList){
        displayList.innerHTML += `<li> ${item} </li>`
    }

}


let friendList = [];
let sortedFriendList = [];
