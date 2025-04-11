'use client';
import { Button, Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

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
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {/* Background */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url('/icons/background_image.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.08,
                        zIndex: 0,
                    }}
                />

                {/* Left Side Title */}
                <Col xs={24} md={14} style={{ zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title style={{ fontSize: 60, color: 'white', margin: 0 }} level={1}>
                            PATHANIA<br />TECH<br />INSIGHTS
                        </Title>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 1 } },
                        }}
                    >
                        <div
                            style={{
                                backdropFilter: 'blur(10px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: '2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                maxWidth: 500,
                                margin: '0 auto',
                            }}
                        >
                            <Paragraph
                                style={{
                                    fontSize: 22,
                                    lineHeight: '1.6',
                                    color: '#f0f0f0',
                                    marginBottom: 24,
                                }}
                            >
                                Crack top-tier interviews & build like a backend beast. <br />
                                <b style={{ color: '#FFD93D' }}>🔥 Real-world insights</b> on system design, LLD & core tech fundamentals.
                            </Paragraph>

                            <a
                                href="https://www.linkedin.com/in/himachallad/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="large"
                                        shape="round"
                                        style={{
                                            backgroundColor: '#FFD93D',
                                            color: '#000',
                                            fontWeight: 600,
                                            border: 'none',
                                        }}
                                    >
                                        Get In Touch
                                    </Button>
                                </motion.div>
                            </a>
                        </div>
                    </motion.div>
                </Col>

                {/* <Col xs={2} md={2} style={{ zIndex: 1 }}>
                </Col> */}
                {/* Right Side Business Card with Image */}
                <Col xs={24} md={8} style={{ textAlign: 'left', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div
                            style={{
                                maxWidth: 320,
                                margin: '0 auto',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <Image
                                src="icons/crop_image.jpg" // ✅ replace with your image name
                                alt="Himachal Pathania"
                                width={300}
                                height={200}
                                style={{
                                    borderRadius: '20px',
                                    // border: '3px solid #FFD93D',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Paragraph style={{ color: '#fff', fontSize: 18, marginBottom: 0 }}>
                                Nikhil Pathania
                            </Paragraph>
                            <Paragraph style={{ color: '#ccc', fontSize: 14, marginTop: 4 }}>
                                Senior Backend Engineer
                            </Paragraph>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </>
    );
}
