
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
            <img src="${data.ImageLink}">  
            <h2 class="name">${data.Name}</h2>
            <p class="type">${data.Type}</p>  
            <p class="type">${data.About}</p>  
            <p class="type">${data.Composition}</p> 
            <p class="type">${data.Hardness}</p>  
            <p class="type">${data.Varieties}</p>  
        `
        box.insertAdjacentHTML('beforeend', boxHTML);

        // box.querySelector(".name p").textContent = data["Name"];
        // box.querySelector(".image").src = data["ImageLink"];
        // box.querySelector(".type p").textContent = "Type: " + data["Type"];
        // box.querySelector(".about p").textContent = "About: " + data["About"];
        // box.querySelector(".composition p").textContent = "Composition: " + data["Composition"];
        // box.querySelector(".hardness p").textContent = "Hardness: " + data["Hardness"];
        // box.querySelector(".varieties p").textContent = "Varieties: " + (data["Varieties"] ? data["Varieties"] : "N/A");
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
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
