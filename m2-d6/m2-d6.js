"use strict";

// Assignment Month 2 - Day 6

// Scrivi una funzione per cambiare il contenuto di h1 in qualcos'altro
// Write a function to change the h1 content into something else
const table = document.getElementById("myTable");

function changeH1Content() {
  const title = document.querySelector("h1");

  if (title.innerText === "My products") {
    title.innerText = "My items";
  } else {
    title.innerText = "My products";
  }
}

table.addEventListener("click", changeH1Content);

// Scrivi una funzione per cambiare il colore di background della pagina
// Write a function to change the background color of the page
const page = document.querySelector("body");
const originalColor = page.style.backgroundColor;
function changeBg() {
  if (page.style.backgroundColor === "lightyellow") {
    page.style.backgroundColor = originalColor;
  } else {
    page.style.backgroundColor = "lightyellow";
  }
}
table.addEventListener("click", changeBg);

// Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// Write a function to change the address in the future, into another one (fake)

function changeAddress() {
  const address = document.querySelector("footer");
  // Use === instead of = to compare values
  if (address.innerText === "Via degli Abbruzzi, 15 - Rome 00187 RM Italy") {
    address.innerText =
      "Smartphone Shop - 4817 Bolman Court, Champaign IL United States";
  } else {
    address.innerText = "Via degli Abbruzzi, 15 - Rome 00187 RM Italy";
  }
}

table.addEventListener("click", changeAddress);

// Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// Write a function that adds a CSS class to each of the Amazon links on the table
function changeLinks() {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle("changeIntoRed");
  }
}

table.addEventListener("click", changeLinks);

// ********************************

// Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// Write a function to add/remove a CSS class to all images in the table; this class must change the visibility/invisibility of the image

function toggleImageVisibility() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("hidden")) {
      images[i].classList.remove("hidden");
    } else {
      images[i].classList.add("hidden");
    }
  }
}

table.addEventListener("click", toggleImageVisibility);

// Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
// Write a function to change the color of each product's price to a different one each time it's called

const price = document.querySelectorAll(".price");

function randomColor() {
  return Math.floor(Math.random() * 256);
}
// I gave 256 to this function so that 255 is also included

function rgbColor() {
  let r = randomColor();
  let g = randomColor();
  let b = randomColor();
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changePriceColor() {
  for (let i = 0; i < price.length; i++) {
    price[i].style.color = rgbColor();
  }
}

table.addEventListener("click", changePriceColor);

// Click on the table to see the functions in action!
