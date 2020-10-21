const utterance = new SpeechSynthesisUtterance()

utterance.lang = "pt-BR"
utterance.rate = 1.5

speechSynthesis.speak(utterance)

function speak() {
    speechSynthesis.speak(utterance)
}

function stop() {
    speechSynthesis.cancel()
}

function setText(event) {
    utterance.text = event.target.innerText
}

//     window.onload=function(){                
//         window.location="https://news.google.com.br/"; 
// }

function updateDiv()
{ 
    $( "#here" ).load(window.location.href + " #here" );
}