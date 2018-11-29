require 'json'

module Jekyll
  class SwatchTagBlock < Liquid::Block
    def render(context)
      text = super
      name = "color"
      colors = []

      # Attempt to parse the JSON if any is passed in
      begin
        if( !text.nil? && !text.empty? )
          jdata = JSON.parse(text)
          name = jdata["name"].strip
          colors = jdata["colors"]
        end
      rescue
      end

      # Write the output HTML string
      output =  "<td>#{name}</td>"

      colors.each do |color|
        output += "<td style=\"background: #{color["value"]}\">#{color["name"]}</td>"
      end

      # Render it on the page by returning it
      return output
    end
  end
end

Liquid::Template.register_tag('swatch', Jekyll::SwatchTagBlock)