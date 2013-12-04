class GistFile < ActiveRecord::Base
  attr_accessible :name, :body, :gist_id
  validates :name, :body, :gist, :presence => true

  belongs_to :gist, :inverse_of => :gist_files

end
