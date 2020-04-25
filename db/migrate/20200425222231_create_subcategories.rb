class CreateSubcategories < ActiveRecord::Migration[5.2]
  def change
    create_table :subcategories do |t|
      t.string :name
      t.float :price
      t.string :url
      t.integer :bucket_list_item_id

      t.timestamps
    end
  end
end
