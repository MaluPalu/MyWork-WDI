class TurkeysController < ApplicationController
  before_action :set_turkey, only: [:show, :edit, :update, :destroy]

  # GET /turkeys
  # GET /turkeys.json
  def index
    @turkeys = Turkey.all
  end

  # GET /turkeys/1
  # GET /turkeys/1.json
  def show
  end

  # GET /turkeys/new
  def new
    @turkey = Turkey.new
  end

  # GET /turkeys/1/edit
  def edit
  end

  # POST /turkeys
  # POST /turkeys.json
  def create
    @turkey = Turkey.new(turkey_params)

    respond_to do |format|
      if @turkey.save
        format.html { redirect_to @turkey, notice: 'Turkey was successfully created.' }
        format.json { render :show, status: :created, location: @turkey }
      else
        format.html { render :new }
        format.json { render json: @turkey.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /turkeys/1
  # PATCH/PUT /turkeys/1.json
  def update
    respond_to do |format|
      if @turkey.update(turkey_params)
        format.html { redirect_to @turkey, notice: 'Turkey was successfully updated.' }
        format.json { render :show, status: :ok, location: @turkey }
      else
        format.html { render :edit }
        format.json { render json: @turkey.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /turkeys/1
  # DELETE /turkeys/1.json
  def destroy
    @turkey.destroy
    respond_to do |format|
      format.html { redirect_to turkeys_url, notice: 'Turkey was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_turkey
      @turkey = Turkey.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def turkey_params
      params.require(:turkey).permit(:color, :name, :heritage)
    end
end
