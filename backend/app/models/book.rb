class Book < ActiveRecord::Base 
    belongs_to :author


      def self.all_with_authors
      
        self.all.map do |book|
            { 
            id: book.id,
            title: book.title,
            genre: book.genre,
            author_name: book.author.full_name,
            publishing_date: book.publishing_date,
            rating: book.rating,
            image_url: book.image_url,
            author_id: book.author_id, 
            }
        end

    end


    def author
      Author.select do |author|
        author.id == self.author_id
      end
    end

  
    





   
   end

   

   
   

