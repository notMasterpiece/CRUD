import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class List extends Component {

    onAddList = () => {
        axios.post('/api/list/add')
            .then(() => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    };



    render() {
        return (
            <div>
                <div className="add_list" onClick={this.onAddList}>
                    Add
                </div>
                <div className="list-lox">
                    Lorem ipsum dolor.
                </div>
            </div>
        );
    }
}

List.propTypes = {};

export default List;
