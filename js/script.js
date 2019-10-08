
  $(function(){
//SING_IN 

//EN
    $("#log_in").click(function (e) { 
      e.preventDefault();
      $("#sing_up").removeClass('active_m');
      $("#log_in").addClass('active_m');
      $(".forn_singUp").css("display","none");
      $(".forn_LogIn").css("display","block");
    });
    $("#sing_up").click(function (e) { 
      e.preventDefault();
      $("#log_in").removeClass('active_m');
      $("#sing_up").addClass('active_m');
      $(".forn_singUp").css("display","block");
      $(".forn_LogIn").css("display","none");
    });

//RU

    $("#log_in_ru").click(function (e) { 
      e.preventDefault();
      $("#sing_up_ru").removeClass('active_m');
      $("#log_in_ru").addClass('active_m');
      $(".forn_singUp_ru").css("display","none");
      $(".forn_LogIn_ru").css("display","block");

    });
    $("#sing_up_ru").click(function (e) { 
      e.preventDefault();
      $("#log_in_ru").removeClass('active_m');
      $("#sing_up_ru").addClass('active_m');
      $(".forn_singUp_ru").css("display","block");
      $(".forn_LogIn_ru").css("display","none");
    });



    //Язык
    var userLang = navigator.language || navigator.userLanguage;
    if(localStorage.length>0){
      if(localStorage.getItem('lan')=="ru"){
        $("#lang_ru").css("color","red");
        $("#lang_en").css("color","white");
        $(".ru").css("display","block");
        $(".en").css("display","none");
      }
      else{
        $("#lang_en").css("color","red");
        $("#lang_ru").css("color","white");
        $(".en").css("display","block");
        $(".ru").css("display","none");
      }
      
    }
    else{
    if(userLang=="ru"){
      $("#lang_ru").css("color","red");
      $("#lang_en").css("color","white");
      $(".ru").css("display","block");
      $(".en").css("display","none");
    }
    else{
      $("#lang_en").css("color","red");
      $("#lang_ru").css("color","white");
      $(".en").css("display","block");
      $(".ru").css("display","none");
    }
  }


    $("#lang_en").click(function (e) { 
      e.preventDefault();
      $("#lang_en").css("color","red");
      $("#lang_ru").css("color","white");
      $(".en").css("display","block");
      $(".ru").css("display","none");
      localStorage.clear();
      localStorage.setItem("lan","en");
    });
    $("#lang_ru").click(function (e) { 
      e.preventDefault();
      $("#lang_ru").css("color","red");
      $("#lang_en").css("color","white");
      $(".ru").css("display","block");
      $(".en").css("display","none");
      localStorage.clear();
      localStorage.setItem("lan","ru");
    });
//FAQ
$('.show').click(function() {
  $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](400);
});





  });

