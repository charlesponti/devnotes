require_relative './spec_helper'

describe Fossa::Category do 
  
  before :each do
    @category = Fossa::Category.new('test_category')
  end

  it 'should be added to Fossa::Site.categories' do
    expect(Fossa::SITE.categories.length).to eq(2)
  end

  describe '#posts' do
    it 'should return the correct files' do
      expect(@category.posts.length).to eq(1)
    end
    it 'should return instances of Fossa::Note' do
      expect(@category.posts[0].class).to eq(Fossa::Note)
    end
  end
  
  describe '#sub_categories' do
    it 'should return the correct number of sub_categories' do
      expect(@category.sub_categories.length).to eq(1)
    end
    it 'should return instances of Fossa::Category' do
      expect(@category.sub_categories[0].class).to eq(Fossa::Category)
    end
  end

end