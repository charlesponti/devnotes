require "rdiscount"
require "yaml"

module Fossa
  class Note
    attr_accessor :file, :path, :html, :name, :category, :id, :url, 
                  :front_matter, :parent

    @@id = 0

    def initialize(category, filename, parent=nil)
      @category = category
      @filename = filename
      @parent = parent
      @path = create_path
      @file = File.open(@path)      

      name = File.basename(@path, ".*" ).split("_").map { |w| w.capitalize }
      @name = name.join(" ")
      @id = name.join("_").downcase.gsub("_", "-")
      @url = create_url
      @body = File.read(@path).split("---settings")
      if @body.length > 1
        @front_matter = YAML.load(@body[1])
        @markdown = @body[2..-1].join("")
      else
        @markdown = @body.join("")
      end
      @html = RDiscount.new(@markdown, :smart, :filter_html).to_html
    end

    def create_path
      if @parent
        "#{Fossa::NOTES_DIR}/#{parent.url}/#{@filename}"
      else
        "#{Fossa::NOTES_DIR}/#{category}/#{@filename}"
      end
    end

    def create_url
      if @parent
        "/notes/#{@parent.url}/#{@id}"
      else
        "/notes/#{@category}/#{@id}"
      end
    end

  end
end