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
      {cols: [
        {id:"",label:"Country",pattern:"",type:"string"},
        {id:"",label:"Contribution",pattern:"",type:"number"}
      ],
      rows: [{c:[{v:"Afghanistan",f:nil},{v:1010760518,f:"$1,010,760,518"}]}]}.to_json
    end
    
  end
end
