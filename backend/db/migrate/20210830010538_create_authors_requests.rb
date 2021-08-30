class CreateAuthorsRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :authorsrequests do |t|
      t.string :first_name
      t.string :last_name
      t.string :birth_city
      t.string :birth_state
      t.date :birth_date
      t.string :college
      t.string :degree
      t.string :image_url
      t.integer :author_request_id
    end
  end
end
