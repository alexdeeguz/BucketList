# == Schema Information
#
# Table name: subcategories
#
#  id                  :bigint           not null, primary key
#  name                :string
#  price               :float
#  url                 :string
#  bucket_list_item_id :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  completed           :boolean
#
class Subcategory < ApplicationRecord
    belongs_to :bucket_list_item,
        foreign_key: :bucket_list_item_id,
        class_name: :BucketListItem
end
