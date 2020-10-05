import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount() {
        axios.get('https://1pzb5pyogj.execute-api.us-east-1.amazonaws.com/prod?businessId=us-east-1:a7584b1c-f10f-4747-9573-dee791a48297')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div>
                List of Post
            </div>
        )
    }
}

export default PostList
