import React, {Component} from 'react'
import {connect} from 'react-redux'
import Item from '../../components/Products/Product.jsx'
import {getProduct} from '../../actions/products'
class Product extends Component {
    componentWillMount(){
        this.props.dispatch(getProduct(this.props.match.params.id))
    }
    render() {
        const {item} = this.props
        if(item._id==null){
            return null
        }
        return <Item item={item}/>
    }
}
const mapStateToProps = (state, ownProps)=> {
    const {item} = state.products || {item: {}}
    return {
        item
    }
}
export default connect(mapStateToProps)(Product)