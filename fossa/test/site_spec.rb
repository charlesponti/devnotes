require_relative './spec_helper'

describe Fossa::Site do

  before :each do
    @site = Fossa::Site.new(title: 'FooBar')
  end
  
  describe '#title' do
    it 'should have the correct title' do
      expect(@site.title).to eq('FooBar')
    end
  end

  describe 'name' do
    
  end

end