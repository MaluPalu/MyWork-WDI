class PetsController < ApplicationController

  def index
    puts "in pets controller index"
    owner_id = params[:owner_id]
    @owner = Owner.find_by(id: owner_id)
  end

  def show
    pet_id = params[:id]
    @pet = Pet.find_by(id: pet_id)
  end

  def new
    owner_id = params[:owner_id]
    @owner = Owner.find_by(id: owner_id)
    @pet = Pet.new
  end

  def create
    pet = Pet.create(pet_params)
    owner_id = params[:owner_id]
    owner = Owner.find_by(id: owner_id)
    owner.pets << pet
    redirect_to owner_pets_path
  end

  # TODO: set up *create* method with database interactions for create
  # TODO: handle save errors and communicate issues to user

  private
  def pet_params
    params.require(:pet).permit(:name, :breed, :date_of_birth)
  end

end
