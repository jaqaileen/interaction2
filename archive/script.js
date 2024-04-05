let lastKnownScrollY = 0;

$(document).scroll(function(){
    let scrollTop = $(this).scrollTop();
    $('.left, .right').css('transform', 'translateY('+ scrollTop * 2 +'px)');
});

$(document).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let scrollDirection = scrollTop > lastKnownScrollY ? 'down' : 'up';

    $('.left, .right').css('transform', 'translateY('+ scrollTop * 2 +'px)');

    if (scrollDirection === 'down') {
        $('.left, .right').removeClass('bounce'); // Remove bounce class when scrolling down
    } else {
        $('.left, .right').addClass('bounce'); // Add bounce class when scrolling up
    }

    lastKnownScrollY = scrollTop;
});


// listen for scroll events in general
// try to use e.preventDefault()
// instead try virutally scrolling in the direction you want per column
// something like [element here].scrollBy(x, y)

document.addEventListener("DOMContentLoaded", function () {
    function updateBox(box, data) {
        const boxHTML = 
        `
        <img class="default" src="${data.ImageLink}">

        <div class="show"> 
        <h2 class="name">${data.Name}</h2>
            <div class="text">
                <p class="type">${data.Type}</p>  
                <p class="type">${data.About}</p>  
                <p class="type">${data.Composition}</p> 
                <p class="type">${data.Hardness}</p>  
                <p class="type">${data.Varieties}</p>  
            </div>
        <img class="centered" src="${data.ImageLink}">  
        </div>
        `
        
        box.insertAdjacentHTML('beforeend', boxHTML);
    }

    fetch("gems.json")
        .then(response => response.json())
        .then(data => {
            const boxes = document.querySelectorAll(".box");
            data.forEach((gemData, index) => {
                if (boxes[index]) {
                    updateBox(boxes[index], gemData);
                }
            });
            boxes.forEach(box => {
                box.addEventListener('click', () => {
                    box.querySelectorAll('.name, .type, .about, .composition, .hardness, .varieties').forEach(element => {
                        element.classList.toggle('show');
                    });
                    box.classList.toggle('is-active');

                })
            })

            boxes.forEach(box => {
                box.addEventListener('click', () => {
                    const image = box.querySelector('.centered'); 
                    image.classList.toggle('show');
                    });
                    box.classList.toggle('is-active');
            })
            
        })
        .catch(error => console.error("Error fetching JSON:", error));
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 4064) {
        $(window).scrollTop(164);
    } else if ($(window).scrollTop() <= 0) {
        $(window).scrollTop(4000);
    }
});


$(window).scroll(function() {
    var windowHeight = $(window).height();
    if ($(window).scrollTop() >= windowHeight * 5.5) { 
        $('html, body').animate({ scrollTop: windowHeight }, 800); 
    } else if ($(window).scrollTop() <= 0) {
        $('html, body').animate({ scrollTop: windowHeight * 5.5}, 800);
    }
});




// const leftContainer = document.querySelector('.left');
// const middleContainer = document.querySelector('.middle');
// const rightContainer = document.querySelector('.right');

// leftContainer.scrollBy(0,10000)
// rightContainer.scrollBy(0,10000)

// middleContainer.addEventListener('wheel', function(e) {
//     console.log(e)
//     leftContainer.scrollBy({
//         behavior: 'smooth',
//         left: 0,
//         top: -e.deltaY
//     });
    
//     rightContainer.scrollBy({
//         behavior: 'smooth',
//         left: 0,
//         top: -e.deltaY
//     });
// });

//     leftContainer.addEventListener('wheel', function(e) {
//         console.log(e)
//         middleContainer.scrollBy({
//             behavior: 'smooth',
//             left: 0,
//             top: -e.deltaY
//         });
        
//         rightContainer.scrollBy({
//             behavior: 'smooth',
//             left: 0,
//             top: -e.deltaY
//         });
//     });

//         rightContainer.addEventListener('wheel', function(e) {
//             console.log(e)
//             middleContainer.scrollBy({
//                 behavior: 'smooth',
//                 left: 0,
//                 top: -e.deltaY
//             });
            
//             leftContainer.scrollBy({
//                 behavior: 'smooth',
//                 left: 0,
//                 top: -e.deltaY
//             });
//         });
// [leftContainer, rightContainer].forEach(container => {
//     container.addEventListener('wheel', function(e) {
//     });
// });
