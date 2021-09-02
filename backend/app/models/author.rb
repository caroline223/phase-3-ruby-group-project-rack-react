class Author < ActiveRecord::Base
    has_many :books

    def full_name
        self.first_name + " " + self.last_name
    end

    def home_town
        self.birth_city + ", " + self.birth_state
    end 

    def self.all_with_books
        self.all.map do |author|
            {
                author_name: author.full_name,
                birth_date: author.birth_date,
                home_town: author.home_town,
                college: author.college,
                degree: author.degree
            }
        end
    end
   
end