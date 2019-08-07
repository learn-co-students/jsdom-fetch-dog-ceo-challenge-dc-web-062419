// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(imageCollection => {
      imageCollection.message.forEach((dogImage) => {
      let img = document.createElement("img")
      img.src = dogImage
      let dogList = document.getElementById("dog-image-container")
      let dogLi = document.createElement("div")
      dogLi.appendChild(img)
      dogList.appendChild(dogLi)
      // debugger
    })
    })

  fetch("https://dog.ceo/api/breeds/list/all")
     .then(resp => resp.json())
     .then(breeds => {
      let breedObject = breeds.message
      let breedList = document.getElementById("dog-breeds")
      for(const breedName in breedObject){
        let breedLi = document.createElement("li")
        breedLi.innerText = breedName
        breedLi.id = breedName
        breedList.appendChild(breedLi)
        breedLi.addEventListener("click", function(e){
            e.target.style.color = "red"
        //   debugger
        })
      }
      
     })
    let filterList = document.getElementById('breed-dropdown')
    let selectedOption = filterList.value
    filterList.addEventListener('change', function(e){
        let letter = e.target.value
        filterBreed(letter)
    })
    
})

function filterBreed(letter){
    let fullList = document.querySelectorAll('li')
    
    for(const idx in fullList){
        let firstLetter = fullList[idx].innerText.charAt(0)
        
        if(firstLetter === letter){
            let newLi = document.createElement('li')
            newLi.innerText = fullList[idx].innerText
            let breedList = document.getElementById("dog-breeds")
            breedList.appendChild(newLi)
            
        } else {
            fullList[idx].remove()
        }
    }
    
}

