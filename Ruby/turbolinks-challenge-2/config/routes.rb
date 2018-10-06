Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: "welcome#index", as: "home"

  get '/goldenrod', to: "goldenrod#index", as: "gold"
  get '/lightcoral', to: "lightcoral#index", as: "coral"
  get '/lightseagreen', to: "lightseagreen#index", as: "seagreen"
end
