class SessionsController < ApplicationController
  def new
    @gymrat = Gymrat.new
  end
  def create
    gymrat_params = params.require(:gymrat).permit(:email, :password)
    @gymrat = Gymrat.confirm(gymrat_params)
    if @gymrat
      login(@gymrat)
      flash[:notice] = "Successfully logged in."
      redirect_to @gymrat
    else
      flash[:error] = "Incorrect email or password."
      redirect_to login_path
    end
  end
  def destroy
     logout
     flash[:notice] = "Successfully logged out."
     redirect_to root_path
   end
end
