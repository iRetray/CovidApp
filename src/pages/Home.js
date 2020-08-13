import React from 'react'
import { Row, Col } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import GeneralInfo from '../components/Home/GeneralInfo'
import Introduction from '../components/Home/Introduction'


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Row justify="center" style={{ marginTop: '20px' }}>
                    <Col span={18}>
                        <Row justify="center">
                            <Introduction />
                        </Row>
                    </Col>
                </Row>
                <div className="container-fluid" style={{ background: '#F0F2F5' }}>
                    <GeneralInfo />                    
                </div>
            </div>
        )
    }
}