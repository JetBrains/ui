function setAnchors() {
    function hasSingleImageInside(p) {
        var img = p.find('img');
        return img.length > 0 && p.children().length === 1 && p.text().trim().length === 0
    }

    var index = 0;
    $('article > p').each(function () {
        if (hasSingleImageInside($(this)) || $(this).hasClass('noanchor')) {
            return;
        }
        var text = '';
        index++;
        text = index < 10 ? '0' + index : index;

        var block = '<div class="block">' +
            '<a class="paragraphAnchor" href="#' + text + '" name="' + text + '">' + text + '</a>' + $(this).prop('outerHTML')
            + '</div>';
        $(this).replaceWith(block)
    });
    $('article > h2, h3, h4, h5, h6').each(function () {
        $(this).addClass('headerAnchor');
        $(this).attr('name', $(this).attr('id'))
    });

    $('.paragraphAnchor, .headerAnchor').click(function (event) {
        var $anchor = $(this);
        var name = $anchor.attr('name');
        if (name === undefined) {
            return
        }
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
