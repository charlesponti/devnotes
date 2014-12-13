# Module for system helper functions
module SysManager
  class << self
    def get_directories(directory)
      Dir.entries(directory).select do |entry|
        not_dots = !(entry == '.' || entry == '..')
        File.directory?(File.join(directory, entry)) && not_dots
      end
    end

    def get_files(directory)
      Dir.entries(directory).select do |entry|
        File.file? File.join(directory, entry)
      end
    end
  end
end
