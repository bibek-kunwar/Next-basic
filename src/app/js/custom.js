$('.product-slider').slick({
    infinite: true,
    slidesToShow: 5,
    autoplay:true,
    slidesToScroll: 1
  });
  
AOS.init();
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.main_header').addClass('sticky');
  } else {
     $('.main_header').removeClass('sticky');
  }
});

const collapsibleButtons = document.querySelectorAll(
  ".collapsible-trigger-btn"
);

collapsibleButtons.forEach((collapsibleButton) => {
  collapsibleButton.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("collapsible-tab__open");
  });
});
