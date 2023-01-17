import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import 'swiper/css';
import 'swiper/css/free-mode'

import PlayPause from "./PlayPause";
import { playPause } from "../redux/features/playerSlice";
import { setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopPlay = () => {

  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const divRef = useRef(null);


  // for fixing the scroll down bug on mobile devices
  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  });


  return (

    <div ref={divRef}>



    </div>

  )

}

export default TopPlay;
