class CreateConferences < ActiveRecord::Migration[5.1]
  def change
    create_table :conferences do |t|
      t.string :title
      t.string :location

      t.timestamps
    end
  end
end
