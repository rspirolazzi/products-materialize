import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListItems from '../../components/Products/List.jsx'
class List extends Component {
    render() {
        const {items} = this.props
        return <ListItems items={[...items]}/>
    }
}
const mapStateToProps = (state, ownProps)=> {
    debugger
    const {items} = state.products || {items: []}
    return {
        items
    }
}
export default connect(mapStateToProps)(List)