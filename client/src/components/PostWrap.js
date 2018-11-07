import React from 'react';
import PropTypes from 'prop-types';

import TopForm from './TopForm';
import ListWrap from './ListWrap';
import axios from "axios/index";

class PostWrap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        }
    }

    onDelete = id => {
        const {list} = this.state;

        axios.delete(`/api/post/${id}`)
            .then(() => {
                const newList = list.filter(l => l._id !== id);
                this.setState({
                    list: newList
                })
            })
    };


    onEdit = () => {
        this.setState({ showEdit: !this.state.showEdit })
    };


    onChange = e => {
        this.setState({value: e.target.value})
    };

    onCreate = e => {
        e.preventDefault();
        if( !this.state.value.trim().length ) return false;

        const newPost = {
            title: this.state.value
        };

        axios.post('/api/post', newPost)
            .then(() => {
                this.getPosts();
                this.resetState();
            });
    };

    getPosts = () => {
        axios.get('/api/post')
            .then(posts => {
                this.setState({
                    list: posts.data
                })
            })
    };

    resetState = () => {
        this.setState({ value: '' })
    };


    componentDidMount() {
        this.getPosts();
    }

    render () {
        const {value, list} = this.state;

        return (
            <div>
                <TopForm
                    value={value}
                    onChange={this.onChange}
                    onCreate={this.onCreate}
                />
                <ListWrap
                    list={list}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                />
            </div>
        );
    }
};

PostWrap.propTypes = {

};

export default PostWrap;
