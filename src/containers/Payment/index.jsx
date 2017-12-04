import React, {Component} from 'react'
import {connect} from 'react-redux'
import PaymentItem from '../../components/Payment/'
import {getProduct} from '../../actions/products'
class Payment extends Component {
    componentWillMount(){
        this.props.dispatch(getProduct(this.props.match.params.id))
    }
    render() {
        const {item} = this.props
        if(item._id==null){
            return null
        }
        return <PaymentItem item={item}/>
    }
}
const mapStateToProps = (state, ownProps)=> {
    const {item} = state.products || {item: {}}
    return {
        item
    }
}
export default connect(mapStateToProps)(Payment)