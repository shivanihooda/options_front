import React from 'react';
import { Layout } from 'antd';
import { Divider } from 'antd';
import LongCall from './LongCall';
import LongPut from './LongPut';
import ProtectivePut from './ProtectivePut';


const { Header, Content, Footer } = Layout;

function HedgeRisk() {
    return (
        <div>
            <Divider orientation="center" style={{ fontSize: 20 }} plain><b>Welcome to the Risk Hedging
                Options Trading Simulator: Safeguarding Your Investments</b></Divider>
            <p style={{ fontSize: 15 }} plain>In the dynamic world of options trading,
                risk management is a crucial skill for protecting your investments from
                market turbulence. Our Risk Hedging Options Trading Simulator offers a
                comprehensive platform to explore strategies that shield your portfolio
                from potential losses. From Long Calls to Long Puts and Protective Puts,
                we provide an insightful overview and detailed explanations of each
                strategy.<br></br>Our Risk Hedging Options Trading Simulator enables you to practice
                these strategies within a controlled environment, helping you gain a deep
                understanding of their nuances and applications. Understanding risk hedging
                strategies equips you to navigate market uncertainties with confidence, and
                our simulator empowers you to do so effectively.</p>
            <Layout style={{ minHeight: '100vh' }}>
                <Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1, backgroundColor: '#e8f7ff' }}>
                        <h3>Long Call</h3>
                        <LongCall />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f0f2f5' }}>
                        <h3>Long Put</h3>
                        <LongPut />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f6ffed' }}>
                        <h3>Protective Put</h3>
                        <ProtectivePut />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default HedgeRisk;
