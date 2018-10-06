class CreateEnrollments < ActiveRecord::Migration[5.1]
  def change
    create_table :enrollments do |t|

      t.timestamps

      t.belongs_to :student
      t.belongs_to :course
    end
  end
end
