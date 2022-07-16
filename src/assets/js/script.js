$(function(){
    const nexticon ='<i class="fa-solid fa-chevron-right"></i>';
    const previcon ='<i class="fa-solid fa-chevron-left"></i>';
    $('.first-slider').owlCarousel({
        loop:true,
        margin:330,
        nav:true,
        navText:[previcon, nexticon],
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });


  $(function(){
    const nexticon ='<i class="fa-solid fa-chevron-right"></i>';
    const previcon ='<i class="fa-solid fa-chevron-left"></i>';
    $('.second-slider').owlCarousel({
        loop:true,
        margin:350,
        nav:true,
        navText:[previcon, nexticon],
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });
  
  $(function(){
    const nexticon ='<i class="fa-solid fa-chevron-right"></i>';
    const previcon ='<i class="fa-solid fa-chevron-left"></i>';
    $('.four-slider').owlCarousel({
        loop:true,
        margin:370,
        nav:true,
        navText:[previcon, nexticon],
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });
  var rangeSlider = document.getElementById("rs-range-line");
  var rangeBullet = document.getElementById("rs-bullet");
  
  rangeSlider.addEventListener("input", showSliderValue, false);
  
  function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 265) + "px";
  }

  









