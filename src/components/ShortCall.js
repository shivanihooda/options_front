import React, { useState } from "react";
import { Button, Checkbox, Form, Input, DatePicker, Space } from 'antd';
import axios from 'axios';
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../assets/cat.json";
import SHORTCALL from '../assets/shortcall.jpg';

function ShortCall() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values) => {
        try { 
            console.log('Received user input:', values);
            setIsLoading(true);
            const response = await axios.get("http://127.0.0.1:5000/api/v1/options/strategy",
                {
                    params: {
                        strategy: "ShortCall",
                        start_date: values.date.format("YYYYMMDD"),
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
                break_even_point: response.data.break_even_point,
                expiration: response.data.expiration_date,
                strike: response.data.strike_price
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
            <p style={{ fontSize: 15 }} orientation="center" plain>Selling a call option
                grants someone else the rightto buy the underlying stock
                from you at a set price before a specified expiration
                date. Your profit is the premium received minus any potential difference between
                the stock's current price and the call's strike price. This strategy carries
                unlimited risk if the stock price rises significantly.<br></br>
                </p>
            <img
                src={SHORTCALL}
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
                                    message: 'Please input your short call contract name!',
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
                            <p><b>Option Strike Price:</b> {data.strike}</p>
                            <p><b>Premium Received:</b> {data.premium}</p>
                            <p><b>Maximum Profit:</b> {data.maximum_profit}</p>
                            <p><b>Maximum Loss:</b> {data.maximum_loss}</p>
                            <p><b>Current Profit Or Loss:</b> {data.current_profit_or_loss}</p>
                            <p><b>Break Even Point:</b> {data.break_even_point}</p>
                            <p><b>Expiration Date:</b> {data.expiration}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ShortCall;