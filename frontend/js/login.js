console.log('hi');
function login(){
    $.ajax({

        url: '/api/user/'+'jeevanece759@gmail.com',
        type: 'get',
        success: function(result) {
            console.log(result);
    // Do something with the result
        }
    });
}