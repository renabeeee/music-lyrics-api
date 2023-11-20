Rails.application.routes.draw do
  get "/one-lyric", controller: "lyrics", action: "one_song"
  get "/second-lyric", controller: "lyrics", action: "second_song"
  get "/all-lyrics", controller: "lyrics", action: "all_songs"
  get "/lyrics" => "lyrics#index"
  get "/lyric-by-id", controller: "lyrics", action: "search_id"
  get "/lyrics/:id.json" => "lyrics#search_id", as: :search_lyric
  post "/new-lyrics" => "lyrics#create"
  patch "/lyrics/:id.json" => "lyrics#update", as: :update_lyric
  delete "/lyrics/:id.json" => "lyrics#destroy", as: :destroy_lyric
end
