import React from 'react'
import { Card, Statistic } from 'antd'
import {  NotificationOutlined } from '@ant-design/icons'

export default class CardsInfo extends React.Component {

    render() {
        return (
            <div className="col-4-md" style={{padding: '15px'}}>
                <Card>
                    <Statistic
                        title="Nuevos casos confirmados"
                        value={this.props.NewConfirmed}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<NotificationOutlined />}
                        suffix="personas"
                    />
                </Card>
                {console.log(this.props.NewConfirmed)}
            </div>
        )
    }
}