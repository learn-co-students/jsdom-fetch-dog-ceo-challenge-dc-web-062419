// Add JavaScript so that:

// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    let breedSelector = document.getElementById("breed-dropdown")
    breedSelector.addEventListener("change", filterBreeds)
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(res => res.json())
        .then(json => addImage(json.message))
    fetch(breedUrl).then(res => res.json())
        .then(function(json) {
            // debugger
            for (key in json.message) {
                addBreed(key)
            }
        })
})

function addImage(url_array) {
    for (let i=0; i<url_array.length; i++) {
        let container = document.getElementById("dog-image-container")
        let newImage = document.createElement('img')
        newImage.src = url_array[i]
        newImage.style.width = "200px"
        container.appendChild(newImage)
    }
}

function addBreed(breed) {
    let breedList = document.getElementById("dog-breeds")
    let newBreedItem = document.createElement("li")
    newBreedItem.innerText = breed 
    breedList.appendChild(newBreedItem)
    newBreedItem.addEventListener("click", changeColor)
}

function changeColor() {
    if (this.style.color == "red") {
        this.style.color = "black"
    } else {
        this.style.color = 'red'
    }
}

function filterBreeds(e) {
    let initialLetter = e.currentTarget.value
    let breedList = document.getElementById("dog-breeds")
    let breeds = breedList.getElementsByTagName("li")
    for (let i=0; i<breeds.length; i++) {
        if (breeds[i].textContent[0] !== initialLetter) {
            breeds[i].style.display = "none"
        } else {
            breeds[i].style.display = "list-item"
        }
    }

}