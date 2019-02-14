let btnAppuyer = document.querySelector('span')






//je fais ma methode 

let appuyer = () => {
// je cible mon input
let monInput = document.querySelector('input')

// on créer la condition de monInput
if(monInput.value.length <= 0){
  return
}

// je fais mon li
let monLi = document.createElement('li');[0]
// je vise mon ul
let monUl = document.querySelector('ul');
monLi.className = 'mt-4 pb-5'
// je lui dis que mon li est l'enfant de mon ul (celui que j'ai créer dans mon HTML)
monUl.appendChild(monLi)
// je fais un P
let monP = document.createElement('p')

// c'est l'enfant de mon li 
monLi.appendChild(monP)

// je lui dis que le texte de mon p = à la valeur introduite par le input (en gros, il copie la valeur de mon input dans le p que je viens de créer)
monP.innerText = monInput.value

// je fais mes 3 boutons
let inputDeMonP = document.createElement('input');
// je lui donne la classe d-none pour pouvoir le toggle plus tard
inputDeMonP.classList.add("d-none");

let bouton1 = document.createElement('button')
let bouton2 = document.createElement('button')
let bouton3 = document.createElement('button')
// je cible mes boutons. Ce sont des enfants de mon li
monLi.appendChild(bouton1)
monLi.appendChild(bouton2)
monLi.appendChild(bouton3)

// je fais float mes boutons vers la droite et on y ajoute les icone
bouton1.className = 'mr-2 float-right fas fa-trash-alt'
bouton2.className = 'mr-2 float-right fas fa-edit'
bouton3.className = 'mr-2 float-right fas fa-check-square'

// je supprime la value de l'input quand j'appuie sur ajouter
monInput.value =''









// je fais en sorte de changer la couleur de mon li en appuyant sur le 3eme bouton (la fonction toggle permet d'alterner la couleur d'origine en la mettant en vert )
bouton3.addEventListener('click', () => {
  monLi.classList.toggle('bg-success')
  bouton1.classList.toggle('d-none')
  bouton2.classList.toggle('d-none')

  
})





// je fais en sorte de placer un input sous monP en appuyant sur le bouton2 
bouton2.addEventListener('click',() =>{
  monLi.appendChild(inputDeMonP);
  bouton1.classList.toggle('d-none')
  bouton3.classList.toggle('d-none')


  // le toggle permet d'inverser le d-none que l'on a placer juste avant 
  inputDeMonP.classList.toggle('d-none')
  // monP.classList.toggle('d-none')

  // je lui dis que le texte de mon p = à la valeur de l'input introduite 
  monP.innerText = inputDeMonP.value
});


// je créer l'evenement de mon 3eme bouton qui supprime monli
bouton1.addEventListener('click',()=>{

  monLi.remove()

})






}



btnAppuyer.addEventListener('click',appuyer)













// for (let i = 0; i < maCroix.length; i++) {
//   let span = document.createElement("SPAN");
//   maCroix[i].appendChild(span);
//   span.innerText = '\u00D7' ; // = un géant X  
//   span.className = "close"; // = donnez un nom 

//   //je crée un deuxieme span 
//   let span2 = document.createElement("SPAN");
//   maCroix[i].appendChild(span2);
//   span.innerText = '\u00D7' ; // = un géant X  
//   span.className = "close"; // = donnez un nom 
  
  
// };
// // les 3 boutons 
// let bouton1 = document.createElement('button')
// bouton1.className ='fa fa-minus'
// let bouton2 = document.createElement('button')
// let bouton3 = document.createElement('button')
// //c'est les enfants de mon li


// //////////////////////////////////////////////////////////////////////////////////
// // Suppression de LI une fois qu'on clique sur maCroix
// let fermerMacroix = document.getElementsByClassName("close");


// ////////////////////////////////////////////////////////////////////////////////////
// // Add a "checked" symbol when clicking on a list item


// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// //creation d'un nouveau li quand on clique sur le bouton "ajouter"
// function newElement() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("myInput").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   // let span = document.createElement("SPAN");
//   // let txt = document.createTextNode("\u00D7");
//   // span.className = "close";
//   // span.appendChild(txt);
//   // li.appendChild(span);

//   for (i = 0; i < fermerMacroix.length; i++) {
//     fermerMacroix[i].onclick = function() {
//       let div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }



