require 'haml'

module RhokNsi
  class RhokNsiApp

    get "/" do
      haml :"index"
    end
    
  end
end
