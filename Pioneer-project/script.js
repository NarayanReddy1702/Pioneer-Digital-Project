

const allCards = document.querySelectorAll(".card")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")
const container1 = document.querySelector(".card_container1")
const container2 = document.querySelector(".card_container2")
const container3 = document.querySelector(".card_container3")
const container4 = document.querySelector(".card_container4")
const container5 = document.querySelector(".card_container5")
const container6 = document.querySelector(".card_container6")
const blackoverlay = document.querySelector(".blackoverlay")
const overLay1 = document.querySelector(".overlay1")
const overLay2 = document.querySelector(".overlay2")
const overLay3 = document.querySelector(".overlay3")
const overLay4 = document.querySelector(".overlay4")
const overLay5 = document.querySelector(".overlay5")
const overLay6 = document.querySelector(".overlay6")


const menu=document.querySelector(".menu")
const menuBtn=document.querySelector(".menuIcon")
const closeIcon=document.querySelector(".closeIcon")

menuBtn.addEventListener("click", function (event) {
    menuBtn.style.display = "none";
    menu.style.display = "block"; // Changed from "initial" for consistency
    closeIcon.style.display = "block"; // Changed from "initial" for consistency
});

// Update close icon click handler
closeIcon.addEventListener("click", function (event) {
    menuBtn.style.display = "block"; // Changed from "initial" for consistency
    menu.style.display = "none";
    closeIcon.style.display = "none";
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 800) { // Match the media query breakpoint from CSS
        menu.style.display = "block";
        menuBtn.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        menu.style.display = "none";
        menuBtn.style.display = "block";
        closeIcon.style.display = "none";
    }
});

function pupop(){
    
allCards.forEach(allCards => {
    allCards.addEventListener("mouseenter", function (event) {
        if (event.target.classList[1] == "card3") {
            console.log(typeof (event.target.classList[1]))
            overLay3.style.display = "flex"
            container3.style.scale = "1.1"

        }
        else if (event.target.classList[1] == "card2") {
            overLay2.style.display = "flex"
            container2.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card1") {
            overLay1.style.display = "flex"
            container1.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card4") {
            overLay4.style.display = "flex"
            container4.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card5") {
            overLay5.style.display = "flex"
            container5.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card6") {
            overLay6.style.display = "flex"
            container6.style.scale = "1.1"

            console.log(event.target.classList[1])
        }
    })

    allCards.addEventListener("mouseleave", function (event) {

        if (event.target.classList[1] == "card3") {
            console.log(typeof (event.target.classList[1]))
            overLay3.style.display = "none"
            container3.style.scale = "1"

        }
        else if (event.target.classList[1] == "card2") {
            overLay2.style.display = "none"
            container2.style.scale = "1"


            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card1") {
            overLay1.style.display = "none"
            container1.style.scale = "1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card4") {
            overLay4.style.display = "none"
            container4.style.scale = "1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card5") {
            overLay5.style.display = "none"
            container5.style.scale = "1"

            console.log(event.target.classList[1])
        }
        else if (event.target.classList[1] == "card6") {
            overLay6.style.display = "none"
            container6.style.scale = "1"

            console.log(event.target.classList[1])
        }
    })
})

}
pupop()



