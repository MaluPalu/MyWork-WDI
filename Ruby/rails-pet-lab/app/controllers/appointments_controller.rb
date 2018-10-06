class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
  end
  def new
    @appointment = Appointment.new
    pet_id = params[:pet_id]
    @pet = Pet.find_by(id: pet_id)
  end
  def create
    appointment = Appointment.create(appointment_params)
    pet_id = params[:pet_id]
    pet = Pet.find_by(id: pet_id)
    pet.appointments << appointment
    redirect_to pet_appointment_path
  end
end
