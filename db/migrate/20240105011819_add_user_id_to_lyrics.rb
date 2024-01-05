class AddUserIdToLyrics < ActiveRecord::Migration[7.1]
  def change
    add_column :lyrics, :user_id, :integer
  end
end
