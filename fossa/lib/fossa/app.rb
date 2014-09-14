module Fossa
  class App < Sinatra::Application
    set :static, true
    set :views, "./fossa/lib/fossa/views"
    set :public_folder, "#{Dir.pwd}/public"

    get '/notes/:category' do
      @category = Fossa::SITE.get_category(params[:category])
      puts @category.title if @category.is_subdirectory
      if (@category)
        erb :'note/index', locals: { site: Fossa::SITE, category: @category }, layout: true
      else
        redirect to("/")
      end
    end

    get "/notes/:category/:post" do
      @category = Fossa::SITE.get_category(params[:category])
      sub_dir = @category.has_subcategory(params[:post])
      if sub_dir
        erb :'note/index', locals: { site: Fossa::SITE, category: sub_dir }, layout: true
      else
        @post = @category.get_post(params[:post])
        if @post
          erb :'note/show', locals: { site: Fossa::SITE, post: @post }, layout: true
        else
          redirect to("/")
        end
      end
    end

    get "/notes/:category/:subcategory/:post" do
      @category = Fossa::SITE.get_category(params[:category])
      subcategory = @category.has_subcategory(params[:subcategory])
      puts "cats"
      if subcategory
        @post = subcategory.get_post(params[:post])
        if @post
          erb :'note/show', locals: { site: Fossa::SITE, post: @post }, layout: true
        else
          redirect to("/")
        end
      else
        redirect to("/")
      end
    end

    get '/favicon.ico' do
      puts 'meow'
    end

    get '/:file' do
      path = "#{Fossa::STATIC_DIR}/#{params[:file]}.md"
      if File.exists? path
        @name = File.basename(path, ".*")
        @file = RDiscount.new(File.read(path), :smart, :filter_html).to_html
        erb :static, locals: { site: Fossa::SITE, file: @file, name: @name }, layout: true
      else
        redirect to("/")
      end
    end

    get '/' do
      root_path
    end

    def root_path
      erb :index, locals: { site: Fossa::SITE }
    end

  end
end