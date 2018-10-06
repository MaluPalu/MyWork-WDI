class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :veterinarian
      t.string :time
      t.string :reason

      t.timestamps
    end
    add_reference :pets, foreign_key: true
  end
end
