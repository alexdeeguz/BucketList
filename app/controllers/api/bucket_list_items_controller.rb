class Api::BucketListItemsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        if !current_user
            @bucket_list_items = [] 
        else 
            @bucket_list_items = current_user.bucket_list_items
        end
        render :index
    end

    def create
        @bucket_list_item = BucketListItem.new(bucket_list_item_params)
        if @bucket_list_item.save
            render :show
        else 
            render json: @bucket_list_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @bucket_list_item = BucketListItem.find(params[:id])
        @bucket_list_item.delete
    end

    def update
        @bucket_list_item = BucketListItem.find(params[:id])
        if @bucket_list_item.update(bucket_list_item_params)
            render :show
        else 
            render json: @bucket_list_item.errors.full_messages, status: 422
        end
    end

    def bucket_list_item_params
        params.require(:bucket_list_item).permit(:category, :name, :url, :completed, :user_id)
    end
end
