import React from 'react'
import { Card, Statistic, Typography, Divider, Badge } from 'antd'
import { NotificationOutlined, EyeInvisibleOutlined, HeartOutlined } from '@ant-design/icons'
import Axios from 'axios'
import Moment from 'moment'
import LoadingSkeleton from './LoadingSkeleton'
import { CloudUploadOutlined } from '@ant-design/icons'
import "moment/locale/es"

const { Text } = Typography;

export default class GeneralInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            globalData: {},
            generalData: {}
        }
        this.getDataGlobal = this.getDataGlobal.bind(this)
    }

    async getDataGlobal() {
        const responseData = await Axios.get("https://api.covid19api.com/summary")
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        if (responseData) {
            this.setState({
                globalData: responseData.data,
                generalData: responseData.data.Global
            })
        }
    }

    componentDidMount() {
        this.getDataGlobal()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Divider orientation="left"><Text type="secondary">Nuevos informes</Text></Divider>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Badge.Ribbon text="Nuevos confirmados" color="#2f54eb" placement="start" >
                            <Card>
                                {
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                            value={this.state.generalData.NewConfirmed}
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
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                            value={this.state.generalData.NewDeaths}
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
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                            value={this.state.generalData.NewRecovered}
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
                <div className="row">
                    <Divider orientation="left"><Text type="secondary">Informes totales</Text></Divider>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Badge.Ribbon text="Total confirmados" color="#10239e" placement="start" >
                            <Card>
                                {
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                            value={this.state.generalData.TotalConfirmed}
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
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                                value={this.state.generalData.TotalDeaths}
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
                                    this.state.generalData.NewConfirmed
                                        ? <center>
                                            <Statistic
                                                value={this.state.generalData.TotalRecovered}
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
                <div style={{ padding: '10px', textAlign: 'right ' }}>
                    <Text type="secondary"><CloudUploadOutlined /> Información actualizada a: </Text><Text strong>
                        {Moment(this.state.globalData.Date).format("MMMM D YYYY, h:mm a")}
                    </Text>
                </div>
            </div >
        )
    }
}