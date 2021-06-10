// Start animtion when clicked on
pulse = document.getElementById('pulse');
pulse.onclick = () => {
    console.log('test1');
    pulse.classList.add('pulse')
};

// Remove class when animation finishes
pulse.addEventListener(whichAnimationEvent(), function () {
    console.log('pulse animation done');
    pulse.classList.remove('pulse')
})

// Check which animtion iteration event is supported by the browser
function whichAnimationEvent() {
    var el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationiteration",
        "OAnimation": "oAnimationIteration",
        "MozAnimation": "animationiteration",
        "WebkitAnimation": "webkitAnimationIteration"
    };

    for (let t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}