class UsersController < ApplicationController
  before_action :authenticate_user, only: [:current]

  def current
    render json: current_user
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: { status: 200, msg: 'User was created' }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
