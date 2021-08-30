import React from 'react'

const BookSearch = (props) => {

    return(
        <div className = "ui search searchBar">
        <div className="ui icon input">
            <input onChange={props.handleSearchInput} placeholder="Genre" className="prompt" />
            <i className="search icon" />
        </div>
    </div>
    )
}

export default BookSearch;