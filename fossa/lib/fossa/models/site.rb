require_relative "./category"

module Fossa
  class Site
    attr_accessor :categories, :title, :notes, :categories

    def initialize(options)
      @notes = []
      @title = options[:title] || 'Fossa'
      @categories = []
    end

    def get_category(category)
      cats = @categories.select do |c|
        c.name.downcase === category.downcase
      end
      cats[0]
    end
    
  end
end