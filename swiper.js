
    document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper('.testimonies-carousel', {
            loop: true,
            autoplay: {
                delay: 5000, // Change slide every 5 seconds
            },
            pagination: {
                el: '.nav-dots',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });
    });

