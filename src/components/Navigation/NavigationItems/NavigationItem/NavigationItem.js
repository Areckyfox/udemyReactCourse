import React from 'react';
import classes from './NavigationItem.css'
const navigationItem = (props) =>  (
    <li className={classes.NavigationItem}>
        <a  href={props.link} 
            alt={props.alt}
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;