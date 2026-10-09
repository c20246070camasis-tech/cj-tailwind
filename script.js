


//query selector

const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Context

heading.textContent = "MY PROJECT!!";
contactHeading.textContent = "Let's Connect!";
serviceHeading.textContent = "My Services";
projectHeading.textContent = "My Projects";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
serviceHeading.style.color = "purple";
projectHeading.style.color = "purple";

//event listener
heading.addEventListener("click", function () {
    heading.style.color = "red";

});

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

    }
});


