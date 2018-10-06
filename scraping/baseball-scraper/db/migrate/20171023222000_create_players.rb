class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :NL
      t.string :AL

      t.timestamps
    end
  end
end
