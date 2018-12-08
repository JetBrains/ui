function setAnchors() {
    var index = 0
    $('article > p').each(function() {
        var text = ''
        index++
        text = index < 10 ? '0' + index : index

        var block = '<div class="block">' +
            '<a class="anchor" href="#' + text + '" name="' + text + '">' + text + '</a>' +
            '<p>' + $(this).html() + '</p>' +
            '</div>'

        $(this).replaceWith(block)
    })
    $('article > h2').each(function() {
        $(this).addClass('anchor')
        $(this).attr('name', $(this).attr('id'))
    })

    $('article .anchor').click(function(event) {
        var $anchor = $(this)
        var name = $anchor.attr('name')

        this.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });

        if (history.pushState) {
            history.pushState(null, '', '#' + name)
        } else {
            location.hash = name
        }

        event.preventDefault()
    })
}