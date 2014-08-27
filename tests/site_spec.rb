require_relative './spec_helper'

describe Sinatryll::Site do

  before :each do
    @site = Sinatryll::Site.new(categories: 'tests')
  end

  describe '#categories' do
    it 'should have the correct categories' do
      expect(@site.categories).to eq(['test_dir'])
    end
  end

end