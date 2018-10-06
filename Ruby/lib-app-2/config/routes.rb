Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'gymrats#index'

  get '/gymrats/new', to: 'gymrats#new', as: 'new_gymrats'
  post '/gymrats/', to: 'gymrats#create'
  get '/gymrats/:id', to: 'gymrats#show', as: "gymrat"

  get '/login', to: 'sessions#new'
  get '/logout', to: 'sessions#destroy'
  post '/sessions', to: 'sessions#create'

  get '/gyms', to: 'gyms#index'
  get '/gyms/new', to: 'gyms#new', as: 'new_gym'
  post '/gyms/', to: 'gyms#create'
  get '/gyms/:id', to: 'gyms#show', as: "gym"

  get '/gymrats/:gymrat_id/gyms', to: 'gym_gymrats#index', as: 'gymrat_gyms'
  post '/gyms/:gym_id/gymrats', to: 'gym_gymrats#create', as: 'gym_gymrats'
end
