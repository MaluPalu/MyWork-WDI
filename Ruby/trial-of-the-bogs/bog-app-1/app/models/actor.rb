class Actor < ApplicationRecord
  has_many :imdbs, dependent: :destroy
  has_many :movies, through: :imdbs

end
