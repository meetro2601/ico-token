import React from 'react'
import {Container} from 'react-bootstrap'
import Timeline from './Timeline'

function Roadmap() {
    return (
        <Container fluid className='px-0 py-5 text-center'>
            <h1 className='py-3'>Road Map</h1>
            <Timeline/>
        </Container>
    )
}

export default Roadmap
