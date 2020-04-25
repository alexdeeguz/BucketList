class AddCompletedColumnToSubcategory < ActiveRecord::Migration[5.2]
  def change
    add_column :subcategories, :completed, :boolean
  end
end
