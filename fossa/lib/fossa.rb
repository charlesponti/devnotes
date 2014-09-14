# rubygems
require 'rubygems'

# stdlib
require 'fileutils'
require 'time'
require 'English'
require 'pathname'
require 'logger'

# 3rd party gems
require "sinatra"
require "yaml"
require "rdiscount"

# Fossa files
require_relative "./fossa/helpers/SysManager"
require_relative "./fossa/models/site"
require_relative "./fossa/app"
require_relative "./fossa/models/category"
require_relative "./fossa/version"

module Fossa
  ROOT = File.dirname(__FILE__)

  CONFIG = YAML.load(File.read("#{Dir.pwd}/.notedown.yml"))

  NOTES_DIR = Fossa::CONFIG["notes"]

  STATIC_DIR = Fossa::CONFIG["static_dir"]
  
  SITE = Fossa::Site.new title: Fossa::CONFIG["title"]

  SysManager.get_directories(Fossa::NOTES_DIR).map do |category|
    Fossa::Category.new category, "#{category}"
  end
end