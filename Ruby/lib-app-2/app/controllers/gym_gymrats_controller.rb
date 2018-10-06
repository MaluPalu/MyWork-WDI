class GymGymratsController < ApplicationController
  before_action :check_owner
  before_action :require_login, only: [:index, :create]
  def index
    @gymrat = Gymrat.find(params[:gymrat_id])
    @gyms = @gymrat.gyms
    render :index
  end
  def create
      @library = Library.find(params[:library_id])
      @library.users.push(current_user)
      redirect_to current_user
  end
  private
  def check_owner
    if session[:gymrat_id].to_s != params[:gymrat_id].to_s
      redirect_to gymrat_gyms_path(current_gymrat)
  end
end
