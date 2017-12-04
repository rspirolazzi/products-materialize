import React from 'react'
import {Link} from 'react-router-dom'
import {Input, Row, Col, CardPanel, Button} from 'react-materialize'
const Payment = ({match})=> {
    const table = [
        {plan:1, inc:1.00},
        {plan:3, inc:1.10},
        {plan:6, inc:1.15},
        {plan:9, inc:1.20},
        {plan:12, inc:1.25},
    ]
    const {price} = match.params
    const renderOptions=(plan)=>{
        let label = plan === 1 ?'cuota':'cuotas'
        let result = table.filter(i=>i.plan === plan).shift()
        let {inc} = result
        let total = parseInt(price*inc, 0)

        return <option key={plan} value={plan}>{plan} {label} de ${total}</option>
    }
    return <Row>
        <Col s={12} m={12}>
            <h4>Pagar con tarjeta de credito ${price}</h4>
            <CardPanel className="lighten-4">
                <Row>
                    <Input s={12} label="Card Number"/>
                    <Input s={6} label="Expiration Date"/>
                    <Input s={6} label="CVC"/>
                    <Input s={12} type='select' label="Cuotas" defaultValue='1'>
                        {[1,3,6,9,12].map(renderOptions)}
                    </Input>
                    <Button className="col s12 blue">Confirmar</Button>
                    <Col s={6} m={6} l={6}>
                        <Link to={'/'}>Volver</Link>
                    </Col>
                </Row>
            </CardPanel>
        </Col>
    </Row>
}
export default Payment
