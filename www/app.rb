require 'sinatra/base'

dirname = File.dirname(__FILE__)
#load helpers

module RhokNsi

  class RhokNsiBase < Sinatra::Base

    #Settings
    #set :port, 3006
    set :root,  File.dirname(__FILE__)
    set :public_folder, Proc.new { File.join(root, "public") }
    set :views, Proc.new { File.join(root, "views") }

    configure :production do
    end

    configure :development do
    end
  end

  class RhokNsiApp < RhokNsiBase
    #helpers Sinatra::Helper

    # start the server if ruby file executed directly
    run! if app_file == $0
  end

end

#load routes
require dirname + '/routes.rb'
