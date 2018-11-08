import React, {Component} from 'react';

import axios from 'axios';

class SinglePostEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

    }

    onChange = e => {
        this.setState({value: e.target.value})
    };

    onCreate = e => {
        const {id} = this.props.match.params;
        e.preventDefault();
        const newPost = {
            title: this.state.value
        };

        axios.post(`/api/post/${id}`, newPost)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    };


    componentDidMount() {
        const {id} = this.props.match.params;
        axios.get(`/api/post/${id}`)
            .then(post => {
                this.setState({
                    value: post.data.title
                })
            })
    }


    render() {
        const {value} = this.state;
        return (
            <div>
                <br/>
                <div className="container">
                    <form className='top-form' onSubmit={this.onCreate}>
                        <input className='form-input' type="text" value={value} onChange={this.onChange} />
                        <button type='submit' disabled={value.trim().length <= 0}>Змінити</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default SinglePostEdit;
