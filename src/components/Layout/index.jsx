import React from 'react'
import {Header} from '../Header'
import {MainFooter as Footer} from '../Footer'
import {Row, Col, ProgressBar } from 'react-materialize'
const Layout = ({loading=false, children})=><div>
    <Header/>
    <Row>
        {loading?
        <Col s={12}>
            <ProgressBar />
        </Col>:''}
        <Col s={12}>
            {children}
        </Col>
    </Row>
    <Footer/>
</div>
export default Layout