import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createSignal, For } from "solid-js";
function App() {
  const [value, set_value] = createSignal<{
    "1": number;
    "5": number;
    "10": number;
    "25": number;
  }>({
    "1": 0,
    "5": 0,
    "10": 0,
    "25": 0,
  });
  return (
    <>
      <main class="flex justify-center items-center flex-col h-screen gap-5">
        <input
          type="number"
          class="input input-primary text-text-100 border-2 outline-2 outline-dotted"
          max={1000000}
          placeholder="write you'r number here"
          onInput={(e) => {
            const value = e.currentTarget.value;

            const isValidFormat = /^(\d+\.\d{1,2}|\d+)$/.test(value);
            const in_range =
              e.currentTarget.valueAsNumber < 1000000 &&
              e.currentTarget.valueAsNumber > 0;
            e.currentTarget.style.outlineColor =
              isValidFormat && in_range ? "green" : "red";
            e.currentTarget.style.borderColor =
              isValidFormat && in_range ? "green" : "red";
            if (isValidFormat && in_range) {
              let value = e.currentTarget.valueAsNumber * 100;
              const quarter = Math.floor(value / 25);
              value = value - quarter * 25;
              const dime = Math.floor(value / 10);
              value = value - dime * 10;
              const nickel = Math.floor(value / 5);
              value = value - nickel * 5;
              const penny = value;
              set_value({ "1": penny, "5": nickel, "10": dime, "25": quarter });
            } else {
              set_value({
                "1": 0,
                "5": 0,
                "10": 0,
                "25": 0,
              });
            }
          }}
        />
        <section class="flex">
          <rect class="flex h-28 w-28 flex-wrap justify-center rounded-full bg-opacity-80 bg-black ">
            <div class="h-16 w-28 relative pl-3.5">
              <h1 class="absolute z-50 text-xl text-white top-[4.445dvh] left-[7.4dvh] font-bold">
                25
              </h1>
              {coin("#2c5253")}
            </div>
            <h1 class="text-2xl text-white font-semibold">{value()["25"]}</h1>
          </rect>
          <rect class="flex h-28 w-28 flex-wrap justify-center rounded-full bg-opacity-80 bg-black">
            <div class="h-16 w-28 relative pl-3.5">
              <h1 class="absolute z-50 text-xl text-white top-[4.445dvh] left-[7.1dvh] font-bold">
                10
              </h1>
              {coin("#509496")}
            </div>
            <h1 class="text-2xl text-white font-semibold">{value()["10"]}</h1>
          </rect>
          <rect class="flex h-28 w-28 flex-wrap justify-center rounded-full bg-opacity-80 bg-black">
            <div class="h-16 w-28 relative pl-3.5">
              <h1 class="absolute z-50 text-xl text-white top-[4.445dvh] left-[8dvh] font-bold">
                5
              </h1>
              {coin("#69aeaf")}
            </div>
            <h1 class="text-2xl text-white font-semibold">{value()["5"]}</h1>
          </rect>
          <rect class="flex h-28 w-28 flex-wrap justify-center rounded-full bg-opacity-80 bg-black ">
            <div class="h-16 w-28 relative pl-3.5">
              <h1 class="absolute z-50 text-xl text-white top-[4.445dvh] left-[8dvh] font-bold">
                1
              </h1>
              {coin("#8ac0c1")}
            </div>
            <h1 class="text-2xl text-white font-semibold">{value()["1"]}</h1>
          </rect>
        </section>
      </main>
    </>
  );
}
export default App;
const coin = (color: string) => {
  return (
    <svg
      height={87}
      viewBox="0 0 72 72"
      id="emoji"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="color">
          {" "}
          <path
            fill={color}
            d="M57.6,35.9c0-4.9,3.9-9.1,9.4-10.6v-5.2H5v5.5c4.9,1.7,8.4,5.7,8.4,10.3S9.9,44.6,5,46.3v5.5h62v-5.2 C61.6,45.1,57.6,40.9,57.6,35.9z"
          ></path>{" "}
        </g>{" "}
        <g id="hair"></g> <g id="skin"></g> <g id="skin-shadow"></g>{" "}
        <g id="line">
          {" "}
          <path
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2.2157"
            d="M57.1,35.6 c0-4.9,3.9-9.1,9.4-10.6v-5.2h-62v5.5c4.9,1.7,8.4,5.7,8.4,10.3s-3.5,8.6-8.4,10.3v5.5h62v-5.2C61.1,44.7,57.1,40.5,57.1,35.6z"
          ></path>{" "}
          <rect
            x="18.5"
            y="25"
            width="34"
            height="20"
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2.0945"
          ></rect>{" "}
        </g>{" "}
        <g id="color-foreground">
          {" "}
          <rect
            x="18.5"
            y="25"
            width="34"
            height="20"
            fill="none"
            stroke="#FFFFFF"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2.1"
          ></rect>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};
