import React from 'react'

class FavoriteBook extends React.Component {


    render() {
        return (
            <div>
                {this.props.count < 1 ? <button onClick={this.props.increaseVote}>+</button> : this.props.count}
            </div>
        )
    }
}

export default FavoriteBook