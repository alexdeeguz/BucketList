class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @users = User.all
        render :index
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else  
            render json: "", status: 422
        end
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
