class Movie < ApplicationRecord
  has_many :imdbs, dependent: :destroy
  has_many :actors, through: :imdbs

end
