class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/books/) && req.get?
      books = Book.all
      return [200, { 'Content-Type' => 'application/json' }, [ books.to_json ]]
      #message: taking a message hash and converting it to json server

    elsif req.path.match(/authors/) && req.get?
      authors = Author.all
      return [200, { 'Content-Type' => 'application/json' }, [ authors.to_json ]]

    elsif req.path.match(/arequests/) && req.get?
      arequests = AuthorRequest.all
      return [200, { 'Content-Type' => 'application/json' }, [ arequests.to_json ]]

    elsif req.path.match(/books/) && req.post?
     data = JSON.parse  req.body.read #takes sthg that is json and parse it and turn it into ruby
     book = Book.create(data)
     return [200, { 'Content-Type' => 'application/json' }, [ book.to_json ]]


    elsif req.delete?
      id = req.path_info.split("/books/").last
      book = Book.find_by(id)
      book.delete
      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Book deleted"}.to_json ]]

    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end