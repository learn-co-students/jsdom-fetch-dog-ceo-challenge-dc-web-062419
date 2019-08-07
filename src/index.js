// console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function(){


    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {

        
        
        data.message.forEach(dog =>{
            let container = document.getElementById('dog-image-container')
            let div = document.createElement('div')
            container.appendChild(div)
            let dogImg = document.createElement('img')
            div.appendChild(dogImg).src = dog
        } )
      
    } )

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        // debugger

        for (const key in data.message){
            let ulBreeds = document.getElementById('dog-breeds')
            let li = document.createElement('li')
            ulBreeds.appendChild(li)
            li.innerText = key 
            li.addEventListener('click', function() {
                li.style.color = "blue"
            })
        }

        
    })


})