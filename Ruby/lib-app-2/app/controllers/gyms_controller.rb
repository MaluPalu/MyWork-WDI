class GymsController < ApplicationController
  before_action :require_login, only: [:show]
  def index
    @gyms = Gym.all
  end
  def new
    @gym = Gym.new
  end
  def create
    @gym = Gym.create(gym_params)
    redirect_to gyms_path
  end
  def show
    @gym = Gym.find_by_id(params[:id])
    render :show
  end

  private
  def require_login
    redirect_to login_path and return if not session[:gymrat_id]
  end

  def gym_params
    params.require(:gym).permit(:name, :floor_count, :floor_area)
  end
end
