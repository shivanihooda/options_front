import React, { useState } from "react";
import { Button, Checkbox, Form, Input, DatePicker, Space } from 'antd';
import axios from 'axios';
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../assets/cat.json";
import PROTECTIVEPUT from '../assets/protectiveput.png';

function ProtectivePut() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            console.log('Received user input:', values);
            setIsLoading(true);
            const response = await axios.get("http://127.0.0.1:5000/api/v1/options/strategy",
                {
                    params: {
                        strategy: "ProtectivePut",
                        start_date: values.date.format("YYYYMMDD"),
                        short_put: values.shortput
                    }
                });
            console.log(data);
            setData({
                symbol: response.data.ticker,
                stock_live_price: response.data.stock_live_price,
                stock_price_at_purchase: response.data.stock_price_at_purchase,
                premium: response.data.premium,
                maximum_profit: response.data.maximum_profit,
                maximum_loss: response.data.maximum_loss,
                current_profit_or_loss: response.data.current_profit_loss,
                break_even_point: response.data.break_even_point,
                expiration: response.data.expiration_date,
                strike: response.data.short_put_strike_price
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
            <p style={{ fontSize: 15 }} orientation="center" plain>The Protective Put combines owning the
                underlying stock with purchasing a put option. This strategy ensures your investment's
                value remains relatively stable in the face of market downturns. While it requires an
                upfront investment, it offers the advantage of minimizing losses and securing peace
                of mind.<br></br>
            </p>
            <img
                src={PROTECTIVEPUT}
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
                            <p><b>Stock Price At Pirchase:</b> {data.stock_price_at_purchase}</p>
                            <p><b>Option Strike Price:</b> {data.strike}</p>
                            <p><b>Premium Paid:</b> {data.premium}</p>
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

export default ProtectivePut;