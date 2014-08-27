task :tests do
 exec("rspec tests")
end

task :dev_serve do
  exec("rerun thin start")
end

task :serve do
  exec("thin start")
end

namespace :watch do
  task :styles do
    exec("sass --watch assets/styles:public/styles")
  end
end

namespace :build do
  task :styles do
    exec("sass assets/styles/main.scss public/styles/main.css")
  end
end