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
require 'test_helper'

class BucketListItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
