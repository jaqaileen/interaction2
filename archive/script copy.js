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

document.addEventListener("DOMContentLoaded", function () {
    function updateBox(box, data) {
        const boxHTML = 
        `
            <img class="default" src="${data.ImageLink}">
            <h2 class="name">${data.Name}</h2>
            <p class="type">${data.Type}</p>  
            <p class="type">${data.About}</p>  
            <p class="type">${data.Composition}</p> 
            <p class="type">${data.Hardness}</p>  
            <p class="type">${data.Varieties}</p>  
            <img class="centered" src="${data.ImageLink}">  
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

                    const image = box.querySelector('img');
                    console.log(image);
                    if (image.style.opacity === '' || image.style.opacity === '1') {
                        image.style.opacity = '0'; // Change opacity to 0 if not already
                    } else {
                        image.style.opacity = '1'; // Toggle back to original opacity
                    }
                })
            })
            
        })
        .catch(error => console.error("Error fetching JSON:", error));
});


