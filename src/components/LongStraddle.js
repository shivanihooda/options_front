import React, { useState } from "react";
import { Button, Checkbox, Form, Input, DatePicker, Space } from 'antd';
import axios from 'axios';
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../assets/cat.json";
import LONGSTRADDLE from '../assets/longstraddle.jpg';

function LongStraddle() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            console.log('Received user input:', values);
            setIsLoading(true);
            const response = await axios.get("http://127.0.0.1:5000/api/v1/options/strategy",
                {
                    params: {
                        strategy: "LongStraddle",
                        start_date: values.date.format("YYYYMMDD"),
                        long_put: values.longput,
                        long_call: values.longcall
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
                long_call_strike: response.data.long_call_strike_price,
                long_put_strike: response.data.long_put_strike_price
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
            <p style={{ fontSize: 15 }} orientation="center" plain>The Long Straddle
                strategy banks on significant price movement. Both call and put options
                offer unlimited profit potential, while the risk is limited to the
                combined premiums paid. The strategy aims for substantial price swings,
                and profit is achieved by the magnitude of the movement in either
                direction.<br></br>
            </p>
            <img
                src={LONGSTRADDLE}
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
                            label="LongCall"
                            name="longcall"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your long call contract name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="LongPut"
                            name="longput"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your long put contract name!',
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
                            <p><b>Long Call Strike Price:</b> {data.long_call_strike}</p>
                            <p><b>Long Put Strike Price:</b> {data.long_put_strike}</p>
                            <p><b>Premium Paid:</b> {data.premium}</p>
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

export default LongStraddle;