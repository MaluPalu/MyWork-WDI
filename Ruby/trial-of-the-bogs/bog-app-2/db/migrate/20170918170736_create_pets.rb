class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :species
      t.belongs_to :owner
      
      t.timestamps
    end
  end
end
