class CreateBucketListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :bucket_list_items do |t|
      t.string :category
      t.string :name
      t.float :price
      t.string :description
      t.string :url
      t.boolean :completed, default: false
      t.date :date_completed

      t.timestamps
    end
  end
end
