class ExerciseNamesController < ApplicationController
  def index
    render json: ExerciseName.all
  end
end
