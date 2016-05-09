class Book < ActiveRecord::Base
  belongs_to :user
  validates :rating, inclusion: {in: [1,2,3,4,5]}
  validates :author, :review, :rating, :title, presence: true
end
