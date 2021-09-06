class Application

  def call(env)
    resp = Rack::Response.new
    @req = Rack::Request.new(env)

  if @req.path.match(/authors/) && @req.get? && params_id
    author = Author.find_by_id(params_id)
    author_info = {
              author_name: author.full_name,
              birth_date: author.birth_date,
              home_town: author.home_town,
              college: author.college,
              degree: author.degree
    }
    return [200, { 'Content-Type' => 'application/json' }, [ author_info.to_json ]] 

  
  elsif @req.path.match(/authors/) && @req.get?
    return [200, { 'Content-Type' => 'application/json' }, [ Author.all_with_books.to_json ]]

  
  elsif @req.path.match(/authors/) && @req.post?
      data = JSON.parse  @req.body.read 
      author =  Author.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [author.to_json ]]

    elsif @req.path.match(/books/) && @req.get?
      return [200, { 'Content-Type' => 'application/json' }, [ Book.all_with_authors.to_json ]]
    
    elsif @req.path.match(/books/) && @req.get? && params_id
      book = Book.find_by_id(params_id)
      book_info = {
        id: book.id,
        title: book.title,
        genre: book.genre,
        author_name: book.author.full_name,
        publishing_date: book.publishing_date,
        rating: book.rating,
        author_id: book.author_id
      }
      return [200, { 'Content-Type' => 'application/json' }, [ book_info.to_json ]] 

    elsif @req.path.match(/books/) && @req.delete? 
      id = @req.path_info.split('/books/').last
      book = Book.find_by_id(id)
      book.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Book deleted"}.to_json ]]
   
   
    elsif @req.path.match(/brequests/) && @req.get?
      book = Novel.all
      return [200, { 'Content-Type' => 'application/json' }, [ book.to_json ]]
  
    
    elsif @req.path.match(/brequests/) && @req.post?
      data = JSON.parse  @req.body.read 
      book =  Novel.create(data)
      return [200, { 'Content-Type' => 'application/json' }, [book.to_json ]]
     


    elsif @req.path.match(/brequests/) && @req.delete? 
      id = @req.path_info.split('/brequests/').last
      novel = Novel.find_by_id(id)
      novel.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Book deleted"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

  def params_id
    @req.path_info[/\d+/]
  end


  

  

end