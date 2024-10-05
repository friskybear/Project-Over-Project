import { invoke } from "@tauri-apps/api/core";
import {
  createEffect,
  createSignal,
  on,
  type Accessor,
  type Component,
} from "solid-js";

const Lights: Component<{ speed: Accessor<number>; index: number }> = (
  props
) => {
  const [color, set_color] = createSignal<string>(
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`
  );
  const [opacity, set_opacity] = createSignal<[number, boolean]>([1, false]);
  let interval: number | undefined;
  const pulse = () => {
    const random_number = Math.random() * (0.15 - 0.01) + 0.01;
    set_opacity((prev) => {
      if (prev[0] <= 0.2) return [prev[0] + random_number, true];
      if (prev[0] >= 0.85) return [prev[0] - random_number, false];
      return prev[1]
        ? [prev[0] + random_number, true]
        : [prev[0] - random_number, false];
    });
  };

  createEffect(
    on(props.speed, (now) => {
      clearInterval(interval);
      interval = setInterval(pulse, now * 100);
    })
  );

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <svg
      viewBox="-11.88 0 91.605 91.605"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      height={70}
      onClick={() => {
        const input = document.createElement("input");
        input.type = "color";
        input.value = color();
        input.addEventListener("change", (e) => {
          set_color((e.target as HTMLInputElement).value);
        });
        input.click();
      }}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="_1" data-name="1" transform="translate(-165.578 -102.894)">
          {" "}
          <path
            id="Path_1"
            data-name="Path 1"
            d="M199.711,174.661h-.2a12.276,12.276,0,0,1-11.954-9.483l-3.845-16.457a12.229,12.229,0,0,1,11.908-15.011h7.924a12.229,12.229,0,0,1,11.917,14.974l-3.79,16.456A12.277,12.277,0,0,1,199.711,174.661Z"
            fill="#123456"
          />{" "}
          <path
            id="Path_1"
            data-name="Path 1"
            style={{
              opacity: `${opacity()[0]}`,
              filter: `drop-shadow(0px 5px 4px ${color()})`,
            }}
            d="M199.711,174.661h-.2a12.276,12.276,0,0,1-11.954-9.483l-3.845-16.457a12.229,12.229,0,0,1,11.908-15.011h7.924a12.229,12.229,0,0,1,11.917,14.974l-3.79,16.456A12.277,12.277,0,0,1,199.711,174.661Z"
            fill={`${color()}`}
          />{" "}
          <path
            id="Path_2"
            data-name="Path 2"
            d="M199.711,177.411h-.2A14.965,14.965,0,0,1,184.882,165.8l-3.845-16.457a14.979,14.979,0,0,1,14.586-18.387h7.924a14.979,14.979,0,0,1,14.6,18.341l-3.791,16.457A14.955,14.955,0,0,1,199.711,177.411Zm-4.088-40.951a9.479,9.479,0,0,0-9.23,11.636l3.844,16.457a9.488,9.488,0,0,0,9.277,7.358h.2a9.482,9.482,0,0,0,9.283-7.388l3.79-16.456a9.48,9.48,0,0,0-9.237-11.607Z"
            fill="#151515"
          />{" "}
          <path
            id="Path_3"
            data-name="Path 3"
            d="M207.6,133.71H191.567v-6.558a5.174,5.174,0,0,1,5.175-5.174h5.686a5.174,5.174,0,0,1,5.175,5.174Z"
            fill="#c1c1c0"
          />{" "}
          <path
            id="Path_4"
            data-name="Path 4"
            d="M207.6,136.46H191.567a2.75,2.75,0,0,1-2.75-2.75v-6.558a7.934,7.934,0,0,1,7.925-7.924h5.686a7.934,7.934,0,0,1,7.925,7.924v6.558A2.75,2.75,0,0,1,207.6,136.46Zm-13.286-5.5h10.536v-3.808a2.427,2.427,0,0,0-2.425-2.424h-5.686a2.427,2.427,0,0,0-2.425,2.424Z"
            fill="#151515"
          />{" "}
          <g id="Group_1" data-name="Group 1">
            {" "}
            <line
              id="Line_1"
              data-name="Line 1"
              y1="7.997"
              transform="translate(199.585 111.981)"
              fill="#d0d0dc"
            />{" "}
            <path
              id="Path_5"
              data-name="Path 5"
              d="M199.585,122.728a2.75,2.75,0,0,1-2.75-2.75v-8a2.75,2.75,0,0,1,5.5,0v8A2.75,2.75,0,0,1,199.585,122.728Z"
              fill="#151515"
            />{" "}
          </g>{" "}
          <g id="Group_2" data-name="Group 2">
            {" "}
            <line
              id="Line_2"
              data-name="Line 2"
              y2="5.425"
              transform="translate(199.585 186.324)"
              fill="#d0d0dc"
            />{" "}
          </g>{" "}
          <g id="Group_3" data-name="Group 3">
            {" "}
            <line
              id="Line_3"
              data-name="Line 3"
              x2="2.646"
              y2="2.646"
              transform="translate(218.83 175.128)"
              fill="#d0d0dc"
            />{" "}
          </g>{" "}
          <g id="Group_4" data-name="Group 4">
            {" "}
            <line
              id="Line_4"
              data-name="Line 4"
              x1="2.646"
              y2="2.646"
              transform="translate(177.877 175.128)"
              fill="#d0d0dc"
            />{" "}
          </g>{" "}
          <g id="Group_5" data-name="Group 5">
            {" "}
            <line
              id="Line_5"
              data-name="Line 5"
              x2="5.447"
              transform="translate(225.225 154.186)"
              fill="#d0d0dc"
            />{" "}
          </g>{" "}
          <g id="Group_6" data-name="Group 6">
            {" "}
            <line
              id="Line_6"
              data-name="Line 6"
              x2="5.436"
              transform="translate(168.328 154.186)"
              fill="#d0d0dc"
            />{" "}
          </g>{" "}
          <g id="Group_7" data-name="Group 7">
            {" "}
            <path
              id="Path_11"
              data-name="Path 11"
              d="M199.5,114.75a47.7,47.7,0,0,1-24.458-6.744,2.751,2.751,0,0,1,2.819-4.724,42.225,42.225,0,0,0,43.073.123,2.75,2.75,0,0,1,2.791,4.74A47.72,47.72,0,0,1,199.5,114.75Z"
              fill="#151515"
            />{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default Lights;
