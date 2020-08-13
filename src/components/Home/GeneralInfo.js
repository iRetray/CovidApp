import React from 'react'
import { Space, Card, Statistic } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'

export default class GeneralInfo extends React.Component {
    render() {
        return (
            <div>
                <Space>
                    <Card style={{ width: 300 }} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card>
                        <Statistic
                            title="Active"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Space>
            </div>
        )
    }
}