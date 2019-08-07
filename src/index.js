console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => data.message.forEach(function(image){
        const container = document.getElementById("dog-image-container")
        const newImg = document.createElement("img")
        newImg.classList.add("images")
        container.appendChild(newImg)
        // const images = document.querySelectorAll("images")
        newImg.src = image
        // images.style.Width("100px")
    }))
    //event listener for the sorting button
    document.addEventListener("change", dogGetter)

    //gtting the data on the dog breeds
    function dogGetter() {

    fetch("https://dog.ceo/api/breeds/list/all") 
    .then(response => response.json())
    .then(data => {
        console.log("hey!")
        const breedObject = data.message
        const breedList = document.getElementById("dog-breeds")
        breedList.innerHTML = ""
        for(const breed in breedObject){
            // console.log(breed)
            const option = document.querySelector("select").value
            // const list = document.createElement("ul")
            const newList = document.createElement("li")
            function colorChange() {
                // listItem = document.querySelector("li")
                // listItem.style.color="red"
                event.target.style.color="red"
            }
            if(breed[0] === option){
                newList.innerText = breed
                newList.addEventListener("click", colorChange)
                breedList.appendChild(newList)}  
            }
    })}

})