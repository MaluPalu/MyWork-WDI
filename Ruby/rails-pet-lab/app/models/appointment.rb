class Appointment < ApplicationRecord
  belongs_to :pets, dependent: :destroy
end
