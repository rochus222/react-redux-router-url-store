import React from 'react';
import {Link} from 'react-router-dom';
import {getItemPath} from '../util/path-utils';

export default props => {
    return (
        <div>
            <Link to={`/?${getItemPath(props.items)}`}>back to home</Link>
        <h1>{props.item ? props.item : "Item not found"}</h1>
        </div>);
};