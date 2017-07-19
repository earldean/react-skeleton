var React = require('react');

function ListItem(props) {
    return <li> <h4>{props.ingredient}</h4> </li>;
}

module.exports = ListItem;
