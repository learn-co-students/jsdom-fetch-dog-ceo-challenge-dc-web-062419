document.addEventListener('DOMContentLoaded', function(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data =>{ data.message.forEach((image)=>{
        let container = document.getElementById("dog-image-container")
        let dogDiv = document.createElement("div")
        let dogImg = document.createElement("img")
        container.appendChild(dogDiv)
        dogDiv.appendChild(dogImg)
        dogImg.src = image
    })
    })

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        for (const key in data.message){

            let breedUl = document.getElementById("dog-breeds")
            let breedLi = document.createElement("li")
            breedUl.appendChild(breedLi)
            breedLi.innerText = key

            breedLi.addEventListener("click", function(){
               breedLi.className = 'green'


            })

        }
       
        
    })
    
    const dropDown = document.querySelector("select")
    dropDown.addEventListener("change", sortBreeds)
    
    
    
    function sortBreeds(e) {
        const allBreeds = document.querySelectorAll("li")
        console.log("hi")
            allBreeds.forEach((breed)=>{
                if(breed.innerText[0] !== e.currentTarget.value){
                   
                   breed.style.display = 'none'

                }
                else{
                    console.log()
                    breed.style.display = ''
                }
        
        
            })
        }
    
})
