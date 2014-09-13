require "rdiscount"
require "yaml"

module Sinatryll
  class Note
    attr_accessor :file, :path, :html, :name, :category, :id, :url, :front_matter

    @@id = 0

    def initialize(site, category, filename, parent='')
      @category = category
      @filename = filename
      @path = create_path(parent)
      @file = File.open(@path)
      name = File.basename(@path, ".*" ).split("_").map { |w| w.capitalize }
      @name = name.join(" ")
      @id = "#{@@id += 1}-#{name.join("_")}"
      @url = "/notes/#{@category}/#{@id}"
      @body = File.read(@path).split("---settings")
      if @body.length > 1
        @front_matter = YAML.load(@body[1])
        @markdown = @body[2..-1].join("")
      else
        @markdown = @body.join("")
      end
      @html = RDiscount.new(@markdown, :smart, :filter_html).to_html
      site.notes << self
    end

    def create_path parent
      if parent.empty?
        "#{Sinatryll::App.notes_directory}/#{category}/#{@filename}"
      else
        "#{Sinatryll::App.notes_directory}/#{parent}/#{category}/#{@filename}"
      end
    end

  end
end