const socket = io("ws://localhost:8080");

// Listen to message
socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
})

document.querySelector('button').onclick = () =>{
    const text = document.querySelector('input').value;
    // Send text to other listeners with a tag message
    socket.emit('message', text)
}