document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => printThatShit(data));

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(breedsResp => breedsResp.json())
    .then(breedsData => printBreeds(breedsData))
})

function printThatShit(data) {
    
    const dogPicDiv = document.getElementById("dog-image-container")
    
    data.message.forEach(url => {
        const imgNode = document.createElement("img")
        imgNode.src = url
        dogPicDiv.appendChild(imgNode)
    })
}

function printBreeds(breedsData) {
    
    const list = document.getElementById("dog-breeds") 

    for (breed in breedsData.message) {
        const liEl = document.createElement("li")
        liEl.innerText = breed
        list.appendChild(liEl)
        const colorButton = document.createElement("button")
        liEl.appendChild(colorButton)
        liEl.className = breed.slice(0,1) 
        colorButton.addEventListener("click", changeColor)
    }

    const selectEl = document.getElementById("breed-dropdown")
    selectEl.addEventListener("change", ourFilter) 
    allList = document.querySelectorAll("li")
}

function ourFilter(e){
    const listArray = Array.from(allList)
    const filteredList = listArray.filter(listItem => {
        return listItem.className === this.value 
    })
    const list = document.getElementById("dog-breeds")
    list.innerHTML = ""
    filteredList.forEach(el => list.appendChild(el))
}

function changeColor(e) {
    e.target.parentNode.style.color = "purple"
}