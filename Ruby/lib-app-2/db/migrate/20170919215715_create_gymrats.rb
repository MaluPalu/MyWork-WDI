class CreateGymrats < ActiveRecord::Migration[5.1]
  def change
    create_table :gymrats do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :password_digest

      t.timestamps
    end
  end
end
