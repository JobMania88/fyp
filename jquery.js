
$(document).ready(function () {
    console.log('New User');

    //Your jquery code here
    console.log("We are using jQuery");
    // jQuery Syntax looks like this
    // $('selector').action()

   
    $('p').on(
        {
            click: function () {
                console.log('Clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");

            }

        })

    $('#but').click(function () {
        $('#wiki').fadeOut(5000);
    })
    // AJAX Using jQuery
     $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

    $.post('https://code.jquery.com/jquery-3.3.1.js',
    { name: '', email: '',phone:'',education:'',skills },
     function (data, status) { alert(status) });

});


