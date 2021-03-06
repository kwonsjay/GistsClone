class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id
  validates :title, :user_id, :presence => true

  belongs_to :user
  has_one :favorite
  has_many :gist_files, :inverse_of => :gist

end
