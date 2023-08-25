import React from 'react';
import { Layout } from 'antd';
import { Divider } from 'antd';
import LongStraddle from './LongStraddle';
import ShortStraddle from './ShortStraddle';
import IronCondor from './IronCondor';


const { Header, Content, Footer } = Layout;

function Neutral() {
    return (
        <div>
            <Divider orientation="center" style={{ fontSize: 20 }} plain><b>Welcome to the Neutral
                Options Trading Simulator: Navigating Market Equilibrium</b></Divider>
            <p style={{ fontSize: 15 }} plain>In the world of options trading, neutrality in
                market movement presents unique opportunities that skilled traders can harness
                to their advantage. Our Neutral Options Trading Simulator offers a comprehensive
                platform to delve into the strategies that excel when markets remain stable
                and trends are balanced. From Long Straddles to Short Straddles and Iron Condors,
                we provide you with an in-depth overview and detailed insights into each
                strategy.<br></br></p>
            <Layout style={{ minHeight: '100vh' }}>
                <Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, backgroundColor: '#e8f7ff' }}>
                        <h3>Long Straddle</h3>
                        <LongStraddle />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                        <h3>Short Straddle</h3>
                        <ShortStraddle />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f6ffed' }}>
                        <h3>Iron Condor</h3>
                        <IronCondor />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Neutral;
