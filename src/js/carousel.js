/* PHASE 1 : Rendre automatique le défilement des slides
1 - Créer un tableau d'objet pour le slider
1 - Créer une fonction carousel
2 - Stocker les slide-item dans une variable
3 - Utiliser un setTimeout pour un temps de 5 secondes entre chaque slide
4 - Afficher les slides une à une à l'aide d'une boucle
*/

const sliderItems = document.querySelector('.slider-items');

const sliders = [
    {
        id: 1,
        title: "Vanoverberghe Stéphanie",
        image: 'src/img/slide-01.jpg',
        subtitle: "Développeuse web junior",
        description: "Passionnée de développement web, je suis à la conquête de mon prochain défi : une alternance dynamique en tant que concepteur développeur d'applications."
    },
    {
        id: 2,
        title: "Compétences techniques",
        image: 'src/img/slide-02.jpg',
        subtitle: "SASS - JS - PHP - SQL",
        description: "Actuellement concentrée sur l'approfondissement de mes compétences en JavaScript, je complète ma technique avec une exploration continue de SASS, PHP, et SQL."
    },
    {
        id: 3,
        title: "Projets et réalisations",
        image: 'src/img/slide-03.jpg',
        subtitle: "Projets en JS et autres tech",
        description: "Découvrez mon parcours à travers mes projets clés, qui mettent en lumière mon utilisation pratique de JavaScript, SASS, PHP, et SQL, de la conception à la création."
    },
];

let currentIndex = 0;

const displaySlider = () => {
    sliderItems.innerHTML = '';
    const sliderElement = createSliderElement(sliders[currentIndex]);
    sliderElement.classList.add('active');
    sliderItems.appendChild(sliderElement);
    updateButton();
};

const createSliderElement = slider => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    sliderItem.innerHTML = `
        <img src="${slider.image}" alt="Image décorative">
        <div class="slider-caption">
            <h1 class="slider-title"><span>${slider.title}</span></h1>
            <h2 class="slider-subtitle">${slider.subtitle}</h2>
            <p class="slider-text">${slider.description}</p>
        </div>
        <div class="slider-buttons pt-5 pb-2">
            <button class="slider-button btn-1 active"></button>
            <button class="slider-button btn-2"></button>
            <button class="slider-button btn-3"></button>
        </div>
    `;

    return sliderItem;
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % sliders.length;
    displaySlider();
}

const updateButton = () => {
    document.querySelectorAll('.slider-button').forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.btn-${currentIndex + 1}`);
    if (activeButton) {
        activeButton.classList.add('active');
    };
};

displaySlider();
setInterval(nextSlide, 7000);