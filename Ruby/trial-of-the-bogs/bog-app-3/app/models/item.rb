class Item < ApplicationRecord
  belongs_to :owner, optional: true
end
