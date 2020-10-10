/*
 * Script To-do list
 */


/* Variables */

var button = document.querySelector("#submitTask"); // Bouton "ajouter"
var toDoList = document.querySelector(".to-do-list"); // Liste "à faire"
var inProgressList = document.querySelector(".in-progress-list"); // Liste "en cours"
var taskInput = document.querySelector("#taskInput"); // Champs de saisie "tâche"
var categoryInput = document.querySelector("#categoryInput"); // Sélecteur de catégorie




/* Fonctions */

// Ajout d'une tâche
function addTask(toDoList, inProgressList,  taskInput, categoryInput) {
    var task = document.createElement('li'); // Création de la tâche
    task.innerHTML = taskInput.value + '<i class="material-icons change-to-in-progress">keyboard_arrow_right</i><i class="material-icons remove">close</i>'; // Ajout du texte saisi à la tâche et de la flèche
    task.className = categoryInput.value; // Ajout de la classe correspondant à la categorie
    toDoList.appendChild(task); // Insertion de la tâche
    taskInput.value = ""; // Attribution d'une string vide au champs de saisie

    addChangeToInProgressEvent(inProgressList, task);
    addDeleteTaskEvent(task);
}


// Evénement changement vers "en cours"
function addChangeToInProgressEvent(inProgressList, task) {
    var arrow = task.querySelector('.change-to-in-progress'); // Récupération de l'icon de flèche
    
    // Evènement "click" sur l'icône de flèche
    arrow.addEventListener('click', function() {
        inProgressList.appendChild(task); // Ajout de la tâche dans la liste "en cours"
        arrow.remove(); // Suppression de l'icône de flèche
    });
}


// Evénement de suppression de la tâche
function addDeleteTaskEvent(task) {
    var close = task.querySelector('.remove');

    //Evénement de "click" sur l'icône de croix
    close.addEventListener('click', function() {
        task.remove();
    });
}




/* Evenements */

button.addEventListener('click', function() {
    addTask(toDoList, inProgressList, taskInput, categoryInput);
});