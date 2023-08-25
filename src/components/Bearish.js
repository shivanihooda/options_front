import React from 'react';
import { Layout } from 'antd';
import { Divider } from 'antd';
import ShortCall from './ShortCall';
import LongPut from './LongPut';
import BearCall from './BearCall';


const { Header, Content, Footer } = Layout;

function Bearish() {
    return (
        <div>
            <Divider orientation="center" style={{ fontSize: 20 }} plain><b>Welcome to the Bearish Options
                Trading Simulator: Profiting in a Downtrend</b></Divider>
            <p style={{ fontSize: 15 }} plain>In the world of options trading, seizing opportunities in
                bearish market conditions is just as essential as capitalizing on bullish trends.
                Our Bearish Options Trading Simulator is your virtual playground to explore and master
                the strategies that can help you profit when the market heads south. From Short Calls
                to Long Puts and Bear Call Spreads, we've got you covered with a comprehensive overview
                and detailed insights into each strategy.<br></br></p>
                <Layout style={{ minHeight: '100vh' }}>
                    <Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, backgroundColor: '#e8f7ff' }}>
                            <h3>Short Call</h3>
                            <ShortCall />
                        </div>
                        <div style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                            <h3>Long Put</h3>
                            <LongPut />
                        </div>
                        <div style={{ flex: 1, backgroundColor: '#f6ffed' }}>
                            <h3>Bear Call</h3>
                            <BearCall />
                        </div>
                    </Content>
                </Layout>
        </div>
    );
}

export default Bearish;
