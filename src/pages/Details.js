import React from 'react'
import { Button, Layout } from 'antd';
//import './App.css';
const { Header } = Layout;
export default class Details extends React.Component {
    render() {
        var url = document.URL;
        // alert(url);
        return (
            <div>
                <layout>
                    <Header className="header">
                        <h1 className="title" id="desc">Pagina  de detalles de:</h1>
                        {/* Puedes obtener el id que te pasan mediante el parametro de la siguiente forma */}
                        <h2>Esta pagina muestra los datos del pais con codigo: {this.props.match.params.id}</h2>
                    </Header>
                </layout>
            </div>
        )
    }
}
