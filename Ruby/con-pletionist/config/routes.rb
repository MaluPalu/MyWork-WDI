Rails.application.routes.draw do

  resources :conferences do
    resources :talks
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
