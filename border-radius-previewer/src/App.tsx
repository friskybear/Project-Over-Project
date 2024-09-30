import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createEffect, createSignal, For, Index, on, onMount } from "solid-js";
import { debounce } from "lodash";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";

const writeToClipboard = async (arr: number[]) => {
  await writeText(
    `"border-radius": ${arr[0]}% ${arr[1]}% ${arr[2]}% ${arr[3]}% / ${arr[4]}% ${arr[5]}% ${arr[6]}% ${arr[7]}%`
  );
};
function App() {
  const [percentages, setPercentages] = createSignal<number[]>(
    Array.from({ length: 8 }).map((_) => Math.floor(Math.random() * 100)),
    { equals: false }
  );
  onMount(() => {
    // Update all range inputs
    for (let i = 0; i < 8; i++) {
      const input = document.getElementById(i.toString()) as HTMLInputElement;
      if (input) {
        input.value = percentages()[i].toString();
      }
    }
  });

  const handleChange = debounce((e: HTMLInputElement) => {
    const index = Number.parseInt(e.id);
    const value = Number.parseInt(e.value);
    setPercentages((prev) => {
      prev[index] = value;
      return prev;
    });
  }, 2);

  return (
    <>
      <header class="h-10 bg-accent-500 flex justify-center items-center select-none">
        <h1>Border-radius Previewer</h1>
      </header>
      <main class="relative m-5">
        <button
          class="btn btn-primary btn-square w-20 ml-[20dvh] mt-20"
          onclick={() => {
            writeToClipboard(percentages());
          }}
          type="button"
        >
          Copy
        </button>
        <ul class="flex flex-col w-80  gap-2 -rotate-90 fixed top-52 ">
          <Index each={percentages()}>
            {(item, index) => (
              <section class="flex ">
                <input
                  id={index.toString()}
                  onInput={(e) => handleChange(e.currentTarget)}
                  type="range"
                  class="range range-lg "
                  min="0"
                  step={1}
                  max="100"
                />
                <h1 class="p-1 w-8 h-8 rotate-90 align-middle flex justify-center select-none">
                  {item()}
                </h1>
              </section>
            )}
          </Index>
        </ul>
        <div
          class="fixed h-[70dvh] w-[70dvh] top-24 left-[60dvh] bg-red-700"
          style={{
            "border-radius": `${percentages()[0]}% ${percentages()[1]}% ${
              percentages()[2]
            }% ${percentages()[3]}% / ${percentages()[4]}% ${
              percentages()[5]
            }% ${percentages()[6]}% ${percentages()[7]}%`,
          }}
        >
          {}
        </div>
      </main>
    </>
  );
}

export default App;
