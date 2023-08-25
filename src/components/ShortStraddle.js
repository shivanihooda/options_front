import React, { useState } from "react";
import { Button, Checkbox, Form, Input, DatePicker, Space } from 'antd';
import axios from 'axios';
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../assets/cat.json";
import SHORTSTRADDLE from '../assets/shortstraddle.jpg';

function ShortStraddle() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            console.log('Received user input:', values);
            setIsLoading(true);
            const response = await axios.get("http://127.0.0.1:5000/api/v1/options/strategy",
                {
                    params: {
                        strategy: "ShortStraddle",
                        start_date: values.date.format("YYYYMMDD"),
                        short_put: values.shortput,
                        short_call: values.shortcall
                    }
                });
            console.log(data);
            setData({
                symbol: response.data.ticker,
                stock_live_price: response.data.stock_live_price,
                premium: response.data.premium,
                maximum_profit: response.data.maximum_profit,
                maximum_loss: response.data.maximum_loss,
                current_profit_or_loss: response.data.current_profit_loss,
                upper_break_even_point: response.data.upper_break_even_point,
                lower_break_even_point: response.data.lower_break_even_point,
                expiration: response.data.expiration_date,
                short_call_strike: response.data.short_call_strike_price,
                short_put_strike: response.data.short_put_strike_price
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <p style={{ fontSize: 15 }} orientation="center" plain>Selling a Short Straddle
                entails receiving both a call and a put premium. Profit is achieved if the
                stock price remains close to the strike price, causing the options to expire
                worthless. However, substantial price movement can lead to substantial losses,
                making this a high-risk strategy.<br></br>
            </p>
            <img
                src={SHORTSTRADDLE}
                className="menu-item-image"
                width="350" height="150"
            />
            {isLoading == true ?
                <div>
                    <Player
                        autoplay
                        loop
                        src={LoadingAnimation}
                        style={{ height: "300px", width: "300px", marginTop: "12rem" }}
                    />
                </div>

                :
                <div>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 300,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="ShortCall"
                            name="shortcall"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Short call contract name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="ShortPut"
                            name="shortput"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your short put contract name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[
                                {
                                    type: 'object',
                                    required: true,
                                    message: 'Please input contract start date',
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    {data && (
                        <div>
                            <h2>Results:</h2>
                            <p><b>Ticker Symbol:</b> {data.symbol}</p>
                            <p><b>Stock Live Price:</b> {data.stock_live_price}</p>
                            <p><b>Short Call Strike Price:</b> {data.short_call_strike}</p>
                            <p><b>Short Put Strike Price:</b> {data.short_put_strike}</p>
                            <p><b>Premium Received:</b> {data.premium}</p>
                            <p><b>Maximum Profit:</b> {data.maximum_profit}</p>
                            <p><b>Maximum Loss:</b> {data.maximum_loss}</p>
                            <p><b>Current Profit Or Loss:</b> {data.current_profit_or_loss}</p>
                            <p><b>Upper Break Even Point:</b> {data.upper_break_even_point}</p>
                            <p><b>Lower Break Even Point:</b> {data.lower_break_even_point}</p>
                            <p><b>Expiration Date:</b> {data.expiration}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ShortStraddle;