
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

      $(".forn_singUp").css("display","none");
      $(".forn_LogIn").css("display","block");

    });
    $("#sing_up_ru").click(function (e) { 
      e.preventDefault();
      $("#log_in_ru").removeClass('active_m');
      $("#sing_up_ru").addClass('active_m');

      $(".forn_singUp").css("display","block");
      $(".forn_LogIn").css("display","none");
    });



    //Язык
    var userLang = navigator.language || navigator.userLanguage;
    if(localStorage.length>0){
      if(localStorage.getItem('lan')=="ru"){
        $("#lang_ru").css("color","red");
        $("#lang_en").css("color","white");
        $(".ru").css("display","block");
        $(".en").css("display","none");

      //Sing up_RU
      $("#head_form_sing").html("Регестрация");
      $("#defaultRegisterFormFirstName").attr("placeholder","Имя");
      $("#defaultRegisterFormEmail").attr("placeholder","E-mail адрес");
      $("#defaultRegisterFormPassword").attr("placeholder","Пароль");
      $("#defaultRegisterFormConfirmPassword").attr("placeholder","Подтвердите пароль");
      $("#defaultRegisterFormSignUp").html("Зарегистрироваться");
      //Log_RU
      $("#head_form_log").html("Авторизация");
      $("#defaultLogFormEmail").attr("placeholder","E-mail адрес");
      $("#defaultLogFormPassword").attr("placeholder","Пароль");
      $("#defaultLogFormSignUp").html("Войти");
      $("#fog_pas").html("Забыли пароль?");
      }
      else{
        $("#lang_en").css("color","red");
        $("#lang_ru").css("color","white");
        $(".en").css("display","block");
        $(".ru").css("display","none");

        $("#head_form_sing").html("Sign up");
        $("#defaultRegisterFormFirstName").attr("placeholder","Name");
        $("#defaultRegisterFormEmail").attr("placeholder","E-mail address");
        $("#defaultRegisterFormPassword").attr("placeholder","Password");
        $("#defaultRegisterFormConfirmPassword").attr("placeholder","ConfirmPassword");
        $("#defaultRegisterFormSignUp").html("Sign up");
        //Log_EN
        $("#head_form_log").html("Log In");
        $("#defaultLogFormEmail").attr("placeholder","E-mail address");
        $("#defaultLogFormPassword").attr("placeholder","Password");
        $("#defaultLogFormSignUp").html("Sign in");
      }
      
    }
    else{
      $("#lang_en").css("color","red");
      $("#lang_ru").css("color","white");
    }
    


    $("#lang_en").click(function (e) { 
      e.preventDefault();
      $("#lang_en").css("color","red");
      $("#lang_ru").css("color","white");
      $(".en").css("display","block");
      $(".ru").css("display","none");
      localStorage.clear();
      localStorage.setItem("lan","en");

      $("#head_form_sing").html("Sign up");
      $("#defaultRegisterFormFirstName").attr("placeholder","Name");
      $("#defaultRegisterFormEmail").attr("placeholder","E-mail address");
      $("#defaultRegisterFormPassword").attr("placeholder","Password");
      $("#defaultRegisterFormConfirmPassword").attr("placeholder","ConfirmPassword");
      $("#defaultRegisterFormSignUp").html("Sign up");
      //Log_EN
      $("#head_form_log").html("Log In");
      $("#defaultLogFormEmail").attr("placeholder","E-mail address");
      $("#defaultLogFormPassword").attr("placeholder","Password");
      $("#defaultLogFormSignUp").html("Sign in");
    });
    $("#lang_ru").click(function (e) { 
      e.preventDefault();
      $("#lang_ru").css("color","red");
      $("#lang_en").css("color","white");
      $(".ru").css("display","block");
      $(".en").css("display","none");
      localStorage.clear();
      localStorage.setItem("lan","ru");
      //Sing up_RU
      $("#head_form_sing").html("Регестрация");
      $("#defaultRegisterFormFirstName").attr("placeholder","Имя");
      $("#defaultRegisterFormEmail").attr("placeholder","E-mail адрес");
      $("#defaultRegisterFormPassword").attr("placeholder","Пароль");
      $("#defaultRegisterFormConfirmPassword").attr("placeholder","Подтвердите пароль");
      $("#defaultRegisterFormSignUp").html("Зарегистрироваться");
      //Log_RU
      $("#head_form_log").html("Авторизация");
      $("#defaultLogFormEmail").attr("placeholder","E-mail адрес");
      $("#defaultLogFormPassword").attr("placeholder","Пароль");
      $("#defaultLogFormSignUp").html("Войти");
      $("#fog_pas").html("Забыли пароль?");
      
    });
//FAQ

$('.show').click(function() {
  $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](400);
});
//Скрол
$('a[href*="#s"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});





  });

