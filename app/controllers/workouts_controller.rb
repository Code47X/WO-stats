class WorkoutsController < ApplicationController
  before_action :authenticate_user

  def index
    render json: current_user.workouts
  end
end
