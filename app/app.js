// for loader
$('body').addClass('stop-scrolling');
$('body').bind('touchmove', function(e){e.preventDefault()});
$(".loader-wrapper").show().delay(1500).fadeOut(
    function(){
        $('body').removeClass('stop-scrolling');
        $('body').unbind('touchmove');
    }
);
// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random index for a character in the text
function getRandomIndex(text) {
    return getRandomInt(0, text.length - 1);
}

// Function to animate random character in the text to white
function animateRandomCharacter() {
    const changingText = document.getElementById('title');
    const text = changingText.textContent;
    const randomIndex = getRandomIndex(text);

    // Wrap the randomly selected character with a <span> element and set its color to white
    const animatedText = text.substring(0, randomIndex) + `<span style="color: white;">${text[randomIndex]}</span>` + text.substring(randomIndex + 1);

    changingText.innerHTML = animatedText;
}

// Call the function to animate random character initially
animateRandomCharacter();

// Set interval to animate random character every 2 seconds
setInterval(animateRandomCharacter, 1000);
