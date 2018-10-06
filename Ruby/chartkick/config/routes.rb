Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'exercise_log#index'

  get '/exercise_log/new', to: 'exercise_log#new', as: 'new_exercises'
  post '/exercise_logs', to: 'exercise_log#create'

  get '/movies/autocomplete', to: 'movies#autocomplete', as: 'movie_autcomplete'
  get '/movies', to: 'movies#index', as: 'movies'
  get '/movies/new', to: 'movies#new', as: 'new_movies'
  post '/movies', to: 'movies#create'

end
