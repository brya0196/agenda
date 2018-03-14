$(document).ready(function() {
    $('#login_form').submit(function(e) {
        $(this).addClass('loading')

        // $.ajax({
        //     url: window.location.href + 'verify',
        //     type: 'post',
        //     data: { username: $('input[name=username]').val(), password: $('input[name=password]').val() },
        // })

        // e.preventDefault()
    })
})