import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../store/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheSearchSuggestions } from "../store/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheSearchSuggestions({
      [searchQuery]: json[1],
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col px-5 py-2 items-center">
      <div className="flex flex-row col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="w-7\8 h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8jHyCTkZIzMDHz8/MgGxwQCgwAAAAkICHw8PD6+vrW1tacm5sMAAXm5uZ/fn7DwsIvKiwIAABlY2O6uLkZFRatq6w7ODmko6MpJSZzcXJua2yzsbIUDg80MDJ8entWU1RgXV7LysolVrCiAAABOElEQVR4nO3c2W7CMBAF0LCEQFgKBLoCpf3/jyyVWqk8ItnK1JzzB1dxxn4Y3aoCAAAAAAAAAAAAAACAO9TOF8MYFvMsAWdds53EsGxeV+kDtm+TQRyTh1nyhOtN3XesP+rNZ/KEw2nfqa5sD6UnbNIn3MU6pdN18oRVd4wTsT5mmDTVuDtFOajT0XuG2+Ji1/dN/2uxbrMEBAAAAAAAAACAW7TjGHJt08zPoyg+0u9eXhyafR3FsX5MH3D1FGdxbzDYn9Ovej+/9J3qynGXPOGw70zXMmzQlv8Ny/8Py5+ld3AfVuW/aQAAAAAAAAAA4Aald+6Nu1GY3sRTlt7EUN2XOVp2y+8vLb+DNljCDD3C5XdBh+rzzjJpvjvZl32Xsf/I08l+B736AAAAAAAAAAAAAAAA8J98AbnSK2oeEROmAAAAAElFTkSuQmCC"
        />
        {/* <img
          className="w-12 ml-5"
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/717/717426.png"
        /> */}
        <svg viewBox="0 0 24 24" focusable="false" className="h-8 w-8 ml-5">
          <defs>
            <radialGradient
              cx="5.4%"
              cy="7.11%"
              r="107.93%"
              fx="5.4%"
              fy="7.11%"
              gradientTransform="matrix(.70653 0 0 1 .016 0)"
            >
              <stop offset="0%" stopColor="#FFF"></stop>
              <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M1 1h21.77v22H1z"></path>
            <g fillRule="nonzero">
              <path
                fill="#F00"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
              ></path>
              <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
              <path
                fill="#000"
                fillOpacity=".12"
                d="M9.68 8.88l5.13 3.48.73-.38"
              ></path>
              <path
                fill="#FFF"
                fillOpacity=".2"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
              ></path>
              <path
                fill="#3E2723"
                fillOpacity=".2"
                d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
              ></path>
              <path
                fill="#FFF"
                fillOpacity=".2"
                d="M9.68 15.08v.1l5.84-3.08v-.12"
              ></path>
              <path
                fill="#3E2723"
                fillOpacity=".2"
                d="M9.68 8.9v-.13l5.84 3.1v.1"
              ></path>
              <path
                fill="url(#youtube_round__a)"
                fillOpacity=".1"
                d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                transform="translate(1 4.208)"
              ></path>
            </g>
          </g>
        </svg>
        <p className="text-lg font-bold ml-2">Watch Nest</p>
      </div>
      <div className="flex flex-col justify-center col-span-10">
        <div className="flex flex-row justify-center w-full">
          <div className="w-1/2 h-9 border border-slate-200 border-r-0 rounded-l-full flex flex-row">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              className="w-full my-1 mx-4 onfocus:border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="bg-gray-100 h-9 border boredr-slate-200 rounded-r-full">
            <button className="w-full ">
              <img
                className="w-5 mx-3 my-2"
                alt="search-icon"
                src="https://cdn-icons-png.flaticon.com/512/7828/7828884.png"
              />
            </button>
          </div>
          <div>
            <button className="bg-gray-100 h-9 border boredr-slate-400 rounded-full mx-3">
              <img
                className="w-3 mx-3"
                alt="voice-search"
                src="https://w7.pngwing.com/pngs/868/768/png-transparent-microphone-computer-icons-sound-recording-and-reproduction-google-voice-search-microphone-cdr-electronics-microphone-thumbnail.png"
              />
            </button>
          </div>
        </div>
        <div className="bg-white shadow-lg w-[470px] rounded-lg ml-48 mt-[480px] absolute z-[2]">
          <ul>
            {}
            {showSuggestions
              ? suggetions.map((s) => (
                  <li
                    key={s}
                    className="py-1 flex flex-row justify-start items-center hover:bg-slate-50"
                  >
                    <img
                      className="w-5 mx-3 my-2"
                      alt="search-icon"
                      src="https://cdn-icons-png.flaticon.com/512/7828/7828884.png"
                    />
                    <p>{s}</p>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <img
          className="w-8 mr-2"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        />
      </div>
    </div>
  );
};

export default Header;
