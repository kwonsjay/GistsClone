GistProject1::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resources :gists, :only => [:index, :create, :destroy, :update] do
    resource :favorite, :only => [:create, :destroy]
    resources :gistFiles
  end
  resources :favorites, :only => [:index]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "Root#root"
end
