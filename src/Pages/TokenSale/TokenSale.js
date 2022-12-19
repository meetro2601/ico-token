import { IconButton } from '@material-ui/core'
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Timer from '../../Components/Timer/Timer'
import Fade from 'react-reveal/Fade'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {FaCcMastercard, FaCcVisa, FaWonSign} from 'react-icons/fa'

function TokenSale() {
    return (
        <Container className='py-5'>
            <div className='text-center py-5 col-lg-9 mx-auto'>
                <h2 className='mainTitle mb-4'>Token Sale</h2>
                <p>ICO Crypto token will be released on the basis of Ethereum and Bitocin platform. It’s compatibility of the token with third-party services wallets, exchanges.</p>
            </div>
            <Row className='py-3'>
                <Col lg={6}  className='sale-timer mb-3 text-center'>
                    <Timer></Timer>
                    <button className="my-3 homeBtn">Join & Buy Token Now</button>
                    <div className='my-4'>
                        <IconButton className='p-1'>
                            <BsCurrencyBitcoin fill='white'/>
                        </IconButton>
                        <IconButton className='p-2'>
                            <FaWonSign fill='white'/>
                        </IconButton>
                        <IconButton className='p-2'>
                            <FaCcVisa fill='white'/>
                        </IconButton>
                        <IconButton className='p-2'>
                            <FaCcMastercard fill='white'/>
                        </IconButton>
                    </div>
                </Col>
                <Col lg={6} className='mb-3'>
                    <ul className='sale-info'>
                        <Fade>
                        <li>
                            <p>Start</p>
                            <p>Feb 8, 2023 (9:00AM GMT)</p>
                        </li></Fade>
                        <Fade>
                        <li>
                            <p>End</p>
                            <p>Feb 20, 2023 (11:00AM GMT)</p>
                        </li></Fade>
                    </ul>
                    <ul className='sale-info'>
                        <Fade>
                        <li>
                            <p>Acceptable currencies</p>
                            <p>ETH, BTC, LTC</p>
                        </li></Fade>
                        <Fade>
                        <li>
                            <p>Number of tokens for sale</p>
                            <p>900,000 ICC (9%)</p>
                        </li></Fade>
                    </ul>
                    <ul className='sale-info'>
                        <Fade>
                        <li>
                            <p>Tokens exchange rate</p>
                            <p>1 ETH = 650 ICC, 1 BTC = 1940 ICC</p>
                        </li></Fade>
                        <Fade>
                        <li>
                            <p>Minimal transaction amount</p>
                            <p>1 ETH/ 1 BTC/ 1 LTC</p>
                        </li></Fade>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default TokenSale
