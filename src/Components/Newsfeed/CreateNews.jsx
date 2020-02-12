import React from "react"

class CreateNews extends React.Component {
    state ={
        currentText: ""
    }

    sendNewPost = async()=>{
        const resp = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            headers: {
                "Authorization": "Basic YWRtaW46c3VwZXJzZWNyZXQ=",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                text: this.state.currentText
            }),
            method: "POST"
        })

        const newPost = await resp.json();
        this.props.onNewPost(newPost)
        //this.setState({ posts: [newPost, ...this.state.posts]})
    }

    render() {
        return (  
        <div>
            <input type="text" value={this.state.currentText} onChange={(e) => this.setState({ currentText: e.target.value})} />
            <input type="button" value="send" onClick={this.sendNewPost} />
        </div>)
    }
}


export default CreateNews