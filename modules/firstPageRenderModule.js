import { creatingRegForm } from "./regFormModule.js";

function firstPageRender() {
    const headerContainer = document.querySelector('.headerContainer');
    headerContainer.style.display = 'none';
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.innerHTML = `
    <div class=advertismentName>
        <h5>Nr. 1 advertisment page in the world!</h5>
    </div>
    
    <div class="container">
    <h1>Ads map</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334261.624229444!2d21.640393999173444!3d55.1561115942494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94140f33be13%3A0xf30a54d3a55dbab9!2sLietuva!5e0!3m2!1slt!2slt!4v1678365012306!5m2!1slt!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>

        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        
    </div>

    <div class="d-flex justify-content-center">
        <button class="btn btn-primary firstEntryBtn">Sign in / Log in</button>
    </div>`

    const firstEntryBtn = document.querySelector('.firstEntryBtn');
    firstEntryBtn.addEventListener('click', () => {
        carouselContainer.style.display = 'none';
        headerContainer.style.display = 'block';
        creatingRegForm();
    })
}

export { firstPageRender }