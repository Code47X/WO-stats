Rails.application.routes.draw do
  root to: 'home#index'

  get '*path', to: 'home#index', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end

  # API Routes
  post 'login' => 'user_token#create'
  get '/users/current' => 'users#current'
  post '/users/create' => 'users#create'
end
