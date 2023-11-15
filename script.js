const halfCircles = document.querySelectorAll('.half-circle');
const halfCircleTop = document.querySelector('.half-circle-top');
const progressBarCircle = document.querySelector('.progressbar-circle');


document.addEventListener('scroll', () => {

    const pageViewportHeight = window.innerHeight;

    const pageHeight = document.documentElement.scrollHeight;

    const scrollPortion = window.scrollY

    const scrolledPortionDegree = (scrollPortion / (pageHeight - pageViewportHeight)) * 360;

    const scrolledPortionPercent = scrolledPortionDegree / 360 * 100;

    progressBarCircle.textContent = `${Math.floor(scrolledPortionPercent)}%`

    halfCircles.forEach((el) => {
        el.style.transform = `rotate(${scrolledPortionDegree}deg)`

        if (scrolledPortionDegree >= 180) {
            halfCircles[0].style.transform = 'rotate(180deg)'
            halfCircleTop.style.opacity = '0';
        } else {
            halfCircleTop.style.opacity = '1';
        }
    })

})