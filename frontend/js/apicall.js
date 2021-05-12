function submit(){
    console.log("submitted");
    $.ajax({url:'https://codeforces.com/api/user.status?handle=18H51A05C2', success: function(result){
        $("#div1").html(result);
        console.log(result);
      }});
}