import React from 'react'
import {Link} from 'react-router-dom'
import {Collection, CollectionItem, Icon, Badge} from 'react-materialize'
const List = ({items})=><div>
    <Collection header='Products'>
        {items.map(item=><CollectionItem key={item._id} className="avatar">
            <span className="title">{item.name}</span>
            <span>$ {item.price}</span>
            <img src={item.imageURL} alt="" className="circle"/>
            <Link to={`/product/${item._id}`} className="secondary-content"><Icon>send</Icon></Link>
        </CollectionItem>)}
    </Collection>
</div>

export default List
