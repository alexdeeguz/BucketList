class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render 'api/users/show'
        else 
            render json: ["Invalid username or password"], status: 422
        end
    end

    def destroy
        logout
        if !logged_in?
            render json: {}
        else  
            render json: ["Unable to logout"], status: 404
        end
    end

end