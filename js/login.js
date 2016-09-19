$("#submit").click(function(){
    var txt = $("#userName").val();
    $.post("/login", {userName: txt}, function(result){
        if (result.error) {
          $('#loginError').html(result.error);
        } else {
          window.location.replace("/default.html");
        }
    }, "json");
});