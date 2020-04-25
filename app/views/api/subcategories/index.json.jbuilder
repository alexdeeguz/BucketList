@subcategories.each do |subcategory|
    json.set! subcategory.id do
        json.extract! subcategory, :id, :name, :price, :url, :completed, :bucket_list_item_id
    end
end