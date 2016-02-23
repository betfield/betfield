Template.options.events({

    // Events for demo purpose only

    'click #fixed-navbar': function (event) {
        if($('body').hasClass('fixed-navbar')) {
            $('body').removeClass('fixed-navbar');
            $('.status-fixed-navbar').html("Off");

            if($('body').hasClass('fixed-sidebar')) {
                $('body').removeClass('fixed-sidebar');
                $('.status-fixed-sidebar').html("Off")
            }

            if($('body').hasClass('fixed-small-header')) {
                $('body').removeClass('fixed-small-header');
                $('.status-fixed-small-header').html("Off")
            }

        } else {
            $('body').addClass('fixed-navbar');
            $('.status-fixed-navbar').html("<span class='text-success font-bold'>On</span>");
            $('body').removeClass('boxed');
            $('.status-boxed-layout').html("Off")
        }
    },

    'click #fixed-sidebar': function (event) {
        if($('body').hasClass('fixed-sidebar')) {
            $('body').removeClass('fixed-sidebar');
            $('.status-fixed-sidebar').html("Off")
        } else {
            $('body').addClass('fixed-navbar');
            $('body').addClass('fixed-sidebar');
            $('.status-fixed-navbar').html("<span class='text-success font-bold'>On</span>");
            $('.status-fixed-sidebar').html("<span class='text-success font-bold'>On</span>");
            $('body').removeClass('boxed');
            $('.status-boxed-layout').html("Off")
        }
    },

    'click #fixed-footer': function (event) {
        if($('body').hasClass('fixed-footer')) {
            $('body').removeClass('fixed-footer');
            $('.status-fixed-footer').html("Off");
        } else {
            $('body').addClass('fixed-footer');
            $('.status-fixed-footer').html("<span class='text-success font-bold'>On</span>");
            $('body').removeClass('boxed');
            $('.status-boxed-layout').html("Off")
        }
    },

    'click #fixed-small-header': function (event) {
        if($('body').hasClass('fixed-small-header')) {
            $('body').removeClass('fixed-small-header');
            $('body').removeClass('fixed-sidebar');
            $('body').removeClass('fixed-navbar');
            $('.status-fixed-small-header').html("Off");
            $('.status-fixed-sidebar').html("Off");
            $('.status-fixed-navbar').html("Off")
        } else {
            $('body').addClass('fixed-navbar');
            $('body').addClass('fixed-sidebar');
            $('body').addClass('fixed-small-header');
            $('.status-fixed-navbar').html("<span class='text-success font-bold'>On</span>");
            $('.status-fixed-sidebar').html("<span class='text-success font-bold'>On</span>");
            $('.status-fixed-small-header').html("<span class='text-success font-bold'>On</span>");
            $('body').removeClass('boxed');
            $('.status-boxed-layout').html("Off")
        }

    },

    'click #boxed-layout': function (event) {
        if($('body').hasClass('boxed')) {
            $('body').removeClass('boxed');
        } else {
            $('body').addClass('boxed');
            $('.status-boxed-layout').html("<span class='text-success font-bold'>On</span>");
            $('body').removeClass('fixed-small-header');
            $('body').removeClass('fixed-sidebar');
            $('body').removeClass('fixed-navbar');
            $('body').removeClass('fixed-footer');
            $('.status-fixed-small-header').html("Off");
            $('.status-fixed-footer').html("Off");
            $('.status-fixed-sidebar').html("Off");
            $('.status-fixed-navbar').html("Off");
        }

    }

});