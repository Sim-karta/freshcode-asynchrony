const dogElement = document.querySelector(".dog");
const dogImageElement = dogElement.querySelector(".dog-img");
const dogBtnElement = dogElement.querySelector(".dog-btn");

function setDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((url) => {
            dogImageElement.src = url.message;
        })
        .catch((error) => {
            console.info(error);
            dogImageElement.src = "./assets/images/dog.png";
        });
}

setDogImage();

dogBtnElement.addEventListener("click", () => {
    setDogImage();
});
