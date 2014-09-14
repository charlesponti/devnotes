require_relative "./category"

module Fossa
  class Site
    attr_accessor :categories, :title, :notes

    def initialize(options)
      @notes = []
      @title = options[:title] || 'Fossa'
      @categories = SysManager.get_directories(Fossa::NOTES_DIR).map do |category|
        Fossa::Category.new self, category
      end
    end

    def get_category(category)
      cats = @categories.select do |c|
        c.name === category 
      end
      cats[0]
    end
    
  end
end