// Creo array contenete immagini
const imagesArray = ["../img/01.jpg", "../img/02.jpg", "../img/03.jpg", "../img/04.jpg", "../img/05.jpg", ]
// Prelevo il contenitore dove inserire array-items
const itemsContainer = document.querySelector(".slider-items")
console.log(itemsContainer);

// Creo per ogni item un elemento in html usando ciclo for
for (let i = 0; i < imagesArray.length; i++) {
    // Assegno a ogni immagine generata una costante
    const currentImage = imagesArray[i];
    console.log(currentImage);

    const sliderItem = `
        <div class="item">
            <img src="${currentImage}" alt="">
        </div>`;
    
   itemsContainer.innerHTML += sliderItem;
}
