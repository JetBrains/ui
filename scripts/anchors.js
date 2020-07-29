function setAnchors() {
    function hasSingleImageInside(p) {
        var img = p.find('img');
        return img.length > 0 && p.children().length === 1 && p.text().trim().length === 0
    }

    function hasSingleImageWithCaptionInside(p) {
        var img = p.find('img');
        var caption = p.find('em');
        return img.length > 0 && caption.length > 0 && p.children().length === 2
    }

    function scrollAnchorIntoView(href, anchor) {
        anchor.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });

        if (history.pushState) {
            history.pushState(null, '', '#' + href)
        } else {
            location.hash = href
        }
    }

    function toggleActive($target, hide) {
        if (!hide) {
            $target.addClass('active');
        } else {
            $target.removeClass('active');
        }
    }

    var index = 0;
    $('article > p').each(function () {
        if (hasSingleImageInside($(this)) ||
            hasSingleImageWithCaptionInside($(this)) ||
            $(this).hasClass('incorrect') ||
            $(this).hasClass('correct') ||
            $(this).hasClass('noanchor')) {
            return;
        }
        index++;
        var text = index < 10 ? '0' + index : index;

        if ($(this.nextElementSibling).hasClass('sideblock')) {  //puts aside inside the div with p and aligns to the top of div
            $(this.nextElementSibling).addClass('_aligned');
            block = '<div class="block">' +
                    '<a class="paragraphAnchor" href="#' + text + '" name="' + text + '">' + text + '</a>'
                    + $(this).prop('outerHTML')
                    + $(this.nextElementSibling).prop('outerHTML')
                    + '</div>';
            $(this.nextElementSibling).remove();
        } else {
            block = '<div class="block">' +
                    '<a class="paragraphAnchor" href="#' + text + '" name="' + text + '">' + text + '</a>'
                    + $(this).prop('outerHTML')
                    + '</div>';
        }
        $(this).replaceWith(block)
    });

    var $articleHeaders = $('article > h2, h3, h4, h5, h6')
    var anchors = [];

    $articleHeaders.each(function () {
        $(this).addClass('headerAnchor');
        $(this).attr('name', $(this).attr('id'))

        anchors[$(this).attr('id')] = this;
    });
        
    $('.paragraphAnchor, .headerAnchor').click(function (event) {
        var $anchor = $(this);
        var name = $anchor.attr('name');
        if (name === undefined) {
            return;
        }

        scrollAnchorIntoView(name, this);
        event.preventDefault();
    });

    // Don't built doc nav unnecessarily
    if ($articleHeaders.length === 0) return;

    // Insert document outline button
    var $docNavCtr = $('<div>', { class: 'doc__nav_ctr' }).prependTo('.article');
    var $outlineBtn = $('<div>', { class: 'sub_nav_btn' }).appendTo($docNavCtr);

    // Scaffold sub-navigation menu
    var $subNav = $('<nav>', { class: 'sub__nav' }).appendTo($docNavCtr);
    var showSubNav = false;
    var scrollItems = [];

    // Only include h2 and h3
    $articleHeaders.each(function () {
        var $item = $(this);
        if (!$item.is('h2') && !$item.is('h3')) return;

        var text  = $item.text()
        var hash = $item.attr('id')
        
        var $docHeader = $('<a>',
            {
                class: $item.is('h3') ? 'sub_nav_item h3' : 'sub_nav_item',
                text: text,
                href: `#${hash}`
            }).appendTo($subNav);
        
        $docHeader.click(function (event) {
            var link = $(this).attr('href').substr(1);
            if (link === undefined) {
                return;
            }

            var anchor = anchors[link];
            
            scrollAnchorIntoView(link, anchor);
            event.preventDefault();
        });
        
        scrollItems.push($item[0]);
    });

    // Bind to scroll
    var lastId;
    var subNavItems = $('.sub__nav').find('.sub_nav_item');

    document.addEventListener('scroll', function (event) {
        if (event.target.className === 'app__main') {
            showSubNav = false;
            toggleActive($subNav, true);

            var SCROLL_THRESHOLD = 50;

            // Filter items above offsetTop
            var cur = scrollItems.filter(function(item) {
                var itemOffset = $(item).offset().top;
                if (itemOffset < SCROLL_THRESHOLD) return true;
            });

            // Get the id of the current element
            var id = cur && cur.length ? cur[cur.length - 1].id : "";

            if (lastId !== id) {
                subNavItems.each(function () {
                    toggleActive($(this), $(this).attr('href').substr(1) !== id);
                });
                lastId = id;
            }
        }
    }, true);

    $outlineBtn.click(function () {
        toggleActive($subNav, showSubNav);
        showSubNav = !showSubNav;
    });
}
