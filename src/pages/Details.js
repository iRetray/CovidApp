import React from 'react'
import {Button,Layout} from 'antd';
//import './App.css';
const{Header}=Layout;
export default class Details extends React.Component {
    render() {
        var url = document.URL;
        alert(url);
        return(
            <div>
                <layout>
                    <Header className="header">
                        <h1 className="title" id="desc">Pagina  de detalles de:</h1> 
                    </Header>
                </layout>
            </div>
        )
    }
}
