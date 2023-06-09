"use strict";

// Assignment Month 2 - Day 6

// Scrivi una funzione per cambiare il contenuto di h1 in qualcos'altro
// Write a function to change the h1 content into something else

function changeH1Content() {
  const title = document.querySelector("h1");
  title.innerText = "My products";
}

// Scrivi una funzione per cambiare il colore di background della pagina
// Write a function to change the background color of the page

function changeBg() {
  const page = document.querySelector("body");
  page.style.backgroundColor = "red";
}

// Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// Write a function to change the address in the future, into another one (fake)

function changeAddress() {
  const address = document.querySelector("footer");
  address.innerText = "Via degli Abbruzzi, 15 - Rome 00187 RM Italy";
}

// Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// Write a function that adds a CSS class to each of the Amazon links on the table

function changeLinks() {
  const links = document.querySelectorAll(".links");
  links.classList.add("changeIntoRed");
}

changeLinks();

// ********************************

// Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// Write a function to add/remove a CSS class to all images in the table; this class must change the visibility/invisibility of the image

function changeVisibility() {
  const images = document.querySelectorAll(".product-image");
  images.classList.add("hide-visibility");
}

changeVisibility();
