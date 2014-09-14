module Fossa
  class App < Sinatra::Application
    set :static, true
    set :views, "./fossa/lib/fossa/views"
    set :public_folder, "#{Dir.pwd}/public"

    get '/notes/:category' do
      @category = Fossa::SITE.get_category(params[:category])
      if (@category)
        erb :'note/index', locals: { site: Fossa::SITE, category: @category }, layout: true
      else
        root_path
      end
    end

    get "/notes/:category/:post_id" do
      @category = Fossa::SITE.get_category(params[:category])
      @post = @category.get_post(params[:post_id])
      erb :'note/show', locals: { site: Fossa::SITE, post: @post }, layout: true
    end

    get '/favicon.ico' do
      puts 'meow'
    end

    get '/:file' do
      path = "fossa/lib/fossa/views/static/#{params[:file]}.md"
      @name = File.basename(path, ".*")
      @file = RDiscount.new(File.read(path), :smart, :filter_html).to_html
      erb :static, locals: { site: Fossa::SITE, file: @file, name: @name }, layout: true
    end

    get '/' do
      root_path
    end

    def root_path
      erb :index, locals: { site: Fossa::SITE }
    end

  end
end