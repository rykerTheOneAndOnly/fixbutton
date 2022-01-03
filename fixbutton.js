var buttonEl = document.getElementById("button");
var titleEl = document.getElementById("title");
var fixedtextEl = document.getElementById("fixedtext");
var buttontextEl = document.getElementById("buttontext");
var clickSfx = new Audio("click.mp3");
var relaxingSfx = new Audio("relaxing sfx.wav");

var onButtonClick = function() {
    buttonEl.style.boxShadow = "inset 0px 0px 0px lightgray, 0px 0px 0px lightgray";
    buttonEl.style.fontSize = "315%";
    setTimeout(
        function() {
            buttonEl.style.pointerEvents = "none";
            fixedtextEl.style.pointerEvents = "none";
            buttontextEl.style.pointerEvents = "none";
            buttonEl.style.transition = "0.3s"; 
            buttonEl.style.boxShadow = "inset 0px 5px 0px #dddddd, 0px 0px 0px #dddddd"; 
            clickSfx.play()
        }, 100);
    setTimeout(
        function() {
            buttonEl.style.transition = "1.5s";
            buttonEl.style.opacity = "0";
            titleEl.style.opacity = "0";
            setTimeout(
                function() {
                    fixedtextEl.style.transition = "all 1.5s";
                    fixedtextEl.style.opacity = "255";
                    relaxingSfx.play();
                    setTimeout(
                        function() {
                            fixedtextEl.style.transition = "all 0s";
                            fixedtextEl.style.opacity = "0";
                            buttonEl.style.transition = "0.5s";
                            buttonEl.style.opacity = "255";
                            buttonEl.style.boxShadow = "inset 0px 0px 0px #888888, 0px 10px 0px #888888";
                            buttonEl.style.fontSize = "350%";
                            titleEl.style.opacity = "255";
                            buttonEl.style.pointerEvents = "auto";
                            fixedtextEl.style.pointerEvents = "auto";
                            buttontextEl.style.pointerEvents = "auto";
                        }
                    , 4000);
                }
            , 1250);
        }
    , 1000)
}