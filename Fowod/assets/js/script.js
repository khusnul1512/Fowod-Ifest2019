
$(document).ready(function() {
    // slick
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,  
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000
              }
            }
        ]
    });

    $('.slider-par-bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 5000
    });

    $('.btn-search').click(function() {
      $('#search').slideToggle();
    });

    $(window).scroll(function() {
      if($(this).scrollTop() > 400) {
        $('nav').addClass('nav-shadow');
      } else {
        $('nav').removeClass('nav-shadow');
      }
      
    // console.log($('#content-livedoor').innerHeight());
    });

    $('#toggle-nav').click(function() {
      $('#menubar-nav').slideToggle();
    });

    $('#btn-lampu').click( function() {
      $('#btn-lampu').addClass('aktif-btn-control');
      $('#btn-pintu').removeClass('aktif-btn-control');
      $('#btn-penyiram').removeClass('aktif-btn-control');
      $('#lampu').show();
      $('#des-lampu').show();
      $('#pintu').hide();
      $('#des-pintu').hide();
      $('#penyiram').hide();
      $('#des-penyiram').hide();
    });
    $('#btn-pintu').click( function() {
      $('#btn-lampu').removeClass('aktif-btn-control');
      $('#btn-pintu').addClass('aktif-btn-control');
      $('#btn-penyiram').removeClass('aktif-btn-control');
      $('#lampu').hide();
      $('#des-lampu').hide();
      $('#pintu').show();
      $('#des-pintu').show();
      $('#penyiram').hide();
      $('#des-penyiram').hide();
    });
    $('#btn-penyiram').click( function() {
      $('#btn-lampu').removeClass('aktif-btn-control');
      $('#btn-pintu').removeClass('aktif-btn-control');
      $('#btn-penyiram').addClass('aktif-btn-control');
      $('#lampu').hide();
      $('#des-lampu').hide();
      $('#pintu').hide();
      $('#des-pintu').hide();
      $('#penyiram').show();
      $('#des-penyiram').show();
    });

    // login
    $('.btn-daftar').click( function() {
      $('#signup').show();
      $('#loginku').hide();
    });
    $('.btn-masuk').click( function() {
      $('#signup').hide();
      $('#loginku').show();
    });


    // searching

    // function autocomplete(inp, arr) {
    //   var currentfocus;
    //   inp.addEventListener("input", function(e){
    //     var a, b, i, val = this.value;
    //     closeAllLists();
    //       if(!val) {
    //         return false;
    //       }
    //     currentFocus = -1;
    //     a = document.createElement("DIV");
    //     a = setAttribute("id", this.id + "autocomplete-list");
    //     a = setAttribute("class", "autocomplete-items");
    //     this.parentNode.appendChild(a);
    //     for(i=0;i<arr.length;i++){
    //       if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    //         b.document.createElement("DIV");
    //         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    //         b.innerHTML += arr[i].substr(val.length);
    //         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    //         b.addEventListener("click", function(e){
    //           inp.value = this.getElementByTagName("input")[0].value;
    //           closeAllLists();
    //         });
    //         a.appendChild(b);
    //       }
    //     }
    //   });
    //   inp.addEventListener("keydown", function(e){
    //     var x = document.getElementById(this.id + "autocomplete-lists");
    //     if (x) x = x.getElementsByTagName("div");
    //     if (e.keyCode == 40){
    //       currentFocus++;
    //       addActive(x);
    //     } else if (e.keyCode == 38) {
    //       currentFocus--;
    //       addActive(x);
    //     } else if (e.keyCode == 13) {
    //       e.preventDefault();
    //         if(currentFocus > -1) {
    //           if(x) x[currentFocus].click();
    //         }
    //     }
    //   });
    //   function addActive(x) {
    //     if(!x) return false;
    //     removeActive(x);
    //     if (currentFocus >= x.length) currentFocus=0;
    //     if (currentFocus < 0) currentFocus = (x.length - 1);
    //     x[currentFocus].classList.add("autocomplete-active");
    //   }
    //   function removeActive(x) {
    //     for (var i=0;i<x.length;i++) {
    //       x[i].classList.remove("autocomplete-active");
    //     }
    //   }
    //   function closeAllLists(elmnt) {
    //     var x = document.getElementsByClassName("autocomplete-items");
    //     for(var i=0;i<x.length;i++) {
    //       if(elmnt != x[i] && elmnt != inp) {
    //         x[i].parentNode.removeChild(x[i]);
    //       }
    //     }
    //   }
    //   document.addEventListener("click", function(e) {
    //     closeAllLists(e.target);
    //   });
    // }
    // var alat = ["livelamp", "livedoor", "livewater"];
    //   autocomplete(document.getElementById("keyword"), alat);
});

