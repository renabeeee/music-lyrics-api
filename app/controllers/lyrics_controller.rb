class LyricsController < ApplicationController
  def one_song
    lyric = Lyric.first
    render json: Lyric.first
  end
end
