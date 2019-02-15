function addSwatchClickHandlers() {
  $('.themeTabs .theme').click(function () {
    var idx = this.dataset.idx

    // Change tabs
    var tabs = $(this).parent()
    tabs.find('.active').removeClass('active')
    $(this).addClass('active')

    // Change colors in table
    var table  = $(this).parent().parent()
    table.find('.colorValue').each(function() {
      var values = JSON.parse(this.dataset.values)
      var hex = values[idx]
      $(this).find('.block').css('background', hex)
      $(this).find('.hexCode').text(hex)
    })
  })
}