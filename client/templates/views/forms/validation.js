Template.validation.onRendered(function(){

    $("#form").validate({
        rules: {
            password: {
                required: true,
                minlength: 3
            },
            url: {
                required: true,
                url: true
            },
            number: {
                required: true,
                number: true
            },
            max: {
                required: true,
                maxlength: 4
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

    $("#form_2").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            username: {
                required: true,
                minlength: 5
            },
            url: {
                required: true,
                url: true
            },
            number: {
                required: true,
                number: true
            },
            last_name: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            number: {
                required: "(Please enter your phone number)",
                number: "(Please enter valid phone number)"
            },
            last_name: {
                required: "This is custom message for required",
                minlength: "This is custom message for min length"
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorPlacement: function(error, element) {
            $( element )
                .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                .append( error );
        },
        errorElement: "span",
    });


});