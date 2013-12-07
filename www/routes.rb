require 'haml'
require 'json'

module RhokNsi
  class RhokNsiApp

    get "/" do
      haml :"index"
    end

    get "/about" do
      haml :"about"
    end
    
    get '/j' do
      File.read(File.dirname(__FILE__) + '/views/j.html')
    end
  end
end
