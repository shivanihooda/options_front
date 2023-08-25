import React from 'react';
import { Layout } from 'antd';
import { Divider } from 'antd';
import LongCall from './LongCall';
import ShortPut from './ShortPut';
import BullCall from './BullCall';


const { Header, Content, Footer } = Layout;

function Bullish() {
    return (
        <div>
            <Divider orientation="center" style={{ fontSize: 20 }} plain><b>Welcome to the Bullish Options
                Trading Simulator: Mastering Upward Trends</b></Divider>
            <p style={{ fontSize: 15 }} plain>In the dynamic realm of options trading,
                the ability to harness bullish market movements is a skill coveted by
                traders seeking to capitalize on price uptrends. Our Bullish Options
                Trading Simulator offers an immersive platform to delve into and comprehend
                the strategies that unlock potential profits during surges in market value.
                From Long Calls to Short Puts and Bull Call Spreads, we provide an encompassing
                overview and detailed insights into each strategy.<br></br></p>
            <Layout style={{ minHeight: '100vh' }}>
                <Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, backgroundColor: '#e8f7ff' }}>
                        <h3>Long Call</h3>
                        <LongCall />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                        <h3>Short Put</h3>
                        <ShortPut />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f6ffed' }}>
                        <h3>Bull Call</h3>
                        <BullCall />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Bullish;
