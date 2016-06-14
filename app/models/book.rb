class Book < ActiveRecord::Base
  belongs_to :user
  validates :rating, inclusion: {in: [1,2,3,4,5]}
  validates :author, :review, :rating, :title, presence: true
  validates :title, uniqueness: true
  before_create :add_image

  private

  def add_image
    self.image = GoogleBooks.search(title).first.image_link || nil
  end
end
