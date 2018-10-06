class RenameColumnTypeInExerciseLogToExerciseType < ActiveRecord::Migration[5.1]
  def change
    rename_column :exercise_logs, :type, :exercise_type
  end
end
