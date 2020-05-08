class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :bucket_list_items, :user_id, :integer
  end
end
