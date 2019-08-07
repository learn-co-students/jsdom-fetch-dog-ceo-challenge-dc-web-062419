document.addEventListener('DOMContentLoaded', () => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
      renderImages(data.message);
    });
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      renderBreeds(data.message);
      storeBreeds = data.message;
      return data.message;
    });

  let selectBreed = document.querySelector('#breed-dropdown');
  selectBreed.addEventListener('change', filterBreeds);
  generateOptions(selectBreed);

  let rando = document.querySelector('#random-gud-boi');
  const breedsList = document.querySelector('#dog-breeds');
  rando.addEventListener('click', e => {
    generateRando(breedsList);
  });
});

function generateRando(breedsList) {
  let allDogs = Object.keys(storeBreeds);
  let random = allDogs[Math.floor(Math.random() * breedsList.children.length)];
  let randoDiv = document.querySelector('#random-gud-boi');

  if (document.querySelector('#random-gud-boi div')) {
    document.querySelector('#random-gud-boi div').remove();
  }
  let newDiv = document.createElement('div');
  randoDiv.appendChild(newDiv);

  let p = document.createElement('p');
  p.innerText = random;
  newDiv.appendChild(p);
  // debugger;
  fetch(`https://dog.ceo/api/breed/${random}/images/random/2`)
    .then(response => response.json())
    .then(images => {
      console.log(images);
      images.message.forEach(picture => {
        let img = document.createElement('img');
        img.src = picture;
        newDiv.appendChild(img);
      });
    });
}
function renderImages(images) {
  const dogDiv = document.querySelector('#dog-image-container');
  images.forEach(image => {
    const imgEl = document.createElement('img');
    imgEl.src = image;
    dogDiv.appendChild(imgEl);
  });
}
function renderBreeds(breeds) {
  const breedsList = document.querySelector('#dog-breeds');
  for (breed in breeds) {
    const listEl = document.createElement('li');
    listEl.innerText = breed;
    listEl.addEventListener('click', e => {
      if (e.target.style.color !== 'magenta') {
        e.target.style.color = 'magenta';
      } else {
        e.target.style.color = 'black';
      }
    });
    const subBreeds = breeds[breed];
    if (subBreeds.length > 0) {
      const subList = document.createElement('ul');
      listEl.appendChild(subList);
      subBreeds.forEach(subBreed => {
        const subLi = document.createElement('li');
        subLi.innerText = subBreed;
        subList.appendChild(subLi);
      });
    }
    breedsList.appendChild(listEl);
  }
}

function filterBreeds(e) {
  const breeds = document.querySelectorAll('li');
  const breedsList = document.querySelector('#dog-breeds');
  breeds.forEach(breed => {
    if (!breed.innerText.startsWith(e.target.value)) {
      breed.style.display = 'none';
    } else {
      breed.style.display = '';
    }
  });
}

function generateOptions(selectBreed) {
  for (let i = 97; i <= 122; i++) {
    letter = String.fromCharCode(i);
    optionEl = document.createElement('option');
    optionEl.value = letter;
    optionEl.innerText = letter;
    selectBreed.appendChild(optionEl);
  }
}
