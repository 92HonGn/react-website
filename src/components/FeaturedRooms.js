import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

// export default class FeaturedRooms extends Component{
//   static contextType = RoomContext
//   render(){
//     // const {name, greeting} = this.context;
//     let { loading, featuredRooms : rooms} = this.context

//     rooms = rooms.map(room => {
//       return <Room key={room.id} room={room} /> 
//     })
    
//     console.log(rooms);

//     return (
//       <section className="featured-rooms">
//         <Title title="特色客房" />
//         <div className="featured-rooms-center">
//           {loading ? <Loading/> : rooms}
//         </div>
//       </section>
//     )
//   }
// }

// static contextType = RoomContext
export default function FeaturedRooms(){

  const context = useContext(RoomContext);

  let { loading, featuredRooms : rooms} = context

  rooms = rooms.map(room => {
    return <Room key={room.id} room={room} /> 
  })
    
  console.log(rooms);

  return (
    <section className="featured-rooms">
        <Title title="特色客房" />
        <div className="featured-rooms-center">
          {loading ? <Loading/> : rooms}
        </div>
    </section>
  );
}