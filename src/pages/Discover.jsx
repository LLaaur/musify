import { Loader, Error, SongCard } from "../components";
import { genres } from '../assets/constants';


const Discover = () => {

    const genreName = 'Rock';

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

            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
                    <SongCard
                        key={song.key}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )


0};

export default Discover;
