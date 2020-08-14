import React from 'react'
import { Layout, Button } from 'antd'
//import './App.css';
const { Header } = Layout
export default class Details extends React.Component {
    render() {
        // alert(url);
        return (
            <div>
                <Layout>
                    <Header className="header">
                        {/* Puedes obtener el id que te pasan mediante el parametro de la siguiente forma */}
                        <h2>Esta pagina muestra los datos del pais: {this.props.match.params.id}</h2>
                        <Button type="primary">Pruebas</Button>
                    </Header>
                </Layout>
            </div>
        )
    }
}
