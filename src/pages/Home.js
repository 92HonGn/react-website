import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="日本旅館" subtitle="各式各樣的旅館種類">
                    <Link to="/rooms" className="btn-primary">
                        我們的旅館
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}
