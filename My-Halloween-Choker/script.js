function createSkull () {

    const skull = document.createElement('div');

    skull.innerText = '💀';
    
    document.body.appendChild(skull);
}

setInterval(createSkull, 300);






