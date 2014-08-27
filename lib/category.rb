require_relative "./note"

module Sinatryll
  class Category
    attr_accessor :posts, :path, :name, :sub_directories

    def initialize(site, directory, parent='')
      @name = directory
      @parent = parent
      @path = create_path(parent)
      @sub_directories = SysManager.get_directories(@path).map do |subdir|
        self.class.new site, subdir, directory
      end
      @posts = SysManager.get_files(@path).map do |file|
        Sinatryll::Note.new site, @name, file, parent
      end
    end

    def is_subdirectory
      return !@parent.empty?
    end

    def create_path parent
      if !self.is_subdirectory
        "#{Sinatryll::App.notes_directory}/#{@name}"
      else
        "#{Sinatryll::App.notes_directory}/#{parent}/#{@name}"
      end
    end

    def get_post id
      posts = @posts.select { |p| p.id == id }
      posts[0]
    end

  end
end