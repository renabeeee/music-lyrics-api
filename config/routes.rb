Rails.application.routes.draw do
  get "/one_lyric", controller: "lyrics", action: "one_song"
  get "/second_lyric", controller: "lyrics", action: "second_song"
  get "/all_lyrics", controller: "lyrics", action: "all_songs"
  get "/lyrics" => "lyrics#index"
  post "/new-lyrics" => "lyrics#create"
end
