
Parse.initialize("HUtHHipJRUxMfJJ0peNNblr7C9NsJnrIFd06Exeh", "qMW5wgmaui65vSksk5FQW2GnqR8ywzNZeubl0lIb"); 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70 //sise del nav
        }, 1000);
        return false;
      }
    }
  });

  $('.carousel').carousel();
  
  function isValidEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    re = re.test(email); 
    return re; 
  } 
   
   $("#sendMessage").on('click', sendMessage);
   function sendMessage(e){
      e.preventDefault(); 
      var TestObject = Parse.Object.extend("TestObject");
      var testObject = new TestObject(); 
      var data = {
        type: $('.type').val(),
        name: $('.name').val(),
        email: $('.email').val(),
        comment: $('.comment').val()

      }; 
      if($('.email').val() != ""){
        if(isValidEmail($('.email').val())){
          $('#sendMessage').text("Enviando...");
          
           testObject.save(data, {
            success: function(object) {
              $('#myModal1').modal('show'); 
              $("#myModal1 .modal-header .modal-title").html('<div class="row"><p class="col-lg-10 text-center">Aviso</p></div>'); 
              $("#myModal1 .modal-body").html('<div class="row"><p class="col-lg-10 text-center">Felicidades. tu correo ha sido enviado satisfactoriamente.</p></div>'); 
              $('.name').val('').focus(); 
              $('.email').val('');
              $('.comment').val('');
              $('#sendMessage').text("Enviar"); 
            }, 
            error: function(model, error) {
              debugger
            }   
          }); 
         } else {
          alert("Escribe correctamente un correo."); 
        } 
      } else {
        alert("Escribe un correo."); 
      } 
  }                 
  $(".brand").hover(function() {
      $(this).find("p").fadeTo( "slow", 0.8 ).stop(true, true);
  }, function() {
      $(this).find("p").fadeTo( "slow", 0 ).stop(true, true);
  });
  $(".btn").on('click', setCurrentOption);
  function setCurrentOption() {
    var type = parseInt($(this).data("type"));
    $(".type option").eq(type).attr("selected","selected") ;     
  }
  $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      section1 = $(".section-container").eq(0),
        section2 = $(".section-container").eq(1),
        section3 = $(".section-container").eq(2),
        section4 = $(".section-container").eq(3),
        section5 = $(".section-container").eq(4),
        section6 = $(".section-container").eq(5);
        if(scrolled > 0 && scrolled < (section1.offset().top + section1.height()) ) {
          $("a").removeClass("active");
         // $(".navbar-nav a").eq(6).addClass("active");
        }  
        else if(scrolled > section2.offset().top-100 && scrolled < (section2.offset().top + section2.height()-100) ) {
          $("a").removeClass("active");
          $(".navbar-nav a").eq(0).addClass("active");
        }    
        else if(scrolled > section3.offset().top-100 && scrolled < (section3.offset().top + section3.height()-100) ) {
          $("a").removeClass("active");
          $(".navbar-nav a").eq(1).addClass("active");
        }
        else if(scrolled > section4.offset().top-100 && scrolled < (section4.offset().top + section4.height()-100) ) {
          $("a").removeClass("active");
          $(".navbar-nav a").eq(2).addClass("active");
        }
        else if(scrolled > section5.offset().top-100 && scrolled < (section5.offset().top + section5.height()-100) ) {
          $("a").removeClass("active");
          $(".navbar-nav a").eq(3).addClass("active");
        }
        else if(scrolled > section6.offset().top-100 && scrolled < (section6.offset().top + section6.height()-100) ) {
          $("a").removeClass("active");
          $(".navbar-nav a").eq(4).addClass("active");
        }
  });

});