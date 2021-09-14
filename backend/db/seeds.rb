require 'faker'

8.times do
    Author.create(first_name: Faker::Name.first_name, 
                 last_name: Faker::Name.last_name,
                 birth_city: Faker::Address.city,
                 birth_state: Faker::Address.state,
                 birth_date: Faker::Date.backward(days: 30000),
                 college: Faker::Educator.university,
                 degree: Faker::Educator.degree,
                )
end

40.times do
    #sample pulls a random element out of an array 
    id = Author.all.sample.id
    Book.create(title: Faker::Book.title, 
                genre: Faker::Book.genre, 
                publishing_date: Faker::Date.backward(days: 15000), 
                author_id: id, 
                rating: Faker::Number.within(range: 1..10))
               
end

1.times do 
    Novel.create(
        title: Faker::Book.title, 
        author_name: Faker::Name.name,
        genre: Faker::Book.genre,
        publishing_date: Faker::Date.backward(days: 15000), 
        rating: Faker::Number.within(range: 1..10)
    )
end



