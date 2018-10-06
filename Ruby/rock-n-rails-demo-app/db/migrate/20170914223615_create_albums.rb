class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.integer :year
      t.string :cover_art
      t.integer :song_count

      t.timestamps
    end
  end
end
