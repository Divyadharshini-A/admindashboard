import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import Chart from '../../components/chart/Chart';
import {userData} from "../../dummyData";

import WidgetLg from "../../components/widgetLg/WidgetLg";
const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homewidgets">
    <WidgetLg/>
    </div>
    </div>
  );
}

export default Home