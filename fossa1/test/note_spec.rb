require_relative './spec_helper'

describe Fossa::Note do
  
  before :each do
    @note = Fossa::Note.new 'test_category', 'test_note.md'
  end
  
  describe '#filename' do
    it 'should have the correct name' do
      expect(@note.filename).to eq('test_note.md')
    end
  end
  describe '#name' do
    it 'should have the correct name' do
      expect(@note.name).to eq('Test Note')
    end
  end

end