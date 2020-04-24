@bucket_list_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :category, :name, :price, :description, :url, :completed, :date_completed
    end
end