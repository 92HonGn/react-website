import React from "react";
import defaultBcg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext }  from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;
    // componentDidMount(){

    // }
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if(!room){
            return (
                <div className="error">
                    <h3>沒有房間</h3>
                    <Link to="/rooms" className="btn-primary">
                        回到選擇房間頁面
                    </Link>
                </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg);
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} 房間`}>
                        <Link to='/rooms' className='btn-primary'>
                            回到選擇房間頁面
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index)=>{
                            return (
                                <img key={index} src={item} alt={name}/>
                            );
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>詳細資訊</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>房間資訊</h3>
                            <h6>價格 ：${price}</h6>
                            <h6>大小 ：${size} SQFT</h6>
                            <h6>
                                最大容納 : {" "}
                                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "寵物允許":"寵物不允許"}</h6>
                            <h6>{breakfast && "免費早餐"}</h6>
                        </article>
                    </div>
                </section>
                <div className="room-extras">
                    <h6>額外資訊</h6>
                    <ul className="extras">
                        {
                            extras.map((item,index)=>{
                                return (
                                    <li key={index}>- {item}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </>
        );
    }
}