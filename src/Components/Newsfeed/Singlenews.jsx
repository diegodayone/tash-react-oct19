import React from "react"

class Singlenews extends React.Component {
    render() {
        return (<div onClick={() => this.props.removePost(this.props.post)}>
           {this.props.post.text} | from {this.props.post.username} @ {this.props.post.createdAt}
        </div>)
    }
}

export default Singlenews