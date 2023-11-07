// Create a new image element and add picture to the container
const img = document.createElement('img');
img.src = "caterpillar.jpg";
const container = document.getElementById('container');

// create and call function that shows picture once clicked
const add = document.getElementById("button");

function showImage() {
  container.appendChild(img);
};

add.addEventListener("click", showImage);


// create and call function that removes picture once clicked
const remove = document.getElementById("remove");

function removeImage() {
  container.removeChild(img);
};

remove.addEventListener("click", removeImage);