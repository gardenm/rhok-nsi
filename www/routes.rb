require 'haml'
require 'json'

module RhokNsi
  class RhokNsiApp

    get "/" do
      haml :"index"
    end

    get "/world" do
      haml :"worldmap"
    end

    get "/makeData" do
      content_type :json
      json = File.read(File.dirname(__FILE__) + '/public/data/fullworld.json')
      JSON.parse(json)
    end
    
    get '/j' do
      File.read(File.dirname(__FILE__) + '/views/j.html')
    end
  end
end
