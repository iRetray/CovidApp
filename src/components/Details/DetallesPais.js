import React from 'react'
import { Drawer, Button, Card, Space, Typography, Row, Col, Skeleton } from 'antd'
//import Moment from 'moment'
import Axios from 'axios'
import { Line } from '@ant-design/charts'
const { Title } = Typography


export default class DetallesPais extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            ISO2: this.props.currentISO2,
            countryData: {}
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    async getDataGlobal() {
        const petition = "https://corona.lmao.ninja/v3/covid-19/countries/" + this.props.currentISO2
        console.log(petition)
        const responseData = await Axios.get(petition)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        if (responseData) {
            this.setState({
                countryData: responseData.data
            })
        }
    }

    setOpen() {
        this.props.setDrawer(true)
    }

    onClose() {
        this.props.setDrawer(false)
        this.props.setCurrentyCountry("")
    }

    handleClickOpen() {
        this.props.setDrawer(true)
    }

    handleClickClose() {
        this.props.setDrawer(false)
    }

    componentDidMount() {
        this.setState({
            isOpen: this.props.stateOfDrawer,
            ISO2: this.props.currentISO2
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.isOpen) {
            this.setState({
                isOpen: nextProps.isOpen,
                ISO2: nextProps.ISO2
            })
        }
        if (nextProps !== this.props.ISO2) {
            this.setState({
                ISO2: nextProps.ISO2
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => this.getDataGlobal(), 2000)
    }

    render() {
        return (
            <div>
                <Drawer
                    width={window.innerWidth > 900 ? 740 : window.innerWidth - 100}
                    height={window.innerWidth > 900 ? "100%" : window.innerHeight - 150}
                    placement={window.innerWidth > 900 ? "right" : "bottom"}
                    title="Detalles de país"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.props.stateOfDrawer}
                    bodyStyle={{ background: '#8c8c8c' }}
                    footerStyle={{ textAlign: 'right' }}
                    footer={"Información actualizada a: "} //+ Moment(this.state.globalData.Date).format("MMMM D YYYY, h:mm a")}
                >
                    <Row gutter={16}>
                        <Col span={24}>
                            <Card>
                                <p>
                                    {
                                        this.state.countryData === null
                                            ? <Skeleton avatar paragraph={{ rows: 4 }} />
                                            : <Space>
                                                <img src={this.state.countryData.flag} alt="" style={{ width: '35px' }} />
                                                <Title level={1}>{this.state.countryData.country}</Title>
                                            </Space>
                                    }
                                </p>
                            </Card>
                        </Col>
                    </Row>

                    <div style={{ background: '#ffffff' }}>
                        <p>
                            {
                                this.state.countryData.country === null
                                    ? <p>Loading data</p>
                                    : <p>{this.state.countryData.country}</p>
                            }
                        </p>
                    </div>
                    <Card title="Card title" bordered={true} style={{ width: 300 }} hoverable>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Card title" bordered={true} style={{ width: 300 }} hoverable>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Card title" bordered={true} style={{ width: 300 }} hoverable>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Card title" bordered={true} style={{ width: 300 }} hoverable>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Card title" bordered={true} style={{ width: 300 }} hoverable>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Drawer>
            </div>
        )
    }
}