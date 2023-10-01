import axios from "axios";
import { useEffect, useState } from "react";

type funFact = {
  year: number;
  text: string;
};

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  const [onThisDayEvent, setOnThisDayEvent] = useState<funFact | undefined>();
  const url_base =
    "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/";

  const fillWith0 = (input: number, neededLength: number) => {
    if (input.toString().length >= neededLength) return input.toString();

    const addedCount = neededLength - input.toString().length;
    let answer = "";
    for (let i = 0; i < addedCount; i++) {
      answer += "0";
    }
    answer += input.toString();

    return answer;
  };
  const fetchOnThisDayAPI = async () => {
    axios
      .get(`${url_base}${dateState.getMonth() + 1}/${dateState.getDate()}`)
      .then((response) => {
        const chosenEvent =
          response.data.events[
            Math.floor(Math.random() * response.data.events.length)
          ];
        const separatedEvent: funFact = {
          text: chosenEvent.text,
          year: chosenEvent.year,
        };
        setOnThisDayEvent(separatedEvent);
      });
  };

  const datestr = `${dateState
    .toLocaleDateString("hu-HU", {
      dateStyle: "short",
    })
    .split(" ")
    .join("")}
  ${dateState.toLocaleDateString("hu-HU", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  //
  useEffect(() => {
    const intervalId = setInterval(() => setDateState(new Date()), 15 * 1000);

    fetchOnThisDayAPI();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="z-50 flex w-full justify-center pt-4 ">
      <div className="m-1  w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          viewBox="0 -960 960 960"
          width="36"
        >
          <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
        </svg>
      </div>
      <div className=" w-fit flex-col">
        <div className=" w-fit">
          <h5 className="text-base">{datestr}</h5>
        </div>
        <div className="flex w-fit">
          <div>
            <h5 className="text-base text-gray-500">
              {" "}
              {typeof onThisDayEvent === "undefined"
                ? ""
                : fillWith0(onThisDayEvent.year, 4) +
                  "." +
                  fillWith0(dateState.getMonth() + 1, 2) +
                  "." +
                  fillWith0(dateState.getDate(), 2) +
                  "."}
            </h5>
          </div>
          <div className="h-20 w-40 overflow-ellipsis">
            <p className="ml-2 h-1 overflow-ellipsis text-xs text-gray-500 ">
              {typeof onThisDayEvent === "undefined" ? "" : onThisDayEvent.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
