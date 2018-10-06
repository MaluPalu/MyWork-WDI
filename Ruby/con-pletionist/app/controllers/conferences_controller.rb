class ConferencesController < ApplicationController
  before_action :set_conference, only: [:show, :update, :destroy]

  # GET /conferences
  # GET /conferences.json
  def index
    @conferences = Conference.all
  end

  # GET /conferences/1
  # GET /conferences/1.json
  def show

  end

  # POST /conferences
  # POST /conferences.json
  def create
    @conference = Conference.new(conference_params)

    if @conference.save
      render :show, status: :created, location: @conference
    else
      render json: @conference.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /conferences/1
  # PATCH/PUT /conferences/1.json
  def update
    if @conference.update(conference_params)
      render :show, status: :ok, location: @conference
    else
      render json: @conference.errors, status: :unprocessable_entity
    end
  end

  # DELETE /conferences/1
  # DELETE /conferences/1.json
  def destroy
    @conference.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_conference
      @conference = Conference.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def conference_params
      params.require(:conference).permit(:title, :location)
    end
end
