var icon = document.querySelector(".icon");
var navbar = document.querySelector("ul");

icon.addEventListener('click', () => {
   navbar.classList.toggle("showData");
   if(navbar.className == "showData"){
     document.getElementById("bar").className="fa-solid fa-xmark";
   }else{
     document.getElementById("bar").className="fa-solid fa-bars";
   }
 
});
/////reivew section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay:{
    delay:2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When window width is <= 768px (for mobile devices)
    350: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    523: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    846: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
  addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          const card = this.parentNode.cloneNode(true);
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.classList.add("delete");
          const orderNowButton = document.createElement("button");
          orderNowButton.textContent = "Order Now";
          orderNowButton.classList.add("order-now");
        
          
          // Remove the "Add to Cart" button from the cloned card
          card.querySelector(".add-to-cart").remove();
          
          card.appendChild(deleteButton);
          card.appendChild(orderNowButton);
          
          document.querySelector(".card-show").appendChild(card);
          
          // Store the added content in localStorage
          const cardsInStorage = JSON.parse(localStorage.getItem("addedCards")) || [];
          cardsInStorage.push(card.innerHTML);
          localStorage.setItem("addedCards", JSON.stringify(cardsInStorage));
      });
  });
  
  // Function to load previously added cards from localStorage
  function loadCardsFromStorage() {
      const cardsInStorage = JSON.parse(localStorage.getItem("addedCards")) || [];
      const cardShow = document.querySelector(".card-show");
      
      cardsInStorage.forEach(function(cardHTML) {
          const card = document.createElement("div");
          card.innerHTML = cardHTML;
          cardShow.appendChild(card);
      });
  }

  loadCardsFromStorage();
  
  document.querySelector(".card-show").addEventListener("click", function(event) {
      if (event.target.classList.contains("delete")) {
          event.target.parentNode.remove();
          
          // Update localStorage after removing a card
          const cardsInStorage = JSON.parse(localStorage.getItem("addedCards")) || [];
          const cardIndex = cardsInStorage.findIndex(cardHTML => cardHTML === event.target.parentNode.innerHTML);
          if (cardIndex !== -1) {
              cardsInStorage.splice(cardIndex, 1);
              localStorage.setItem("addedCards", JSON.stringify(cardsInStorage));
          }
      } else if (event.target.classList.contains("order-now")) {
          // Perform action when "Order Now" button is clicked
         
          var orderNow = document.getElementById("order")
          orderNow.style.display="block"
         
      }
  });
});

function cancel(){
  var orderNow = document.getElementById("order")
          orderNow.style.display="none"
}