# == Schema Information
#
# Table name: bucket_list_items
#
#  id             :bigint           not null, primary key
#  category       :string
#  name           :string
#  price          :float
#  description    :string
#  url            :string
#  completed      :boolean          default(FALSE)
#  date_completed :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class BucketListItem < ApplicationRecord
    has_many :subcategories,
        foreign_key: :bucket_list_item_id,
        class_name: :Subcategory
end
