import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Loader, Error, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from "../redux/services/shazamCore";


const Discover = () => {

    const dispatch = useDispatch();
    const {activeSong, isPlaying} = useSelector((state) => state.player);

    const {data, isFetching, error} = useGetTopChartsQuery()
    const genreName = 'Rock';

    console.log(data);

    if (isFetching) return <Loader title='Loading songs...' />;
    if (error) return <Error/>;

 

    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">
                    Discover {genreName}
                </h2>
                <select onChange={() => {}}
                    value=''
                    className="bg-gray p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">

                    {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}

                </select>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center gap-4">
                {data?.map((song, i) => (
                    <SongCard
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        key={song.key}
                        song={song}
                        i={i}
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
};

export default Discover;
