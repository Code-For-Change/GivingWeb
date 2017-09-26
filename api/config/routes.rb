Rails.application.routes.draw do
  # get 'users' => 'users#index'
  # get 'charities' => 'charities#index'

  namespace :v1 do
    resources :users, :charities, :donations
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end