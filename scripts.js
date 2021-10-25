$(function() {

    let base;
    if(window.location.host == "127.0.0.1:3000") {
        base = ""
    } else {
        base = "fish-care-guide/"
    }
    console.log(base)

    var includes = $('[data-include]')
    $.each(includes, function() {
        var file = base + 'templates/' + $(this).data('include') + '.html'
        $(this).load(file)
    })

    $(".nav-card").click(function() {
        var route = $(this).data("route")
        let loc
        if (route) {
            loc = base + route + '.html'
        } else {
            loc = '#'
        }
        window.location = loc
        return false
    })

    $(".nc > .nc-nav > a").click(function() {
        var route = $(this).data("content")
        if (route) {
            var file = base + 'templates/' + route + '.html'
            $(".nc .nc-content").load(file)
        } 
        window.location = loc
        return false
    })

    

})