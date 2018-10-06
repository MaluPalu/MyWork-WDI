Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/albums" => "albums#index", as: 'albums'  # add me!
  get "/albums/new" => "albums#new", as: 'new_album'
  get "/albums/:id" => "albums#show", as: 'album'
  post "/albums" => "albums#create"

  get "/musicians" => "musicians#index", as: 'musicians'  # add me!
  get "/musicians/new" => "musicians#new", as: 'musician'
  get "/musicians/:id" => "musicians#show", as: 'album'
  post "/musicians" => "musicians#create"

end
