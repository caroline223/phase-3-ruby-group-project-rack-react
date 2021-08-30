import React from 'react'

const AuthorsSearch = (props) => {

    return(
        <div className = "ui search searchBar">
        <div className="ui icon input">
            <input onChange={props.handleSearchInput} placeholder="Name" className="prompt" />
            <i className="search icon" />
        </div>
    </div>
    )
}

export default AuthorsSearch;