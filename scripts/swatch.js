function createSwatchTables() {
    $('.swatchTable').each(function () {
        const table = this;
        const colorsData = table.dataset.colors;
        const colorKeys = colorsData.split(',');

        let themes = new Set();
        colorKeys.forEach(colorKey => {
            Object.keys(COLORS[colorKey]).forEach(theme => themes.add(theme));
        });
        let output = `<div class="swatchTable">`;

        output += `<div class="table-line themeTabs">`;
        let first = true;
        themes.forEach(theme => {
            let classNames = "theme";
            if (first) {
                classNames += " active";
                first = false
            }
            output += `<span class="${classNames}">${theme}</span>`
        });
        output += "</div>";

        output += `<table class="swatches">`;
        output += "<colgroup>";
        output += `<col style="width: 35%">`;
        output += `<col>`;
        output += "</colgroup>";
        output += "<tbody>";

        colorKeys.forEach(key => {
            const values = COLORS[key];
            if (!values) {
                console.error(`Can't find color values for: '${key}'`);
                return
            }
            const defaultColor = values["Mac OS"];
            output += `<tr class="table-line">`;
            output += `<td class="color-key">${key}</td>`;
            output += `<td class="colorValue" data-color-key="${key}">`;
            output += `<span class="block" style="background: ${defaultColor}"></span>`;
            output += `<span class="hex-code">${defaultColor}</span>`;
            output += "</td>";
            output += "</tr>"
        });

        output += "</tbody>";
        output += "</table>";

        output += "</div>";

        $(table).append($(output));
        attachSwatchClickHandlers();
    })
}

function attachSwatchClickHandlers() {
    $('.themeTabs .theme').click(function () {
        const theme = $(this).text();
        // Change tabs
        const tabs = $(this).parent();
        tabs.find('.active').removeClass('active');
        $(this).addClass('active');

        // Change colors in table
        const table = $(this).parent().parent();
        table.find('.colorValue').each(function () {
            const hex = COLORS[this.dataset.colorKey][theme];
            $(this).find('.block').css('background', hex);
            $(this).find('.hex-code').text(hex)
        })
    })
}