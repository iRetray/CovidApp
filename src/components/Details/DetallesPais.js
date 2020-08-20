import React from 'react'
import { Drawer, Button, Card } from 'antd'

export default class DetallesPais extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.setOpen = this.setOpen.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    setOpen() {
        this.setState({
            isOpen: true
        })
    }

    onClose() {
        this.setState({
            isOpen: false
        })
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
                    bodyStyle={{background: '#8c8c8c'}}
                    footer="footer"
                >
                    
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