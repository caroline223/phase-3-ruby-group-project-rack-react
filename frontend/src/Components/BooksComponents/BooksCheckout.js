import React from 'react'
import BooksInfo from './BooksInfo'

class BooksCheckout extends React.Component {

render(){

    return(
        <div className="ui segment inverted teal books-display">
        <div className="ui five column grid">
          <div className="row books-display-row">
            Checked-Out Books
            <br />
            {}
          </div>
        </div>
      </div>
    )
}

}

export default BooksCheckout;