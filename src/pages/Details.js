import React from 'react'
import { Row , Table}  from 'antd'
import Axios from 'axios'
import 'antd/dist/antd.css';
const columns=[
{
    title:'Casos positivos',
    dataIndex:'positivos',
    key:'positivos'
},
{
    title:'Recuperados',
    dataIndex:'Recuperados',
    key:'Recuperados'
},
{
    title:'Fallecidos',
    dataIndex:'Fallecidos',
    key:'Fallecidos'
}
]
const dataSource = [
   {
       key:"1",
       positivos:"548",
       Recuperados:"9",
       Fallecidos:"89",
   }
  ];
export default class Details extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            globalAPI: {},
            generalDataAPI: {}
        }
        this.getDataAPI = this.getDataAPI.bind(this)
    }

    async getDataAPI() {
        var url= "https://api.covid19api.com/summary"
        const responseDataAPI = await Axios.get(url)
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
                <style>{"body { background-color:#d5e1df; }"}</style>
                <Row justify="center">
                <h2>Esta pagina muestra los datos del pais: {this.props.match.params.id}</h2>
                </Row>
                <Table dataSource={dataSource} columns={columns}></Table>
            </div>
        )
    }
}