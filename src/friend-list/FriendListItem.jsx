import React from 'react'
import Friend from '../friend-list/Friend'
import './friend.css'

function FriendListItem({items}) {
    return (
        <ul className="friend-list">
            {items.map(item => <Friend key={item.id} name={item.name} avatar={item.avatar} isOnline={item.isOnline}/>)}
        </ul>
    )
}

export default FriendListItem
