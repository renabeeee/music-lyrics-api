class LyricsController < ApplicationController

  before_action :authenticate_admin, except: [:index, :show]

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

  def index
    @lyric = Lyric.all
    render :index
  end

  def create
    if current_user && current_user.admin

    @lyric = Lyric.create(
    title: params[:title],
    artist: params[:artist],
    bpm: params[:bpm],
    duration: params[:duration],    image_url: params[:image_url]
    )

    if @lyric.save #happy path
    render :show
  else #sad path
    render json: { errors: @lyric.errors.full_messages}, status: :unprocessable_entity
    end
  else
    render json: { message: "Please login." }, status: :unauthorized
  end
end

  def search_id
    @lyric = Lyric.find_by(id: params["id"])

    render template: "lyrics/show"
  end

  def update
    @lyric = Lyric.find_by(id: params["id"])

    @lyric.update(
      title: params["title"] || @lyric.title,
      artist: params["artist"] || @lyric.artist,
      bpm: params["bpm"] || @lyric.bpm,
      duration: params["duration"] || @lyric.duration,
      image_url: params["image_url"]
    )
    render :show
  end

  def destroy
    @lyric = Lyric.find_by(id: params["id"])
    @lyric.destroy

    render json: {message: "lyric gone!"}
  end
end
