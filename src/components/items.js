import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default props => {
    const [value, setValue] = useState("");
    return (
        <div>
        <ul>
            {props.items.map(item => <li key={item}>{item} <Link to={`/item/${item}`}>open</Link></li>)}
        </ul>
        <input onChange={e => setValue(e.target.value)}/>
        <button onClick={() => {props.addItem(value);}}>Add</button>
        </div>);
};