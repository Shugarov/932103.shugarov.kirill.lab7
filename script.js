"use strict"

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

const createSquareBtn = document.getElementById("createSquareBtn");
const createCircleBtn = document.getElementById("createCircleBtn");
const createTriangleBtn = document.getElementById("createTriangleBtn")
const deleteAllBtn = document.getElementById("deleteAllBtn");

const figuresSpace = document.querySelector(".figuresSpace");

let figureId = 0; 

createSquareBtn.addEventListener("click", () => {

    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newSquare = document.createElement("div");

        const squareSide = getRandomNum(80, 150) + "px";
        newSquare.style.width = squareSide;
        newSquare.style.height = squareSide;
        newSquare.style.backgroundColor = "red";
        newSquare.style.opacity = "0.6";
        newSquare.style.position = "absolute";
        newSquare.style.marginLeft = getRandomNum(0, 1350) + "px";
        newSquare.style.marginTop = getRandomNum(0, 450) + "px";
        newSquare.style.display = "none";
        newSquare.style.transition = "opacity" + " " + "0.3s" + " " + "easy-out";
        figureId ++;
        newSquare.id = figureId;
        newSquare.classList.add("square");
    
        figuresSpace.appendChild(newSquare);

        $(".square").fadeIn(400);
    
        newSquare.addEventListener("click", () => {
            $("#" + newSquare.id).fadeOut(400);
            setTimeout( () => {
                figuresSpace.removeChild(newSquare);
            }, 400)
        })

        let animationInStatus = false;
        let animationOutStatus = false; 
        newSquare.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newSquare).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newSquare.style.opacity = newOpacity;

                if (newOpacity > 1) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);                  
                }

            }, 10)

        })

        newSquare.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newSquare).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newSquare.style.opacity = newOpacity;
                if (newOpacity < 0.65) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)

        })
    }
})

createCircleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newCircle = document.createElement("div");

        const circleSide = getRandomNum(80, 150) + "px";
        newCircle.style.width = circleSide;
        newCircle.style.height = circleSide;
        newCircle.style.backgroundColor = "green";
        newCircle.style.opacity = "0.6";
        newCircle.style.position = "absolute";
        newCircle.style.borderRadius = "100%"
        newCircle.style.marginLeft = getRandomNum(0, 1350) + "px";
        newCircle.style.marginTop = getRandomNum(0, 450) + "px";
        newCircle.style.display = "none";
        figureId ++;
        newCircle.id = figureId;
        newCircle.classList.add("circle");
    
        figuresSpace.appendChild(newCircle);

        $(".circle").fadeIn(400);
    
        newCircle.addEventListener("click", () => {
            $("#" + newCircle.id).fadeOut(400);
            setTimeout( () => {
                figuresSpace.removeChild(newCircle);
            }, 400)
        })

        let animationInStatus = false;
        let animationOutStatus = false;
        newCircle.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newCircle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newCircle.style.opacity = newOpacity;

                if (newOpacity > 1) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);                  
                }

            }, 10)
        })

        newCircle.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newCircle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newCircle.style.opacity = newOpacity;
                if (newOpacity < 0.65) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })
    }
})

createTriangleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newTriangle = document.createElement("div");

        const triangleSide = getRandomNum(80, 150) + "px";
      
        newTriangle.style.width = triangleSide;
        newTriangle.style.height = triangleSide;
        newTriangle.style.backgroundColor = "blue";

        newTriangle.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
        newTriangle.style.opacity = "0.6";
        newTriangle.style.position = "absolute";
        newTriangle.style.marginLeft = getRandomNum(0, 1350) + "px";
        const marginTop = getRandomNum(-40, 450);
        newTriangle.style.marginTop = marginTop + "px";
        newTriangle.style.display = "none";
        figureId ++;
        newTriangle.id = figureId;
        newTriangle.classList.add("triangle");
    
        figuresSpace.appendChild(newTriangle);

        $(".triangle").fadeIn(400);
    
        newTriangle.addEventListener("click", () => {
            $("#" + newTriangle.id).fadeOut(400);
            setTimeout( () => {
                figuresSpace.removeChild(newTriangle);
            }, 400)
        })

        let animationInStatus = false;
        let animationOutStatus = false; 
        newTriangle.addEventListener("mouseenter", () => {
            animationInStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newTriangle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange + 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newTriangle.style.opacity = newOpacity;

                if (newOpacity > 1) {
                    animationInStatus = false;
                    clearInterval(interval);
                }

                if (animationOutStatus === true) {
                    animationInStatus = false;
                    clearInterval(interval);                  
                }

            }, 10)
        })

        newTriangle.addEventListener("mouseout", () => {
            animationOutStatus = true;
            let opacityChange = 0;

            var currentOpacity = window.getComputedStyle(newTriangle).getPropertyValue('opacity');
            currentOpacity = parseFloat(currentOpacity);

            let interval = setInterval( () => {
                opacityChange = opacityChange - 0.05;
                const newOpacity = currentOpacity + opacityChange;
                newTriangle.style.opacity = newOpacity;
                if (newOpacity < 0.65) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

                if (animationInStatus === true) {
                    animationOutStatus = false;
                    clearInterval(interval);
                }

            }, 10)
        })
    }
})


deleteAllBtn.addEventListener("click", () => {
    $(".square").fadeOut(400);
    $(".circle").fadeOut(400);
    $(".triangle").fadeOut(400);

    setTimeout( () => {
        const figures = Array.from(figuresSpace.children);
        figures.forEach(figure => {
            figuresSpace.removeChild(figure);
        });
    }, 400)

})











