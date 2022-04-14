content();

function content() {
const box = document.querySelectorAll(".case");
let carton = document.getElementById("carton");
let item;
let counter = document.getElementById("counter");
let i = 1;

let resetBtn = document.getElementById("reboot");

let section = document.getElementById("section");
let reboot = section.innerHTML;
console.log(carton);
// j'écoute tout le DOM. S'il y a un élément qui est glisser/déplacer
// l'évènement est capturé. A partir de la capture d'évènement, je peux connaitre QUI était ciblé par l'évènement. C'est ce qu'on appelle la target (le "e.target")
document.addEventListener("dragstart", function(e){
    // console.log("cible:",e.target);
    // je lance la fonction avec comme paramètre l'élément qui est en cours de déplacement 
    dragStart(e.target);
    // on stocke dans la variable item, l'élément qui est déplacé, pour s'en resservir dans l'écoute d'événement plus bas, au niveau du 'drop'
    item = e.target;
    // console.log(item);
});
document.addEventListener("dragend", function(e){
    dragEnd(e.target);
});

function dragStart(param) {
        console.log("start")
    param.className += ' tenu';
}

function dragEnd(param) {
    console.log("end")
    param.className = 'base';
}

for(const element of box) {
    // Permet de mettre sur les 4 "cases" chacun des ses évènement d'écoute. (au lieu de faire 4x4lignes).
    element.addEventListener('dragover', dragOver);
    
    element.addEventListener('dragenter', dragEnter);
    
    element.addEventListener('dragleave', dragLeave);
        // écriture en vert = Visual Studio code prévient que c'est une classe et non une fonction
}

carton.addEventListener('drop', function(){
    console.log("drop")
    // console.log("item :",item)
    dragDrop(item);
    counter.innerHTML = i++;
})

function dragOver(e) {
    console.log("over")
    e.preventDefault();
}

function dragEnter(e) {
    console.log("enter")
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    console.log("leave")
    this.className = 'case';
}

function dragDrop(param) {
    carton.className = 'case';
    // console.log(param);
    carton.append(param);
}

resetBtn.addEventListener("click", function() {
    section.innerHTML = reboot;
    console.log(section.innerHTML);
    content();
})

}