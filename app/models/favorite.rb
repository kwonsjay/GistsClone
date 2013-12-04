class Favorite < ActiveRecord::Base
  attr_accessible :gist_id, :user_id
  validates :gist_id, :user_id, :presence => true
  validates_uniqueness_of :user_id, :scope => :gist_id

  belongs_to :gist
  belongs_to :user

end
