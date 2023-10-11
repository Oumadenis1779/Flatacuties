// Your code here
// Your code here

let animals = [];

let selectedAnimals = null;

fetchAnimals();
function fetchAnimals(){ 
 fetch("http://localhost:3000/characters",{
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      animals = data;
      characterBarAnimals();
    });
    
}

function characterBarAnimals(){
 let bar = document.getElementById("character-bar");
 

 let str = "";
 for(let i = 0; i < animals.length; i++ ){
  let animal = animals[i];
  
  str = str + `<span onclick="displayAnimal('${i}')"id="${animal.id}">${animal.name}</span>`;
 }
 console.log(str);

  bar.innerHTML= str;
}

function displayAnimal(id){
 console.log(id);
 let animal = animals[id];
 selectedAnimal = animal;
 let characterName = document.getElementById("name");
 let characterImage = document.getElementById("image");
 let characterVote = document.getElementById("vote-count");
 
 characterName.innerText = animal.name;
 characterImage.src = animal.image;
 characterVote.innerText = animal.votes;
}

let votesForm = document.getElementById("votes-form");
votesForm.addEventListener("submit",function (e) {
   e.preventDefault();
   let votesInput = document.getElementById("votes");
   let votes = parseInt(votesInput.value);

   if(!votes) return;
   
   let animal = animals[selectedAnimal];
   animal.votes= votes + animal.votes;
   displayAnimal(selectedAnimal)
});


