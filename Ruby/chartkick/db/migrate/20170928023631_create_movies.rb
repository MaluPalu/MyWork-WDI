class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year_released
      t.integer :runtime
      t.string :plot

      t.timestamps
    end
  end
end
