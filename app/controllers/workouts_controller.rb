class WorkoutsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: current_user.workouts
  end

  def create
    workout = Workout.new(workout_params)
    workout.user = current_user

    if (workout.save)
      render json: workout
    else
      render json: { status: 500, errors: workout.errors}.to_json
    end
  end

  def update
    workout = current_user.workouts.find(params[:id])

    if (workout.update(workout_params))
      render json: workout
    else
      render json: { status: 500, errors: workout.errors}.to_json
    end
  end

  def destroy
    workout = current_user.workouts.find(params[:id])
    workout.destroy
    render json: { status: 200, msg: "deleted"}
  end

  private

    def workout_params
      params.require(:workout).permit(
        :id,
        exercises_attributes: [:id, :exercise_name, :weight, :reps, :_destroy]
      )
    end 
end
