import React from 'react'
import { Space, Skeleton } from 'antd'

export default class LoadingSkeleton extends React.Component {
    render() {
        return (
            <center>
                <Space>
                    <Skeleton.Image />
                    <Skeleton.Button active="true" size="default" shape="default" />
                    <Skeleton.Avatar active="true" size="default" shape="circle" />
                    <Skeleton.Avatar active="true" size="default" shape="circle" />
                </Space>
                <Skeleton.Input style={{ width: 200, marginTop: '10px' }} active="true" size="default" />
            </center>
        )
    }
}