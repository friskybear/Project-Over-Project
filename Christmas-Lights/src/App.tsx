import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { getCurrentWindow } from "@tauri-apps/api/window";
import Lights from "./Components/Lights/Lights";
import { createContext, createEffect, createSignal, Index } from "solid-js";

function App() {
  const [speed, set_speed] = createSignal(0.75);
  return (
    <>
      <header
        class=" w-screen h-20 flex justify-between items-center m-3"
        data-tauri-drag-region
      >
        <button
          type="button"
          onclick={async () => {
            await getCurrentWindow().close();
          }}
          class="h-20 w-20 btn btn-circle btn-secondary font-bold text-6xl flex justify-center items-center"
        >
          <h1 class="mb-1.5 ">X</h1>
        </button>
        <input
          type="range"
          class="range range-primary w-52 mr-5"
          step={0.25}
          min={0.01}
          max={1.01}
          value={0.26}
          onchange={(e) => {
            switch (e.currentTarget.value) {
              case "0.01":
                set_speed(1);
                break;
              case "0.26":
                set_speed(0.75);
                break;
              case "0.51":
                set_speed(0.5);
                break;
              case "0.76":
                set_speed(0.25);
                break;
              case "1.01":
                set_speed(0.01);
                break;
            }
          }}
        />
      </header>

      <main class=" h-screen">
        <ul class="flex flex-wrap overflow-hidden justify-center items-center ">
          <Index each={Array(147).fill(0)}>
            {(_, index) => (
              <li
                class="-mx-4 "

              >
                <Lights speed={speed} index={index} />
              </li>
            )}
          </Index>
        </ul>
      </main>
    </>
  );
}
export default App;
