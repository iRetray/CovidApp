import React from 'react'
import { Card, Statistic, Typography } from 'antd'
import { ArrowUpOutlined, NotificationOutlined } from '@ant-design/icons'
import Axios from 'axios'
import Moment from 'moment'
import "moment/locale/es";
import CardsInfo from './CardsInfo'

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

    componentDidMount() {
        this.getDataGlobal()
    }

    async getDataGlobal() {
        console.log("iniciando peticion")
        const responseData = await Axios.get("https://api.covid19api.com/summary")
            .then(function (response) {
                console.log("solicitud exitosa")
                console.log(response);
            })
        this.setState({
            globalData: responseData.data,
            generalData: responseData.data.Global
        })
        console.log("Estado", this.state.globalData)
        console.log(this.state.generalData)
        console.log(this.generalData)
    }

    render() {
        return (
            <div>
                <div className="row container" style={{ justifyContent: 'center' }}>
                    <div className="col-4-md" style={{ padding: '15px' }}>
                        <CardsInfo data={this.state.generalData} />
                        <Card>
                            <Statistic
                                title="Nuevos casos confirmados"
                                value={this.state.globalData.NewConfirmed}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<NotificationOutlined />}
                                suffix="personas"
                            />
                        </Card>
                        {console.log("Hay ")}
                        {this.state.globalData.NewConfirmed}
                    </div>
                    <div className="col-4-md" style={{ padding: '15px' }}>
                        <Card>
                            <Statistic
                                title="Recuperados"
                                value={15.16}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </div>

                </div>
                <div style={{ padding: '10px', textAlign: 'right ' }}>
                    <Text type="secondary">Información actualizada a: </Text><Text strong>
                        {
                            Moment.locale("es"),
                            Moment(this.state.globalData.Date).format("MMMM D YYYY, h:mm a")
                        }
                    </Text>
                </div>
            </div>
        )
    }
}