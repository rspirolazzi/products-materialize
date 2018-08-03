import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout'
import Product from './containers/Product'
import List from './containers/List'
import Payment from './containers/Payment'
import {HashRouter, Route} from "react-router-dom"
import {Provider} from 'react-redux'
import configureStore from './configureStore'

const products = require('./products.json')
const store = configureStore(products)
class App extends Component {
    render() {
        return <Provider store={store}>
            <HashRouter>
                <Layout>
                    <div>
                        <Route exact path="/" component={List}/>
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/payment/:id" component={Payment}/>
                    </div>
                </Layout>
            </HashRouter>
        </Provider>
    }
}

export default App
