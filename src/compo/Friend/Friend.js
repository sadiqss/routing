import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <Link to={'/friends/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>UserName: {username} id:{id}</button>
        </div>
    );
};

export default Friend;