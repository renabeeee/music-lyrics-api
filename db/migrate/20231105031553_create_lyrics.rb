class CreateLyrics < ActiveRecord::Migration[7.1]
  def change
    create_table :lyrics do |t|
      t.string :title
      t.string :artist
      t.string :bpm
      t.string :duration

      t.timestamps
    end
  end
end
