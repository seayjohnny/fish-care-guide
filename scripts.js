$(function() {

    

    var includes = $('[data-include]')
    $.each(includes, function() {
        var file = 'templates/' + $(this).data('include') + '.html'
        $(this).load(file)
    })

    $(".nav-card").click(function() {
        var route = $(this).data("route")
        let loc
        if (route) {
            loc = route + '.html'
        } else {
            loc = '#'
        }
        window.location = loc
        return false
    })

    $(".nc > .nc-nav > a").click(function() {
        var route = $(this).data("content")
        if (route) {
            var file = 'templates/' + route + '.html'
            $(".nc .nc-content").load(file)
        } 
        window.location = loc
        return false
    })

    

})