const images = document.querySelectorAll('.feed img');

const option = {
    rootMargin: '150px',
}

const io = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;

            image.src = image.dataset.lazy

            image.classList.add('appear');

            observer.unobserve(image)
        }
    });

}, option);

images.forEach(image => io.observe(image));