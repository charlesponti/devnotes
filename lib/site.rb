require_relative "./category"

module Sinatryll
  class Site
    attr_accessor :categories, :title, :notes

    def initialize(options)
      @notes = []
      @title = options[:title] || 'Sinatryll'
      @categories = SysManager.get_directories(Sinatryll::App.notes_directory).map do |category|
        Sinatryll::Category.new self, category
      end
    end

    def get_category(category)
      @categories.select { |c| c.name == category }
    end
    
  end
end