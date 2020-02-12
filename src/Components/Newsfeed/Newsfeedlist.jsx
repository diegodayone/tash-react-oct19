import React from "react"
import Singlenews from "./Singlenews"
import CreateNews from "./CreateNews"

class Newsfeedlist extends React.Component {
    state = {
        posts: [],
        currentText: ""
    }

    removePost = async (post)=>{
        const resp = await fetch(`https://striveschool.herokuapp.com/api/posts/${post._id}`, {
            headers: {
                "Authorization": "Basic YWRtaW46c3VwZXJzZWNyZXQ="
            },
            method: "DELETE"
        })

        if (resp.ok){
            this.setState({ posts:this.state.posts.filter(news => news._id !== post._id)})
        }
        else{
            console.log("error in deleting!")
        }

    }

    render() {
        return (<div>
            <h1>I'm the newsfeedlist</h1>
             <CreateNews onNewPost={(newPost) => this.setState({ posts: [newPost, ...this.state.posts]})} />
            
            {this.state.posts.map((singlePost, index) => 
                    <Singlenews post={singlePost} key={index} removePost={this.removePost} />)}    
        </div>)
    }

    componentDidMount = async () =>{
        const resp = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            headers: {
                "Authorization": "Basic YWRtaW46c3VwZXJzZWNyZXQ="
            }
        })

        const posts = await resp.json();
        this.setState({
            posts: posts
        })
    }
}


export default Newsfeedlist