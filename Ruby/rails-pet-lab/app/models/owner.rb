class Owner < ActiveRecord::Base
  has_many :pets

  has_many :appointments, through: :pets

  # validate :first_name, presence :true, uniqueness :true, length: {minimum: 6}

  before_save :normalize_phone_number

  # removes leading 1 and the characters (, ), -, .
  def normalize_phone_number
    # stretch
  end

end
