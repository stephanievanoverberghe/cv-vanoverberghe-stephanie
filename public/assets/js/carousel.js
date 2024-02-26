/* PHASE 1 : Rendre automatique le défilement des slides
1 - Créer un tableau d'objet pour le slider
1 - Créer une fonction carousel
2 - Stocker les slide-item dans une variable
3 - Utiliser un setTimeout pour un temps de 5 secondes entre chaque slide
4 - Afficher les slides une à une à l'aide d'une boucle
*/

const slider = [
    {
        id: 1,
        title: "Vanoverberghe Stéphanie",
        image: 'public/assets/img/slide-01.jpg',
        subtitle: "Développeuse web junior",
        description: "Passionnée de développement web, je suis à la conquête de mon prochain défi : une alternance dynamique en tant que concepteur développeur d'applications.",
        visibility: true
    },
    {
        id: 2,
        title: "Compétences techniques",
        image: 'public/assets/img/slide-02.jpg',
        subtitle: "SASS - JS - PHP - SQL",
        description: "Actuellement concentrée sur l'approfondissement de mes compétences en JavaScript, je complète ma technique avec une exploration continue de SASS, PHP, et SQL.",
        visibility: false
    },
    {
        id: 3,
        title: "Projets et réalisations",
        image: 'public/assets/img/slide-03.jpg',
        subtitle: "Projets en JS et autres tech",
        description: "Découvrez mon parcours à travers mes projets clés, qui mettent en lumière mon utilisation pratique de JavaScript, SASS, PHP, et SQL, de la conception à la création.",
        visibility: false
    },
]

console.log(slider);


// const carousel = () => {
//     const sliderItems = document.querySelectorAll('.slider-item');

//     for (let i = 0; i < sliderItems.length; i++) {
//         if (sliderItems[1] === true) {
//             sliderItems[0].classList.remove('active');
//             sliderItems[1].classList.add('active');
//         }
//     }
// }
// carousel();


// console.log(carousel());



/* PHASE 2 : Cliquer sur les boutons va a la slide attitrer
1 - Selectionner un bouton (répéter l'opération sur les autres)
2 - Cliquer sur un des boutons t'amène à la slide attitré
3 - Passer la class active sur le bouton sélectionner
*/

