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
require 'test_helper'

class SubcategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
