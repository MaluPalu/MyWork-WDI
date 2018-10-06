class CreateTurkeys < ActiveRecord::Migration[5.1]
  def change
    create_table :turkeys do |t|
      t.string :color
      t.string :name
      t.boolean :heritage

      t.timestamps
    end
  end
end
