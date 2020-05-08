@bucket_list_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :category, :name, :url, :completed, :user_id
    end
end