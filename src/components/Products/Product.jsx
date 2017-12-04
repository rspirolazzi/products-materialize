import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardTitle, Button, Icon} from 'react-materialize'
const Product = ({item})=> {
    const {_id, imageURL, name, price} = item
    /*return <div className="card">
        <div className="card-image">
            <img src={imageURL}/>
            <span className="card-title">{name}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
                require little markup to use effectively.</p>
        </div>
    </div>*/
    return <div>
     <Card className='small'
     header={<CardTitle image={imageURL}>{name}</CardTitle>}
     actions={[<Link to={`/payment/${_id}/${price}`} className='waves-effect waves-light btn blue'>Pagar con tarjeta<Icon right>credit_card</Icon></Link>]}>
     <b className="btn-floating right btn-large waves-effect waves-light green">${price}</b>
     </Card>
     </div>
}
export default Product
