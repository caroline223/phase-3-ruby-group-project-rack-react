class CreateBookRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :book_requests do |t|
      t.string :title
      t.string :author_name
      t.string :genre
    end
  end
end
