function addFriend(){
    let friendName = document.getElementById("amigo");
    friendList.push(friendName.value);
    setTimeout( () => friendName.value = "", 400);  
}

let friendList = [];

