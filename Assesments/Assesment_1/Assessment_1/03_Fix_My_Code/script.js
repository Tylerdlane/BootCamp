$(document).ready(function () {
    $("#name").on("blur", function () {
        var name = $("#name").val();
        if (name.split(" ").length < 2 || name.length < 5) {
            $("#name_error").text("Name must be at least 5 characters long and must have 2 words.");
        } else {
            $("#name_error").text("");
        }
    });

    $("#email").on("blur", function () {
        // Need to remove the "" from the .val() so it wont clear out the input field after we leave it
        var email = $("#email").val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //ADDED A (!) to see if the test is false 
        if (!emailRegex.test(email)) {
            $("#email_error").text("Please enter a valid email address.");
        } else {
            $("#email_error").text("");
        }
    });

    $("#phone").on("blur", function () {
        //Removed the "" from the .val() so it wont clear out when we leave the input field
        var phone = $("#phone").val();
        var phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
        var phoneRegex2 = /^\d{10}$/
        // changed || (or) to && (and) so it will test both that both are false not just one 
        if (!phoneRegex.test(phone) && !phoneRegex2.test(phone)) {
            $("#phone_error").text("Please enter a valid phone number.");
        } else {
            $("#phone_error").text("");
        }
    });

    $("#message").on("blur", function () {
        // removed the "" from the .val() os it wont clear out the input field 
        var message = $("#message").val();
        if (message.length < 10) {
            $("#message_error").text("Message must be at least 10 characters long.");
        } else {
            $("#message_error").text("");
        }
    });

    $("#myForm").on("submit", function (e) {
        e.preventDefault();
        // if there are no errors
        if ($("#name_error").text() == "" && $("#email_error").text() == "" && $("#phone_error").text() == "" && $("#message_error").text() == "") {
            // display a success message
            $("#success_message").css("color", "green").text("Your message has been sent!");
            // clear the form
            setTimeout(function () { $("#myForm").trigger("reset") }, 3000);
        } else {
            return false;
        }
    });
});

