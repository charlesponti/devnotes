require "sinatra"
require "rdiscount"
require './lib/helpers/SysManager'
require "./lib/site"
require "./lib/category"
require "pry"

module Sinatryll
  class App < Sinatra::Application
    class << self

      def root
        File.dirname(__FILE__)
      end
      
      def notes_directory
        'files'
      end
      
    end

    set :static, true
    set :views, './views'
    set :public_folder, './public'

    @@site = Sinatryll::Site.new title: 'Dev Notes'

    get '/notes/:category' do
      @category = get_category(params[:category])
      if (@category)
        erb :'note/index', locals: { site: @@site, category: @category }, layout: true
      else
        root_path
      end
    end

    get "/notes/:category/:post_id" do
      @category = get_category(params[:category])
      @post = @category.get_post(params[:post_id])
      erb :'note/show', locals: { site: @@site, post: @post }, layout: true
    end

    get '/:file' do 
      @path = "views/static/#{params[:file]}.md"
      if File.exists? @path
        @name = File.basename(@path, ".*" )
        @file = RDiscount.new(File.read(@path), :smart, :filter_html).to_html
        erb :static, locals: { 
          site: @@site, 
          file: @file,
          name: @name
        }, layout: true
      else
        redirect to('/')
      end
    end

    get '/*' do
      root_path
    end

    def root_path
      erb :index, locals: { site: @@site }
    end

    def get_category(category)
      @@site.get_category(category)[0]
    end

  end
end