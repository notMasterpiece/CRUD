import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ListWrap = ({list, onDelete, onEdit}) => {
    if (list && list.length <= 0 )  return <p> постів немає</p>;

    return (
        <ul>
            {
                list && list.map( item => {
                   return (
                       <li key={item._id} className='list-item'>
                           <Link to={`post/show/${item._id}`}>{item.title}</Link>
                           <Link to={`/post/edit/${item._id}`} className='btn-edit' type='button' onClick={onEdit}>Змінити</Link>
                           <button className='btn-delete' type='button' onClick={() => onDelete(item._id)}>Видалити</button>
                       </li>
                   )
                })
            }
        </ul>
    );
};

ListWrap.propTypes = {
    list: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ListWrap;
