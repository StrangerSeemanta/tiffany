function makeParallax() {
    const couple = document.getElementById('tiffany')
    let num;
    let shifting = setInterval(() => {


        $('#tiffany').css('transform',
            `translateX(${getRndInteger(-40,40)}px) translateY(${getRndInteger(-50,50)}px)`);

    }, 1000);

    couple.onclick = function () {
        clearInterval(shifting)
        $('#tiffany').css('transform', `translateX(1000px) translateY(-3000px)`)
        setTimeout(function () {
            $('#tiffany').css('transform', `translateX(-2500px) translateY(1000px)`)

        }, 500)
        setTimeout(makeParallax, 1000)
    }
}
let cloudval = setInterval(cloud, 1000)
let pos = 0;

function cloud() {
    const cloud = document.getElementById('cloud');


    if (pos == 90) {
        cloud.style.opacity = 0;
        cloud.style.left = 0;
        pos = 0

    } else {
        pos++;
        cloud.style.left = pos + '%';
        cloud.style.opacity = 1;
    }
}
makeParallax()

function lunaplane() {
    $('#lunaplane').animate({
        rotate: `${getRndInteger(-25,15)}deg`,
    }, 2500, 'swing', function () {
        $('#lunaplane').animate({
            rotate: `${getRndInteger(0,25)}deg`,
        }, 2500, 'swing', lunaplane)
    })
}

lunaplane()

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
