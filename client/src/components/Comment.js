import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios/index";

class Comment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            commentValue: '',
            showEdit: false
        }

    }

    showEditComment = () => {
        this.setState({
            showEdit: true
        })
    };


    editComment = () => {
        this.setState({ showEdit: false }, () => {
            // axios.post(`/api/post/${id}`)
            //     .then(post => {
            //         this.setState({
            //             post: post.data
            //         })
            //     })
        })
    };


    componentDidMount() {
        const {title} = this.props.comment;
        this.setState({
            commentValue: title
        })

    }


    render() {
        const {showEdit, commentValue} = this.state;
        const {deleteComment} = this.props;
        const {_id} = this.props.comment;

        return (
            <li className='comment'>
                {
                    showEdit
                        ? <input type="text" value={commentValue} onChange={e => this.setState({commentValue: e.target.value})} />
                        : <span>{commentValue}{' '}</span>
                }
                {
                    showEdit
                    ? <button onClick={this.editComment}>Зберегти</button>
                    : <button onClick={this.showEditComment}>Змінити</button>

                }

                <button onClick={() => deleteComment(_id)}>Видалити</button>
            </li>
        );
    }
}

Comment.propTypes = {};

export default Comment;
