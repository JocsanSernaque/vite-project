import { useState, useEffect } from "react";
import Films from "../icons/Film.svg";
import Tv from "../icons/RetroTv.svg";

const Data = () => {
  const [data, setData] = useState([]);
  const API_URL = "https://api.disneyapi.dev/character";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((request) => {
        // console.log(request.data);
        setData(request.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
      {data.map((d) => (
        <ul key={d._id} className="w-[300px] h-[350px]">
          <li>
            <div className="flex flex-col relative">
              <img
                src={d.imageUrl}
                alt={d.films.join(", ")}
                className="w-full h-[200px] object-cover object-center rounded-lg"
              />

              <div className="flex w-full justify-end items-center absolute bottom-0 right-0 gap-1 p-1 bg-white  backdrop-blur-sm">
                <img src={Films} />
                <p className="">{d.films[0]}</p>
              </div>
            </div>
            
            <div className="flex justify-start items-center gap-2 p-2">
              <img src={Tv} />
              <p>{d.tvShows ? d.tvShows : "Tv no encontrada"}</p>
              {/* <p>Peli: {d.films.join(", ")}</p> */}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Data;
