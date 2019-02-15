function createSwatchTables() {
  $('.swatchTable').each(function (index) {
    const table = this
    const colorsData = table.dataset.colors
    const colorKeys = colorsData.split(',')

    const themes = ["Mac OS", "Windows", "IntelliJ", "Darcula"]
    let output = `<div class="swatchTable">`

    output += `<div class="table-line themeTabs">`
    themes.map((theme, idx) => {
      let classNames = "theme"
      if (idx === 0) classNames += " active"
      output += `<span class="${classNames}" data-idx="${idx}">${theme}</span>`
    })
    output += "</div>"

    output += `<table class="swatches">`
    output += "<colgroup>"
    output += `<col width="35%">`
    output += `<col width="65%">`
    output += "</colgroup>"
    output += "<tbody>"

    colorKeys.map(key => {
      const values = COLORS[key]
      if (!values) {
        console.error(`Can't find color values for: '${key}'`)
        return
      }
      const defaultColor = values[0]
      output += `<tr class="table-line">`
      output += `<td>${key}</td>`
      output += `<td class="colorValue" data-values='${values.map(v => { return `${v}` }).join('|') }'>`
      output += `<span class="block" style="background: ${defaultColor}"></span>`
      output += `<span class="hexCode">${defaultColor}</span>`
      output += "</td>"
      output += "</tr>"
    })

    output += "</tbody>"
    output += "</table>"

    output += "</div>"

    $(table).append($(output))
    attachSwatchClickHandlers();
  })
}

function attachSwatchClickHandlers(tab) {
  $('.themeTabs .theme').click(function () {
    const idx = this.dataset.idx
    
    // Change tabs
    const tabs = $(this).parent()
    tabs.find('.active').removeClass('active')
    $(this).addClass('active')

    // Change colors in table
    const table  = $(this).parent().parent()
    table.find('.colorValue').each(function() {
      const values = this.dataset.values.split('|')
      const hex = values[idx]
      $(this).find('.block').css('background', hex)
      $(this).find('.hexCode').text(hex)
    })
  })
}

const COLORS = {
  "Tooltip.errorBackground" : [
    "#F5E6E7", 
    "#F5E6E7", 
    "#F5E6E7",
    "#593D41"
  ],
  "Tooltip.errorBorder": [
    "#E0A8A9",
    "#E0A8A9",
    "#E0A8A9",
    "#73454B"
  ],
  "Input.errorFocusBorder": [
    "rgba(245, 59, 59, 0.5)",
    "#F57D7D",
    "#E53E4D",
    "#8B3C3C"
  ],
  "Input.errorFocusBorderInactive": [
    "rgba(247, 188, 188, 0.5)",
    "#EECACA",
    "#EBBCBC",
    "#725252"
  ],
  "Text.errorForeground": [
    "#FF0000",
    "#FF0000",
    "#FF0000",
    "#FF5261"
  ],
  "Tooltip.warningBackground" : [
    "#F5F0E6", 
    "#F5F0E6", 
    "#F5F0E6",
    "#594E32"
  ],
  "Tooltip.warningBorder": [
    "#E0CEA8",
    "#E0CEA8",
    "#E0CEA8",
    "#78550B"
  ],
  "Input.warningFocusBorder": [
    "rgba(238, 178, 62, 0.5)",
    "#E1A336",
    "#E1A336",
    "#AD7A0F"
  ],
  "Input.warningFocusBorderInactive": [
    "rgba(255, 220, 146, 0.5)",
    "#EAD2A1",
    "#EAD2A1",
    "#6F531F"
  ],
  "Text.warningForeground": [
    "#E77D00",
    "#E77D00",
    "#E77D00",
    "#DC9B2F"
  ]
}