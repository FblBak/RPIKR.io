document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    const subscribeButton = document.querySelector('.newsletter-form .btn');

    burgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // Toggle 'hide' class for all buttons except subscribe button
        ctaButtons.forEach(button => {
            if (button !== subscribeButton) {
                button.classList.toggle('hide');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const popupInfo = item.querySelector('.popup-info');

        item.addEventListener('mouseover', function() {
            popupInfo.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            popupInfo.style.display = 'none';
        });
    });
});


/* Устанавливаем стартовый индекс слайда по умолчанию: */let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */showSlides(slideIndex);
/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {    showSlides(slideIndex += 1);
}
/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */function previousSlide() {
    showSlides(slideIndex -= 1);}
    function loop() {    nextSlide()
    setTimeout(loop,2500);}
loop()
/* Устанавливаем текущий слайд: */
function currentSlide(n) {    showSlides(slideIndex = n);
}
/* Функция перелистывания: */
function showSlides(n) {    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    /* Проверяем количество слайдов: */    if (n > slides.length) {
        slideIndex = 1}
    if (n < 1) {        slideIndex = slides.length
    }
    /* Проходим по каждому слайду в цикле for: */    for (let slide of slides) {
        slide.style.display = "none";    }
    /* Делаем элемент блочным: */    slides[slideIndex - 1].style.display = "block";
}
