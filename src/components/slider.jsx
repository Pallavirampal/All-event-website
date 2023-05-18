import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/nav.css'

function UncontrolledExample() {
    return (
        <>
            <Carousel>
                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1468234847176-28606331216a?ixid=MnwxMjA3fDB8MXxjb2xsZWN0aW9ufDF8Mzg4MTE5NTB8fHx8fDJ8fDE2Nzc0OTc4OTU&ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>WELCOME</h3>
                        <p>ORGANIZE EVENTS WITH US</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>LEARN AND GROW</h3>
                        <p>EAGER TO LEARN NEW THINGS</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://www.hire4event.com/service/19-05-29-04-05-24corporate%20event%20by%20hire4event.jpg"
                    />

                    <Carousel.Caption>
                        <h3>ACCORDING TO YOUR INTEREST</h3>
                        <p>
                            ALL EVENTS
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default UncontrolledExample;

