import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Token.css'
import img1 from '../../images/1.png'
import img2 from '../../images/1.1.png'
import img3 from '../../images/2.png'
import TokenSale from './TokenSale'
import TokenDstrb from './TokenDstrb'
import Proceeds from './Proceeds'

function Token() {
    return (
        <Container fluid className='px-0 py-5'>
        <Container>
            <Container>
            <div className='text-center col-lg-9 mx-auto'>
                <h1 className='mainTitle mb-4'>What is ICO TOKEN?</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className='py-5'>
                <Row>
                    <Col lg={6} className='mining'>
                        <div className='pt-0 p-5'>
                        <div className='indi'></div>
                        <div className='display-3'>01</div>
                        <h2 className='display-6 fw-bold py-4 mb-0 mainTitle'>Decentralized Minning Our core focus.</h2>
                        <p className='py-3'>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='text-center'>
                        <div className=''>
                        <img src={img1} alt='image1' className='py-4 tokImg'></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className='order-lg-2'>
                        <div className='p-5'>
                        <div className='indi'></div>
                        <div className='display-3'>02</div>
                        <h2 className='display-6 fw-bold py-4 mb-0 mainTitle'>Populer Money and Smart wallet.</h2>
                        <p className='py-3'>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='text-center money'>
                        <div className='ps-0 p-5 '>
                        <img src={img2} alt='image1' className='my-4 tokImg'></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} className='security'>
                        <div className='p-5'>
                        <div className='indi'></div>
                        <div className='display-3'>03</div>
                        <h2 className='display-6 fw-bold py-4 mb-0 mainTitle'>Upholding Confidentialit & Strong Security.</h2>
                        <p className='py-3'>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
                        </div>
                    </Col>
                    <Col lg={6} className='text-center'>
                        <div className='py-5'>
                        <img src={img3} alt='image1' className='my-4 tokImg'></img>
                        </div>
                    </Col>
                </Row>
            </div>
            </Container>
            <Container>
                <TokenSale/>
            </Container>
            <Container >
                <TokenDstrb/>
            </Container>
            <Container>
                <Proceeds/>
            </Container>
        </Container>
        </Container>
    )
}

export default Token
