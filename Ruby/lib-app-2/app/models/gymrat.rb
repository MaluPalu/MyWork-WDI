class Gymrat < ApplicationRecord
  has_secure_password
  has_many :gym_gymrats, dependent: :destroy
  has_many :gyms, through: :gym_gymrats

  def self.confirm(params)
    @gymrat = Gymrat.find_by({email: params[:email]})
    @gymrat ? @gymrat.authenticate(params[:password]) : false
  end
end
