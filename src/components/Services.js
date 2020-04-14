import React, { useState } from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default function Services() {

  const [services] = useState([
    {
      icon: <FaCocktail/>,
      title: "免費雞尾酒",
      info: '主研生出區在力傷去味太而人門的想大音在語作現子一工相有品子本能動他，服積放人師然源合通目可'
    },
    {
      icon: <FaHiking/>,
      title: "無盡的遠足",
      info: '主研生出區在力傷去味太而人門的想大音在語作現子一工相有品子本能動他，服積放人師然源合通目可'
    },
    {
      icon: <FaShuttleVan/>,
      title: "免費班車",
      info: '主研生出區在力傷去味太而人門的想大音在語作現子一工相有品子本能動他，服積放人師然源合通目可'
    },
    {
      icon: <FaBeer/>,
      title: "最強啤酒",
      info: '主研生出區在力傷去味太而人門的想大音在語作現子一工相有品子本能動他，服積放人師然源合通目可'
    }
  ]);

  return (
    <div className="services">
      <Title title='我們服務' />
      <div className="services-center">
        {services.map((item,index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
         ))}
        </div>
    </div>
  );
}

