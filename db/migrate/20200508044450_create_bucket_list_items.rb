class CreateBucketListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :bucket_list_items do |t|
      t.string :category
      t.string :name
      t.string :url
      t.boolean :completed

      t.timestamps
    end
  end
end
