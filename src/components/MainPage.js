import React,{ useState } from "react";
import { Col, Row } from 'antd';
import { Divider } from 'antd';
import NEUTRAL from '../assets/neutral.png';
import BULLISH from '../assets/bullish.png';
import BEARISH from '../assets/bearish.png';
import RISK from '../assets/hedgeRisk.png';
import Bullish from './Bullish';
import Neutral from './Neutral';  
import Bearish from './Bearish';
import HedgeRisk from './HedgeRisk';  
import '../styles/main.css';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

const MainPage = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
    
    <Divider orientation="center" style={{fontSize:20}} plain><b>Know what strategy works best for you</b></Divider>
          <p style={{ fontSize: 15 }} plain>Welcome to the ultimate Options Trading Strategies Simulator, your gateway to mastering the art of navigating the dynamic world of options trading. In the intricate realm of financial markets, success isn't merely about luck; it's about strategy, analysis, and astute decision-making. Our platform is designed to be your virtual laboratory, where you can experiment with a plethora of options trading strategies, each tailored to specific market conditions be it bullish, bearish, or neutral.
              <br></br> We understand that every trader is unique, with individual risk appetites, financial goals, and market outlooks. That's why our simulator goes beyond a one-size-fits-all approach. With an array of customizable parameters and real-time market data, you'll gain hands-on experience in crafting and fine-tuning strategies that align perfectly with your requirements. Whether you're a seasoned trader seeking to refine your tactics or a newcomer eager to grasp the fundamentals, our simulator provides an immersive environment to learn, practice, and thrive.</p>
    <Router>
    <nav>
      <Row className="menu-item" gutter={[16, 8]}>
        <Col span={6} style={{ padding: '10px' }}>
            <p className="menu-item-content"><b>Bullish</b></p>
            <Link onclick={handleClick} to="/bullish">
            <img
            src={BULLISH}
            className="menu-item-image"
            width="150" height="100"
          />
          </Link>
        </Col>
        <Col span={6} style={{ padding: '10px' }}>
            <p className="menu-item-content"><b>Neutral</b></p>
            <Link to="/neutral">
            <img
            src={NEUTRAL}
            className="menu-item-image"
            width="150" height="100"/>
            </Link>
        </Col>
        <Col span={6} style={{ padding: '10px' }}>
            <p className="menu-item-content"><b>Bearish</b></p>
            <Link to="/bearish">
            <img
                src={BEARISH}
                className="menu-item-image"
                width="150" height="100"
            />
            </Link>
        </Col>
        <Col span={6} style={{ padding: '10px' }}>
            <p className="menu-item-content"><b>Hedge Risk</b></p>
            <Link to="/hedge_risk">
            <img
            src={RISK}
            className="menu-item-image"
             width="150" height="100"
           />
           </Link>
        </Col>
      </Row>
      </nav>
        <Routes>
        <Route path="/" />
          <Route path="/bullish" element={<Bullish/>} />
          <Route path="/neutral" element={<Neutral/>}  />
          <Route path="/bearish" element={<Bearish/>}  />
          <Route path="/hedge_risk" element={<HedgeRisk/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainPage;