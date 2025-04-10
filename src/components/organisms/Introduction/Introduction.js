'use client';
import { Button, Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const { Title, Paragraph, Text } = Typography;

export default function Introduction() {
    return (
        <>
            <Row
                gutter={[32, 32]}
                justify="center"
                align="middle"
                style={{
                    minHeight: '100vh',
                    padding: '4rem 1rem',
                    marginBottom: '4rem',
                    background: `linear-gradient(to right, #fbd3e9, #f7797d)`,
                    overflow: 'hidden'
                }}

            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url('/icons/background_image.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.1, // feel free to tune: 0.05 - 0.15 range works best
                        zIndex: 0,
                    }}
                />
                <Col xs={24} md={8}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title style={{ fontSize: 60, color: 'white', margin: 0 }} level={1}>
                            NIKHIL<br />TECH<br />INSIGHTS
                        </Title>
                    </motion.div>
                </Col>

                <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Visual Accent (Image or Illustration) */}
                        {/* <Image
                            src="/hero-diagram.png" // Replace with your actual image
                            alt="System Design Visual"
                            width={200}
                            height={200}
                            style={{ marginBottom: '1.5rem' }}
                        /> */}

                        <Paragraph
                            style={{
                                fontSize: 24,
                                lineHeight: '1.6',
                                color: '#fff',
                                maxWidth: 500,
                                margin: '0 auto',
                            }}
                        >
                            Crack top-tier interviews & build like a backend beast. <br />
                            <b>🔥 Real-world insights</b> on system design, LLD & core tech fundamentals.
                        </Paragraph>

                        <Button
                            size="large"
                            shape="round"
                            style={{
                                marginTop: 24,
                                backgroundColor: '#fff',
                                color: '#000',
                                border: 'none',
                                fontWeight: 600,
                            }}
                        >
                            Get In Touch
                        </Button>

                        {/* Testimonial below CTA */}
                        {/* <Paragraph
                            style={{
                                fontSize: 16,
                                color: '#eee',
                                marginTop: 32,
                                maxWidth: 400,
                                margin: '2rem auto 0',
                                fontStyle: 'italic',
                            }}
                        >
                            “Nikhil’s guides helped me ace my FAANG interview. The system design clarity is unmatched.”
                            <br />
                            <Text type="secondary">– Arun, SDE @ Amazon</Text>
                        </Paragraph> */}
                    </motion.div>
                </Col>
            </Row>
        </>
    );
}
