var languageEle = document.getElementById("language");
var currentLangImg = document.querySelector("#english");

var audio = document.getElementsByTagName('audio')[0];

languageEle.addEventListener('change',(e)=>{
    // console.log(e,languageEle.value,currentLangImg);
    audio.src = './Audio/' + languageEle.value + '.mp3';
    audio.load();
    

    currentLangImg.classList.remove('fade-in');
    currentLangImg.classList.add('fade-out');
    // console.log(currentLangImg);
    currentLangImg = document.getElementById(languageEle.value);
    // console.log(currentLangImg);
    currentLangImg.classList.remove('fade-out');
    currentLangImg.classList.add('fade-in');

    

    audio.play();


});

var circle = document.getElementById('circle');

function audioplay(){
    audio.play();
}

