Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  get "cultureweb", to: "pages#cultureweb"
  get "stellar_venues", to: "pages#stellar_venues"
  get "lov+r", to: "pages#lov+r"
  get "contact", to: "pages#contact"

  resources :contacts, only: [:new, :create]
end
