import React from 'react'
import { Row} from 'antd'
import Axios from 'axios'
import 'antd/dist/antd.css';
export default class Details extends React.Component {
    constructor(props){
        super(props)
        this.state={
            globalAPI: {},
            generalDataAPI: {}
        }
        this.getDataAPI= this.getDataAPI.bind(this)
    }
    async getDataAPI(){
        const responseDataAPI=await Axios.get("https://api.covid19api.com/summary")
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            console.log(error);
        })
    if (responseDataAPI) {
        this.setState({
            globalAPI: responseDataAPI.data,
            generalDataAPI: responseDataAPI.data.Global
        })
    }
}

componentDidMount() {
    this.getDataAPI()
    }
    render() {
        return (
            <div>
                <Row justify="center">
                <h2>Esta pagina muestra los datos del pais: {this.props.match.params.id}</h2>
                </Row>
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
        )
        
    }
}
