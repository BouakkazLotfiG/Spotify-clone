import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ i, song }) => {
  const activeSong = "Test";
  return (
    <div>
      <div className="flex flew-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-mg cursor-pointer">
        <div className="relative w-full h-56 group">
          <div
            className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
              activeSong?.title === song.title
                ? "flex bg-black bg-opacity-70"
                : "hidden"
            }`}
          >
            <PlayPause />
          </div>
          <img src={song.images?.coverart} alt="song-img" />
        </div>
        <div className="mt-4 flex flex-col">
          <p>
            <Link>{song.title}</Link>
          </p>
          <p>
            <Link>{song.subtitle}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
