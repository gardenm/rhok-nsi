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
  end
end
