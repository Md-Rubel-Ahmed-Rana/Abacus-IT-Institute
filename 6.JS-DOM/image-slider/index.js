const images = [
  "./images/image1.png",
  "./images/image2.png",
  "./images/image3.png",
  "./images/image4.png",
];

let startFrom = 0;
// select all the necessary elements
const currentImageElement = document.getElementById("current-image");
const totalImageCountElement = document.getElementById("total-image");
totalImageCountElement.innerHTML = images.length;
currentImageElement.innerHTML = startFrom + 1;

// step-2
const imageElement = document.getElementById("image-element");
const firstImage = images[startFrom];
// inject first image on img's src attribute
imageElement.src = firstImage;

// declare functions and check whether the funcs work or not
// step-1
const handlePrevImageShow = () => {
  startFrom--;
  if (startFrom < 0) {
    startFrom = images.length - 1;
    imageElement.src = images[startFrom];
    currentImageElement.innerHTML = startFrom + 1;
  } else {
    imageElement.src = images[startFrom];
    currentImageElement.innerHTML = startFrom + 1;
  }
};

const handleNextImageShow = () => {
  startFrom++;
  if (startFrom > images.length - 1) {
    startFrom = 0;
    imageElement.src = images[startFrom];
    currentImageElement.innerHTML = startFrom + 1;
  } else {
    imageElement.src = images[startFrom];
    currentImageElement.innerHTML = startFrom + 1;
  }
};
