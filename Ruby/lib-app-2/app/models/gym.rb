class Gym < ApplicationRecord
  has_many :gym_gymrats, dependent: :destroy
  has_many :gymrats, through: :gym_gymrats
end
