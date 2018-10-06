class GymratsController < ApplicationController
  before_action :require_login, only: [:show]
  def index
    @gymrats = Gymrat.all
  end
  def new
    @gymrat = Gymrat.new
  end
  def create
    @gymrat = Gymrat.create(gymrat_params)
    login(@gymrat)
    redirect_to @gymrat
  end
  def show
    @gymrat = Gymrat.find_by_id(params[:id])
    render :show
  end
  private
  def gymrat_params
    params.require(:gymrat).permit(:first_name, :last_name, :email, :password)
  end
end
