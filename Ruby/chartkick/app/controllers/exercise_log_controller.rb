class ExerciseLogController < ApplicationController
  def index
    @exercise_logs = ExerciseLog.all
  end

  def new
    @exercise_log = ExerciseLog.new
  end

  def create
    @exercise_log = ExerciseLog.create(exercise_log_params)
    redirect_to '/'
  end




  private

  def exercise_log_params
    params.require(:exercise_log).permit(:duration, :exercise_type, :date_of)
  end
end
