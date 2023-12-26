# json.extract! lyric, :id, :title, :artist, :bpm, :duration, :created_at, :updated_at
# json.url lyric_url(lyric, format: :json)

json.id lyric.id
json.title lyric.title
json.artist lyric.artist
json.bpm lyric.bpm
json.artist lyric.artist
json.duration lyric.duration
json.image_url lyric.image_url
json.created_at lyric.created_at
json.updated_at lyric.updated_at
