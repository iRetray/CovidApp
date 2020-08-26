import React from 'react'
import { Drawer, Card, Space, Typography, Row, Col, Skeleton, Divider, Badge, Statistic, } from 'antd'
import Moment from 'moment'
import Axios from 'axios'
import LoadingSkeleton from '../Home/LoadingSkeleton'
import { NotificationOutlined, EyeInvisibleOutlined, HeartOutlined, FrownOutlined, PoweroffOutlined, MedicineBoxOutlined, SolutionOutlined, TeamOutlined, RadarChartOutlined } from '@ant-design/icons'
import './internalShadow.css'
const { Title, Text } = Typography


export default class DetallesPais extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            ISO2: this.props.currentISO2,
            countryData: {},
            flag: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    async getDataGlobal() {
        if (this.props.currentISO2 !== "") {
            const petition = "https://corona.lmao.ninja/v3/covid-19/countries/" + this.props.currentISO2
            const responseData = await Axios.get(petition)
                .then(function (response) {
                    return response
                })
                .catch(function (error) {
                    console.log(error);
                })
            if (responseData) {
                this.setState({
                    countryData: responseData.data,
                    flag: responseData.data.countryInfo.flag
                })
            }
        }
    }

    setOpen() {
        this.props.setDrawer(true)
    }

    onClose() {
        this.props.setDrawer(false)
        this.props.setCurrentyCountry("")
        this.setState({
            countryData: {},
            flag: ""
        })
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
                    bodyStyle={{ background: '#262626' }}
                    footerStyle={{ textAlign: 'right' }}
                    footer={"Información actualizada a: "+ Moment(this.state.countryData.updated).format("MMMM D YYYY, h:mm a")}
                >
                    <Row gutter={16}>
                        <Col span={24}>
                            <center>
                                <Card>
                                    {
                                        this.state.flag
                                            ? <div><Space>
                                                <img src={this.state.flag} alt="" style={{ width: '100px', border: '2px black groove' }} />
                                                <Title level={1} style={{ marginTop: '17px' }}>{this.state.countryData.country}</Title>
                                            </Space>
                                                <hr />
                                                <Text strong><RadarChartOutlined /> Continente:</Text> <Text code>{this.state.countryData.continent}</Text> <br />
                                                <Text strong><TeamOutlined /> Población:</Text> <Text code>{Number(this.state.countryData.population).toLocaleString('en')}</Text> <br />
                                                <Text strong>Latitud:</Text> <Text code style={{ marginRight: '10px' }}>{this.state.countryData.countryInfo.lat}</Text>
                                                <Text strong>Longitud:</Text> <Text code>{this.state.countryData.countryInfo.long}</Text>
                                            </div>
                                            : <center>
                                                <Skeleton avatar paragraph={{ rows: 3 }} style={{ width: '50%' }} />
                                            </center>
                                    }
                                </Card>
                            </center>
                            <div className="container upShadow" style={{ backgroundColor: '#595959', padding: '20px' }}>
                                <div className="row">
                                    <Divider orientation="left"><Text style={{ color: 'white' }}>Nuevos infomes</Text></Divider>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Nuevos confirmados" color="#2f54eb" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.todayCases}
                                                                valueStyle={{ color: '#2f54eb' }}
                                                                prefix={<NotificationOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Nuevos fallecidos" color="#f5222d" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.todayDeaths}
                                                                valueStyle={{ color: '#f5222d' }}
                                                                prefix={<EyeInvisibleOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Nuevos recuperados" color="#52c41a" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.todayRecovered}
                                                                valueStyle={{ color: '#52c41a' }}
                                                                prefix={<HeartOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                </div>
                                <Divider orientation="left"><Text style={{ color: 'white' }}>Infomes totales</Text></Divider>
                                <div className="row">
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Total confirmados" color="#10239e" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.cases}
                                                                valueStyle={{ color: '#10239e' }}
                                                                prefix={<NotificationOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Total fallecidos" color="#a8071a" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.deaths}
                                                                valueStyle={{ color: '#a8071a' }}
                                                                prefix={<EyeInvisibleOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Total recuperados" color="#237804" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.recovered}
                                                                valueStyle={{ color: '#237804' }}
                                                                prefix={<HeartOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                </div>
                            </div>
                            <div className="container upShadow" style={{ backgroundColor: '#8c8c8c', padding: '20px' }}>
                                <Divider orientation="left"><Text style={{ color: 'white' }}>Información adicional</Text></Divider>
                                <div className="row">
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Casos activos" color="#08979c" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.active}
                                                                valueStyle={{ color: '#08979c' }}
                                                                prefix={<FrownOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Casos críticos" color="#a8071a" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.critical}
                                                                valueStyle={{ color: '#a8071a' }}
                                                                prefix={<PoweroffOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Pruebas aplicadas" color="#096dd9" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.tests}
                                                                valueStyle={{ color: '#096dd9' }}
                                                                prefix={<MedicineBoxOutlined />}
                                                                suffix="pruebas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                    <div className="col-md" style={{ padding: '15px' }}>
                                        <Badge.Ribbon text="Casos por millón" color="#c41d7f" placement="start" >
                                            <Card>
                                                {
                                                    this.state.flag
                                                        ? <center>
                                                            <Statistic
                                                                value={this.state.countryData.casesPerOneMillion}
                                                                valueStyle={{ color: '#c41d7f' }}
                                                                prefix={<SolutionOutlined />}
                                                                suffix="personas"
                                                                style={{ marginTop: '15px' }}
                                                            /></center>
                                                        : <div> <LoadingSkeleton /> </div>
                                                }
                                            </Card>
                                        </Badge.Ribbon>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Drawer>
            </div>
        )
    }
}