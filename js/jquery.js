$( document ).ready( function () {
    $( ".btn-add" ).on( "click" , function () {
        $( this ).addClass( "btn-add-class" );
    })

    $( ".btn-remove-class" ).on( "click" , function () {
        $( this ).removeClass( "btn-remove-class" );
    })

    $( ".btn-toggle-class" ).on( "click" , function () {
        $( this ).toggleClass( "btn-toggle-class" );
    })

    $( ".btn-get-attr" ).on( "click" , function () {
        console.log( $( this ).attr( "value" ) );
    })

    $( ".btn-set-attr" ).on( "click" , function () {
        $( this ).attr( "value" , "Button set Attr");
    })

    $( ".btn-alert-on-click" ).on( "click" , function () {
        alert( "This button causes alert message" );
    })

    $( ".btn-trigger-alert" ).on( "click" , function () {
        $( ".btn-alert-on-click" ).trigger( "click" );
    })

    $( ".btn-clone" ).on( "click" , function () {
        $( this ).clone().text( "Cloned" ).insertAfter( ".btn-clone" );
    })

    $( ".btn-closest" ).on( "click" , function () {
        console.log( $( this ).closest( ".item-card" ) );
    })

    $( ".btn-each-text" ).on( "click" , function () {
        $( "button" ).each( function (index) {
            console.log( index + ":" + $( this ).text() );
        })
    })

    $( ".btn-find" ).on( "click" , function () {
        console.log( $( this ).offset() );
    })

    $( ".btn-fade-in-text" ).on( "click" , function () {
        $( ".invisible-text" ).fadeIn( "slow" );
    })

    $( ".btn-fade-out-text" ).on( "click" , function () {
        $( ".visible-text" ).fadeOut( "slow" );
    })

    $( ".btn-hide-text" ).on( "click" , function () {
        $( ".hide-text" ).hide( "slow" );
    })

    $( ".btn-show" ).on( "click" , function () {
        $( ".show-text" ).show( "slow" );
    })

    $( ".btn-data-about-me" ).on( "click" , function () {
        $(this).each(function() {
            var arr  = $.map(this.attributes, function (attribute) {
                return attribute.name + ' = ' + attribute.value;
            });
        });
        var offset = $(this).offset();
        console.log($( this ).width() + "," + $( this ).height() + "," + offset.left + "," + offset.top + ","
            + arr + "," + $(this).parent().prop('tagName') + "," + $(this).siblings() + "," + $( this ).text());
    });

    $(".btn-detach").on("click", function () {
        $(".author").detach();
    });

    $(".btn-html").on("click", function () {
        $(this).next().html("<i>Lorem ipsum dolor sit amet</i>");
    });

    $(".index-li").on("click", function () {
        var index = $(".index-li").index(this)+1;
        $(".index-span").text("Li index number - " + index);
    });

    $(".btn-slide-up").on("click", function () {
        $(this).next("p").slideUp("slow");
    })

    $(".btn-slide-down").on("click", function () {
        $(this).next("p").slideDown("slow");
    })
    
    $(".btn-slide-toggle").on("click", function () {
        $(this).next("p").slideToggle("slow");
    })
    
    $(".btn-eq").on("click", function () {
        $( ".square" ).eq( 3 ).css( "background-color", "#ccc" );
    })

    $("input").on("change", function () {
        console.log($(this).val());
    });
    $("select").on("change", function () {
        console.log($(this).val());
    });

    $( ".form-info" ).on( "submit", function( event ) {
        event.preventDefault();
        console.log( $(this).serialize() );
    });

    $( ".keypress" ).on("keypress", function () {
        $(this).css("background-color", "rgba(96, 144, 165, 0.8)");
    });

    $("#keydown").on("keydown", function (eventObject) {
        $(".press-inspect").text("Press the button: " + eventObject.which);
    });

    $("#keyup").on("keyup", function (eventObject) {
        $(".up-inspect").text("Clutch the button: " + eventObject.which);
    });

    $("#password-field").keyup(function () {
        var va = $(this).val();
        $( "#password-field-confirm" ).attr("value" , va);
    }).keyup();
})