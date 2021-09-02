class CreateAuthorRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :author_requests do |t|
      t.string :full_name
      t.string :home_town
      t.date :birth_date
      t.string :genre
    end
  end
end
