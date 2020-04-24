class Api::BucketListItemsController < ApplicationController

    def create
        @bucket_list_item = BucketListItem.new(bucket_list_item_params)
        if @bucket_list_item.save
            render :show
        else  
            render json: @bucket_list_item.errors.full_messages, status: 422
        end
    end

    def index
        @bucket_list_items = BucketListItem.all 
        render :index
    end

    def update
        @bucket_list_item = BucketListItem.find(params[:id])
        if @bucket_list_item.update
            render :show
        else  
            render json: @bucket_list_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @bucket_list_item = BucketListItem.find(params[:id])
        @bucket_list_item.delete
    end

    def bucket_list_item_params
        params.require(:bucket_list_item).permit(
            :category, :name, :price, :description,
            :url, :completed, :date_completed
        )
    end
end
