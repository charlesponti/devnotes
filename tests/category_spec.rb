require_relative './spec_helper'

describe Sinatryll::Category do 

  before :each do
    @category = Sinatryll::Category.new('tests/test_dir')
  end

  describe '#get_files' do
    it 'should return the correct files' do
      expect(@category.posts).to eq(['test_file.md'])
    end
  end
  
end