import React from 'react'
import { Typography, Divider, Button } from 'antd'
import { PlayCircleTwoTone } from '@ant-design/icons'
import covidImage from '../../images/homeImage.jpg'
const { Title, Paragraph, Text, Link } = Typography

export default class Introduction extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl">
                    <img alt="" src={covidImage} style={{ width: '100%', maxWidth: '700px' }} />
                </div>
                <div className="col-xl" style={{ padding: '15px' }}>
                    <Typography>
                        <Title>CovidApp</Title>
                        <Divider orientation="left">¿Qué es CovidApp?</Divider>
                        <Paragraph>
                            <Text strong>CovidApp</Text> es una aplicación web útil para conocer el estado de la pandemia que ha cambiado al mundo: el <Text strong>COVID19.</Text> Brindando información en tiempo real sobre cada país del mundo: número de personas contagiadas, fallecidas y recuperadas
                                    </Paragraph>
                        <Divider orientation="left">Veracidad de la información</Divider>
                        <Paragraph>
                            Con el fin de brindar información confiable y actualizada, <Text strong>CovidApp</Text> obtiene datos cada vez que visitas la página de una <Text code >API</Text> con la información de todos los paises del mundo. A su vez, esta <Text code>API</Text> obtiene datos de la base de datos oficial del Centro de Ciencia e Ingeniería de Sistemas (CSSE) de la Universidad Johns Hopkins. <Link href="https://covid19api.com/"> Información sobre <i>COVID19 API</i></Link>
                        </Paragraph>
                    </Typography>
                    <center>
                        <Button type="primary"><PlayCircleTwoTone />Iniciar aplicación</Button>
                    </center>
                </div>
            </div>
        )
    }
}