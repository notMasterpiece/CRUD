import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {

    componentDidMount() {
        const {title} = this.props.comment;
        this.setState({
            commentValue: title
        })

    }


    render() {
        const {deleteComment} = this.props;
        const {_id, title} = this.props.comment;

        return (
            <li className='comment'>
                <span>{title}</span>
                <button onClick={() => deleteComment(_id)}>Видалити</button>
            </li>
        );
    }
}

Comment.propTypes = {
    deleteComment: PropTypes.func.isRequired
};

export default Comment;
