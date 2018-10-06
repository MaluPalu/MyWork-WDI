class CreateGymGymrats < ActiveRecord::Migration[5.1]
  def change
    create_table :gym_gymrats do |t|
      t.belongs_to :gymrat, foreign_key: true
      t.belongs_to :gym, foreign_key: true

      t.timestamps
    end
  end
end
