// TASK 1
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  button.remove();
});

// TASK 2
const img = document.createElement("img");

img.alt = "city urban";
img.src =
  "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";
document.body.appendChild(img);

img.classList.add("img-class");

// TASK 3 (html) +

// TASK 4

const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];

const charDiv = document.querySelector(".characters");

function renderCharacters() {
  const html = characters.map((el) => {
    return `<div class="darkblue">
    <span class="actor">${el.house}</span>
    </div>`;
  });

  console.log(html.join(""));
  charDiv.innerHTML = html.join("");
}

renderCharacters();
