class CreateGyms < ActiveRecord::Migration[5.1]
  def change
    create_table :gyms do |t|
      t.string :name
      t.integer :floor_count
      t.integer :floor_area

      t.timestamps
    end
  end
end
