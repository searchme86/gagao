$(document).ready(function () {

  //카카오 이메일 계정
  // 1.카카오 이메일 계정, 인풋 입력 기능
  $(".inputArea__input--email form input").on("propertychange change keyup paste input", function () {

    var emaillabel = $(".inputArea__input--email form label");
    var emailinput = $(".inputArea__input--email form input");
    var infoBtn = $(this).parents().children(".inputArea__input--email").find(".infoHelp__infoBtn");
    var delBtn = $(this).parents().children(".inputArea__input--email").find(".infoHelp__inputDel");

    emaillabel.hide();
    delBtn.show();
    infoBtn.hide();

    if (emailinput.val() === "") {
      emaillabel.attr("style", "display:block;");
    }
    delBtn.click(function () {
      emailinput.val("");
      emaillabel.show();
      delBtn.hide();
      infoBtn.attr("style", "display:block");
      return false;
    })
  })

  //카카오 이메일 계정
  //1. 로그인 이메일 계정알림 팝업
  function popup() {
    var questionBtn = $(".inputArea__input--email .infoHelp .infoHelp__infoBtn");
    if (questionBtn.attr("display") === "none") {
      console.log("none 이야!")
      infoBtn.show();
    }
    $(".infoHelp__infoTxt--visible").toggle();
    if ($(".inputArea__status--visible").attr("style", "display") == "block") {
      $(".inputArea__status--visible").attr("style", "display:none;")
    }
    return false;
  }

  $(".infoHelp .infoHelp__infoBtn").on("click", popup);


  // 2. 비밀번호 인풋 입력 기능
  $(".inputArea__input--pwd input[type=password]").on("propertychange change keyup paste input", function () {
    var pwdInput = $(this);
    var pwdLabel = $(this).prev();
    var pwdBtn = $(this).parents().next().find("button").eq(0);

    console.log(pwdInput.val())

    pwdLabel.hide();

    pwdBtn.css("display", "block");
    pwdBtn.click(function () {
      pwdInput.val("");
      pwdLabel.show();
      pwdBtn.hide();
      return false;
    })


    if (!pwdInput.val()) {
      pwdLabel.attr("style", "display:block");
      pwdBtn.attr("style", "display:none");
    }
  })



  //로그인 상태유지 버튼 기능
  $(".inputArea__input--saved label").click(function () {
    var checkbox = $(".input:checkbox[id='status']");
    var span = $(".inputArea__input--saved label > span");

    $(".inputArea__status--visible").toggle();

    if ($(".infoHelp__infoTxt--visible").attr("style", "display") == "none") {
      $(".infoHelp__infoTxt--visible").attr("style", "display:block;")
    }

    if (!checkbox.is(":checked")) {
      span.css("background", "url(../../../assets/img/login/userLogin/status_checked.png) no-repeat")
    } else if (checkbox.is(":checked")) {
      span.css(
        "background", "url(../../../assets/img/login/userLogin/status_unchecked.png) no-repeat")
    }

    $(this).children().css("font-weight", "bold");
    return false;
  })



  // 푸터 언어 선택기능
  $(".policy-list .language-checked > a").click(function () {
    // 초기화
    var box = $(this)
      .parents()
      .find(".policy")
      .children()
      .eq(1)
      .addClass("policy-language--up");

    box.find("ul").css("display", "block");
    $(this).css("visibility", "hidden");

    $(".policy-language ul>li").mouseenter(function () {
      $(".policy-language ul>li").removeClass("language-selected");
      $(this).css("background", "#eeeeee");
      $(this).siblings().css("background", "#ffffff");
    });

    $(".policy-language ul").mouseleave(function () {
      box.find("ul").hide();
      // box.find("ul").css("display", "none");
      $(this).parent().removeClass("policy-language--up");
      $(".policy-list .language-checked > a").css("visibility", "visible");
    });
  });







});
