class CreateTalks < ActiveRecord::Migration[5.1]
  def change
    create_table :talks do |t|
      t.string :title
      t.string :speaker_name
      t.datetime :start_time
      t.datetime :end_time
      t.belongs_to :conferences, foreign_key: true

      t.timestamps
    end
  end
end
