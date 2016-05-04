class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :author
      t.text :review
      t.integer :rating
      t.belongs_to :user, index: true

      t.timestamps null: false
    end
  end
end
