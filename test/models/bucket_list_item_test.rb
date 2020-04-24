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
require 'test_helper'

class BucketListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
