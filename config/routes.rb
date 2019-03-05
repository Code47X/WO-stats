Rails.application.routes.draw do
  get '/users/current' => 'users#current'
  post '/users/create' => 'users#create'
  
  post 'user_token' => 'user_token#create'
end
