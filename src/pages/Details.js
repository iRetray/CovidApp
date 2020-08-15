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
    render(){
        return(
            
            <div>
            <Row justify="center">
            <h2>Esta pagina muestra los datos del pais: {this.props.match.params.id}</h2>
            </Row>
            <h2>{ this.state.generalDataAPI.TotalRecovered}</h2>
            </div>
            
        )
    }
}
