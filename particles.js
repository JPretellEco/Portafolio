
tsParticles.load("particles-js", {
    particles: {
        number: {
            value: 80, // Número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ff99" // Color de las partículas (verde futurista)
        },
        shape: {
            type: "circle", // Forma de las partículas (círculos)
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 4, // Tamaño de las partículas
            random: true
        },
        line_linked: {
            enable: true, // Líneas entre partículas activadas
            distance: 120,
            color: "#00ff99",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // Velocidad de movimiento
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // Efecto al pasar el mouse
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


let currentIndex = 0;
const images = document.querySelectorAll('#certificados-img .carousel img');
const totalImages = images.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 500; // Ajustamos el desplazamiento según el índice de la imagen
    document.querySelector('#certificados-img .carousel').style.transform = `translateX(${offset}px)`;
}


