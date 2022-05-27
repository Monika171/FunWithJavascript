const text = "Hey, diddle, diddle, \n The cat and the fiddle, \n The cow jumped over the moon";

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 100);