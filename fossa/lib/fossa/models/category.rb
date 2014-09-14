require_relative "./note"

module Fossa
  class Category
    attr_accessor :posts, :path, :name, :sub_directories, :directory, :title, 
                  :id, :parent, :url

    def initialize(directory, parent=nil)
      @name = directory
      @parent = parent
      @path = create_path
      @title = @name.gsub("_", " ")
      @id = @name.gsub("_", "-")
      @url = create_url

      @sub_directories = SysManager.get_directories(@path).map do |subdir|
        self.class.new subdir, self
      end

      @posts = SysManager.get_files(@path).map do |file|
        Fossa::Note.new @name, file, self
      end

      Fossa::SITE.categories << self
    end

    def is_subdirectory
     !!@parent
    end

    def create_url
      if self.is_subdirectory
        "#{@parent.name}/#{@name}"
      else
        @name
      end
    end

    def create_path
      if self.is_subdirectory
        "#{Fossa::NOTES_DIR}/#{@parent.name}/#{@name}"
      else
        "#{Fossa::NOTES_DIR}/#{@name}"
      end
    end

    def has_subcategory(category)
      sub = @sub_directories.select do |s| 
        s.id.downcase === category.downcase.gsub("_", "-")
      end
      sub[0]
    end

    def get_post id
      posts = @posts.select { |p| p.id == id }
      posts[0]
    end

  end
end