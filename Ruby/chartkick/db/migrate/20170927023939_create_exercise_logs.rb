class CreateExerciseLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :exercise_logs do |t|
      t.integer :duration
      t.string :type

      t.timestamps
    end
  end
end
