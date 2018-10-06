class AddDateOfToExerciseLog < ActiveRecord::Migration[5.1]
  def change
    add_column :exercise_logs, :date_of, :timestamp
  end
end
