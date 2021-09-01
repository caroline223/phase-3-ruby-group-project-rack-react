import React from 'react'

const AuthorsId = (props) => {

    return(
        <div className = "ui search searchBar">
        <div className="ui icon input">
            <input onChange={props.handleSearchId} placeholder="Id" className="prompt" />
            <i className="search icon" />
        </div>
    </div>
    )
}

export default AuthorsId;