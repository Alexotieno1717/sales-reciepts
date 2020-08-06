$(document).ready(function(){
    $("#form").hide()
    $("#checkout").click(function () {
        $("#form").show()
    });
    //validate delivery form
    $("#confirm").click(function () {
        event.preventDefault()
        var firstname = $("#fname").val();
        var email = $("#email").val();
        var address = $("#adr").val();

        if (firstname == '' || email == '' || address == '' ) {
            alert("Please fill all fields");
        } else {
            alert('Hello ' + name + " We have received your Credentials .The payments will be processed. Thankyou ");

        }

    });

});

