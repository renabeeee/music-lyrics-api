class LyricsController < ApplicationController
  def one_song
    lyric = Lyric.first
    render json: Lyric.first
  end

  def second_song
    lyric = Lyric.second
    render json: Lyric.second
  end

  def all_songs
    lyric = Lyric.all
    render json: Lyric.all
  end
end
