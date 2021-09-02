require 'faker'

30.times do
    Author.create(first_name: Faker::Name.first_name, 
                 last_name: Faker::Name.last_name,
                 birth_city: Faker::Address.city,
                 birth_state: Faker::Address.state,
                 birth_date: Faker::Date.backward(days: 30000),
                 college: Faker::Educator.university,
                 degree: Faker::Educator.degree,
                )
end

300.times do
    #sample pulls a random element out of an array 
    id = Author.all.sample.id
    Book.create(title: Faker::Book.title, 
                genre: Faker::Book.genre, 
                publishing_date: Faker::Date.backward(days: 15000), 
                author_id: id, 
                rating: Faker::Number.within(range: 1..10))
               
end

1.times do 
    AuthorRequest.create(
        full_name: Faker::Name.name,
        home_town: Faker::Address.city,
        genre: Faker::Book.genre,
        birth_date: Faker::Date.backward(days: 30000)
    )
end

1.times do 
    BookRequest.create(
        title: Faker::Book.title,
        author_name: Faker::Name.name,
        genre: Faker::Book.genre
    )
end

