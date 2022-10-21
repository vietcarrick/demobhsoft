$(document).ready(function(){
    $('.review-web').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
      });
});
$(document).ready(function(){
  $('.review-990').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
    });
});
$(document).ready(function(){
  $('.review-575').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
    });
});
$(document).ready(function(){
    $('.review-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
      });
});
function dropdown() {
  const btn = document.getElementsByClassName("option-language-dropdown");
  btn[0].classList.toggle("active");
}
function dropDownOption(){
  const dropDown1 = document.getElementsByClassName("dropdown1")
  dropDown1[0].classList.toggle("active")
}

function dropDownOption2(){
  document.getElementsByClassName("dropdown2")[0].classList.toggle("active")
  console.log(Element)
}
function closeBtn(){
  document.getElementsByClassName("option-language-dropdown")[0].classList.remove("active")
}
$(document).ready(function(){
  $("#drop1" ).click(function() {
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
  });
});
$(document).ready(function(){
  $("#drop2" ).click(function() {
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
  });
});
const desc1 = document.getElementById("discover-search-desc")
const desc2 = document.getElementById("discover-related-desc")
const desc3 = document.getElementById("in-stream-desc")
const imgbg = document.getElementById("bg")
const imgrelated = document.getElementById("related")
const imgrelated2 = document.getElementById("related2")


function showdesc1(){
    desc1.classList.add("active")
    imgbg.classList.add("active")
    desc1.parentElement.classList.add("border")
    if(desc2.className.includes("active")){
      desc2.classList.remove("active")
    }
    imgrelated.classList.remove("active")
    desc2.parentElement.remove("border")
    if(desc3.className.includes("active")){
      desc3.classList.remove("active")
    }
    imgrelated2.classList.remove("active")
    desc3.parentElement.remove("border")  
}
function showdesc2(){
  desc1.classList.remove("active")
  imgbg.classList.remove("active")
  desc1.parentElement.classList.remove("border")
  desc2.classList.add("active")
  imgrelated.classList.add("active")
  desc2.parentElement.classList.add("border")
  desc3.classList.remove("active")
  imgrelated2.classList.remove("active")
  desc3.parentElement.classList.remove("border")
}
function showdesc3(){
  desc1.classList.remove("active")
  imgbg.classList.remove("active")
  desc1.parentElement.classList.remove("border")
  desc2.classList.remove("active")
  imgrelated.classList.remove("active")
  desc2.parentElement.classList.remove("border")
  desc3.classList.add("active")
  imgrelated2.classList.add("active")
  desc3.parentElement.classList.add("border")
}

function down1(){
  document.getElementById("faqcontent1").classList.toggle("active")
  $("#faq1").toggleClass("fa-minus fa-plus");
}
function down2(){
  document.getElementById("faqcontent2").classList.toggle("active")
  $("#faq2").toggleClass("fa-minus fa-plus");
}
function down3(){
  document.getElementById("faqcontent3").classList.toggle("active")
  $("#faq3").toggleClass("fa-minus fa-plus");
}
function down4(){
  document.getElementById("faqcontent4").classList.toggle("active")
  $("#faq4").toggleClass("fa-minus fa-plus");
}
function down5(){
  document.getElementById("faqcontent5").classList.toggle("active")
  $("#faq5").toggleClass("fa-minus fa-plus");
}
$(document).ready(function(){
  $(".overlay" ).click(function() {
    $(this).removeClass("active")
    $(".menu-right").removeClass("active");
  });
});
function closeMenuRight(){
  document.getElementsByClassName("menu-right")[0].classList.remove("active")
  $(".overlay").removeClass("active");
}
function openMenuRight(){
  document.getElementsByClassName("menu-right")[0].classList.add("active")
  document.getElementsByClassName("overlay")[0].classList.add("active")
}
function dropdownright(){
  const btn = document.getElementsByClassName("option-language-dropdown2");
  btn[0].classList.toggle("active");
}
function dropDownOptionRight(){
  const dropDown1 = document.getElementsByClassName("dropdown1")
  dropDown1[0].classList.toggle("active")
}

function dropDownOption2Right(){
  document.getElementsByClassName("dropdown2")[0].classList.toggle("active")
  console.log(Element)
}
$(document).ready(function(){
  $("#drop1right" ).click(function() {
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
  });
});
$(document).ready(function(){
  $("#drop2right" ).click(function() {
    $(this).toggleClass("fa-chevron-up fa-chevron-down");
  });
});
function closeBtnRight(){
  document.getElementsByClassName("option-language-dropdown2")[0].classList.remove("active")
}