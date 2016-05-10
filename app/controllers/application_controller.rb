class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :user_logged_in?

  def user_logged_in?
    redirect_to root_path unless current_user
  end
end
