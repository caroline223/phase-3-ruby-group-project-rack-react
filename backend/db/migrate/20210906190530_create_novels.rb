class CreateNovels < ActiveRecord::Migration[5.2]
  def change
    create_table :novels do |t|
      t.string :image_url
      t.string :title
      t.string :author_name
      t.string :genre
      t.string :publishing_date
      t.integer :rating 
    end
  
  end
end
