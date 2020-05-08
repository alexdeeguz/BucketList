# == Schema Information
#
# Table name: bucket_list_items
#
#  id         :bigint           not null, primary key
#  category   :string
#  name       :string
#  url        :string
#  completed  :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class BucketListItem < ApplicationRecord
    validates :category, :name, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
