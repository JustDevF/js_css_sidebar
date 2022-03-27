
//cibles DOM
const sideBarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeSideBar = document.querySelector(".close-btn");

//Fonction de gestionnaire d'event
const openSide = () =>{
      //permet de basculer les classes
      sidebar.classList.toggle("show-sidebar");
}

//Gestionnaire d’événement ouvrir le sidebar
sideBarToggle.addEventListener('click', openSide);

//Fonction de gestionnaire d'event
const closeSide = () =>{
   sidebar.classList.remove("show-sidebar");
}

//Gestionnaire d’événement fermer le sidebar
closeSideBar.onclick = closeSide;