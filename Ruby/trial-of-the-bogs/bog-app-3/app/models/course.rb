class Course < ApplicationRecord
  has_many :students, through: :enrollments
  has_many :enrollments, dependent: :destroy
end
