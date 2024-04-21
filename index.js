function getMessage(){
    var message = document.querySelector('input').value;
    document.querySelector('#message-output').innerHTML = message;
}
const messageInput = document.getElementById("message-input");
messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        getMessage();
    }
})