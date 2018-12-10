require 'json'

module Jekyll
  class SwatchTableBlock < Liquid::Block
    def render(context)
      text = super

      # Attempt to parse the JSON if any is passed in
      begin
        if( !text.nil? && !text.empty? )
          keys = JSON.parse(text)
        end

        if (!keys.nil? && keys.length > 0)
          begin 
            file = File.read('_data/colors.json')
            colors = JSON.parse(file)

            themes = ["Mac OS", "Windows", "IntelliJ", "Darcula"]
            output = "<div class=\"swatchTable\">"

            # Write the output HTML string
            output += "<div class=\"table-line themeTabs\">"
            themes.each_with_index do |theme, idx|
              classNames = "theme"
              classNames += " active" if idx == 0
              output += "<span class=\"#{classNames}\" data-idx=\"#{idx}\">#{theme}</span>"
            end
            output += "</div>"

            output += "<table class=\"swatches\">"
            output += "<colgroup>"
            output += '<col width="35%">'
            output += '<col width="65%">'
            output += "</colgroup>"
            output += "<tbody>"

            keys.each do |key|
              values = colors[key]
              if (values.nil?)
                puts "ERROR: Can't find color values for: '#{key}''"
              else
                defaultColor = values[0]
                output += "<tr class=\"table-line\">"
                output += "<td>#{key}</td>"
                output += "<td class=\"colorValue\" data-values='#{values.map { |v| "#{v}" }}'>"
                output += "<span class=\"block\" style=\"background: #{defaultColor}\"></span>"
                output += "<span class=\"hexCode\">#{defaultColor}</span>"
                output += "</td>"
                output += "</tr>"
              end
            end

            output += "</tbody>"
            output += "</table>"
    
            output += "</div>"
            return output
          rescue StandardError => e
             puts "ERROR: #{e}"
          end
        end
      rescue
        puts "ERROR: Parsing error with: '#{text}'"
      end
    end
  end
end

Liquid::Template.register_tag('swatchTable', Jekyll::SwatchTableBlock)