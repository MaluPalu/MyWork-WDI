class Pet < ApplicationRecord
  belongs_to :owner, optional: true
end
