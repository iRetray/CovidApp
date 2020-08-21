import React from 'react'
import { Drawer, Button, Card } from 'antd'
//import Moment from 'moment'
import Axios from 'axios'
import { Line } from '@ant-design/charts';

export default class DetallesPais extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.stateOfDrawer,
            ISO2: this.props.ISO2,
            countryData: {},
            configTable: {}
        }
        this.setOpen = this.setOpen.bind(this)
        this.onClose = this.onClose.bind(this)
        this.setData = this.setData.bind(this)
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

    setOpen() {
        this.props.setDrawer(true)
    }

    onClose() {
        this.props.setDrawer(false)
    }

    setData() {

        const data = [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
            { year: '1991', value: 7 },
            { year: '1992', value: 8 },
            { year: '1993', value: 12 },
            { year: '1994', value: 15 },
            { year: '1995', value: 18 },
            { year: '1996', value: 5 },
            { year: '1997', value: 3 },
            { year: '1998', value: 2 },
            { year: '1999', value: 1 }
        ];
        const config = {
            data,
            title: {
                visible: true,
                text: 'TextOfTable',
            },
            xField: 'year',
            yField: 'value',
            point: {
                visible: true,
                size: 5,
                shape: 'diamond',
                style: {
                    fill: 'white',
                    stroke: '#2593fc',
                    lineWidth: 2,
                },
            },
        };


        this.setState({
            configTable: config
        })
    }

    componentDidMount() {
        this.setData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.isOpen) {
            this.setState({
                nombre: nextProps.name
            }, function() {
                console.log("en el modal isOpen esta en:"+this.state.isOpen)
            })
        }
    }

    render() {
        return (
            <div>
                <Button onClick={() => { this.setOpen() }}>Abrir drawer</Button>
                <Drawer
                    width={window.innerWidth > 900 ? 740 : window.innerWidth - 100}
                    height={window.innerWidth > 900 ? "100%" : window.innerHeight - 150}
                    placement={window.innerWidth > 900 ? "right" : "bottom"}
                    title="Detalles del país"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.isOpen}
                    bodyStyle={{ background: '#8c8c8c' }}
                    footerStyle={{ textAlign: 'right' }}
                    footer={"Información actualizada a: "} //+ Moment(this.state.globalData.Date).format("MMMM D YYYY, h:mm a")}
                >
                    <div style={{ background: '#ffffff' }}>
                        <p>hey! el iso2 que llego aqui es: {this.state.ISO2}</p>
                        <Line {...this.state.configTable} />
                        <Line {...this.state.configTable} />
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