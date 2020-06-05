import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="我們的房間">
                    <Link to='/' className="btn-primary">
                        回首頁
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}

export default Rooms
