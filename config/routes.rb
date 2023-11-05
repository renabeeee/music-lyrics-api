Rails.application.routes.draw do
  get "/one_lyric", controller: "lyrics", action: "one_song"
end
