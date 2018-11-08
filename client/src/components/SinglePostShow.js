import React, {Component} from 'react';

import axios from 'axios';
import Comment from './Comment';

class SinglePostEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: '',
            comment: '',
            comments: [],
        }

    }

    componentDidMount() {
        this.getPosts();
    }


    getPosts = () => {
        const {id} = this.props.match.params;
        axios.get(`/api/post/${id}`)
            .then(post => {
                this.setState({
                    post: post.data
                })
            })
    };

    onChange = e => {
        this.setState({comment: e.target.value});
    };

    addComment = e => {
        e.preventDefault();
        const {id} = this.props.match.params;

        const newComments = {
            title: this.state.comment
        };

        axios.post(`/api/post/comment/${id}`, newComments)
            .then(res => {
                this.setState({
                    comments: res.data.comments,
                    comment: ''
                });
                this.getPosts();
            })
            .catch(err => {
                console.log(err);
            })
    };


    deleteComment = id => {
        const postId = this.props.match.params.id;
        axios.delete(`/api/post/uncomment/${postId}/${id}`)
            .then(() => {
                this.getPosts();
            })
            .catch(err => {
                console.log(err);
            })
    };


    editComment = id => {
            // const postId = this.props.match.params.id;
            // axios.delete(`/api/post/uncomment/${postId}/${id}`)
            //     .then(() => {
            //         this.getPosts();
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
    };



    render() {
        const {post, comment} = this.state;
        return (
            <div>
                <br/>
                <div className="list-item">
                    {post.title}
                </div>

                <div className="comments-block">
                    <form className="comments-form" onSubmit={this.addComment}>
                        <input type="text" onChange={this.onChange} value={comment} />
                        <button type='submit'>Додати коммент</button>
                    </form>
                    <ol>
                        {
                            post.comments && post.comments.map(c => <Comment key={c._id} comment={c} editComment={this.editComment} deleteComment={this.deleteComment} />)
                        }
                    </ol>


                </div>
            </div>
        );
    }
}


export default SinglePostEdit;
