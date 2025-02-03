function addFriend(){

    let friendName = document.getElementById("amigo");
    friendList.push(friendName.value);
    setTimeout( () => friendName.value = "", 400);  
}

function sortFriend(){

    let [sortedFriend] = friendList.splice(parseInt(Math.random() * friendList.length), 1);
    console.log(sortedFriend);
}



let friendList = [];

