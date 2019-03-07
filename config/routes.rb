Rails.application.routes.draw do
  root to: 'home#index'

  post 'login' => 'user_token#create'

  get '/users/current' => 'users#current'
  post '/users/create' => 'users#create'

  get '*path', to: 'home#react_app', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
