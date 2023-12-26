class AddAImageColumn < ActiveRecord::Migration[7.1]
  def change
    add_column :lyrics, :image_url, :string
  end
end
