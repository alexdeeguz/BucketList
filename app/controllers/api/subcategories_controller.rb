class Api::SubcategoriesController < ApplicationController

    def create
        @subcategory = Subcategory.new(subcategory_params)
        if @subcategory.save
            render :show
        else  
            render json: @subcategory.errors.full_messages, status: 422
        end
    end

    def index
        @subcategories = Subcategory.all 
        render :index
    end

    def update
        @subcategory = Subcategory.find(params[:id])
        if @subcategory.update
            render :show
        else  
            render json: @subcategory.errors.full_messages, status: 422
        end
    end

    def destroy
        @subcategory = Subcategory.find(params[:id])
        @subcategory.delete
    end

    def subcategory_params
        params.require(:bucket_list_item).permit(
            :name, :price, :url, :completed, :bucket_list_item_id
        )
    end
end