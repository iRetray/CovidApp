import React from 'react'
import { Card, Statistic, Typography } from 'antd'
import { NotificationOutlined, EyeInvisibleOutlined, HeartOutlined } from '@ant-design/icons'
import Axios from 'axios'
import Moment from 'moment'
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
        this.setState({
            globalData: responseData.data,
            generalData: responseData.data.Global
        })
    }

    componentDidMount() {
        this.getDataGlobal()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md" style={{ padding: '15px'}}>
                        <Card>
                            <Statistic
                                title="Nuevos confirmados"
                                value={this.state.generalData.NewConfirmed}
                                valueStyle={{ color: '#52c41a' }}
                                prefix={<NotificationOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Nuevos fallecidos"
                                value={this.state.generalData.NewDeaths}
                                valueStyle={{ color: '#fa541c' }}
                                prefix={<EyeInvisibleOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Nuevos recuperados"
                                value={this.state.generalData.NewRecovered}
                                valueStyle={{ color: '#2f54eb' }}
                                prefix={<HeartOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Total confirmados"
                                value={this.state.generalData.TotalConfirmed}
                                valueStyle={{ color: '#237804' }}
                                prefix={<NotificationOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Total fallecidos"
                                value={this.state.generalData.TotalDeaths}
                                valueStyle={{ color: '#ad2102' }}
                                prefix={<EyeInvisibleOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                    <div className="col-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Total recuperados"
                                value={this.state.generalData.TotalRecovered}
                                valueStyle={{ color: '#10239e' }}
                                prefix={<HeartOutlined />}
                                suffix="personas"
                            />
                        </Card>
                    </div>
                </div>
                <div style={{ padding: '10px', textAlign: 'right ' }}>
                    <Text type="secondary">Información actualizada a: </Text><Text strong>
                        {Moment(this.state.globalData.Date).format("MMMM D YYYY, h:mm a")}
                    </Text>
                </div>
            </div>
        )
    }
}