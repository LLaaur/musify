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

const TopChartCard = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (

    <div className="w-full flex flex-row items-center font-semi-bold text-[#37fcff] hover:bg-[#452a9c] py-2 p-4 rounded-lg cursor-pointer mb-2">

      <h2 className="font-bold text-base text-white mr-3">{i + 1}.</h2>

      <div className="flex-1 flex flex-row justify-between items-center">

        <img  className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />

        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>

            <p className="text-base font-bold text-gray-300 mt-1">{song?.subtitle}</p>


        </div>

      </div>
      
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>

)

const TopPlay = () => {

  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();

  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5) 

  // for fixing the scroll down bug on mobile devices
  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true));
  };

  return (

    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[540px] max-w-full flex flex-col'>

      <div className="w-full flex flex-col">

      <div className="flex flex-row justify-between items-center">

        <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        <Link to={'/top-charts'}>
          <p className="text-white text-lg cursor-pointer font-medium">See more</p>
        </Link>

      </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
          <TopChartCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
          ))}
        </div>

      </div>

    </div>
  )

}

export default TopPlay;
