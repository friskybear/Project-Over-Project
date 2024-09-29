import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createEffect, createSignal, For, on } from "solid-js";
import { debounce } from "lodash";
function App() {
  const [percentages, setPercentages] = createSignal<number[]>(
    Array.from({ length: 8 }).map((_) => Math.floor(Math.random() * 100))
  );
  const not_so_reactive = percentages();

  const handleChange = (e: Event) => {
    const element = e.currentTarget as HTMLInputElement;
    const index = Number.parseInt(element.id);
    const value = Number.parseInt(element.value);
    console.log("Das");
    setPercentages((prev) => {
      const newPercentages = [...prev];
      newPercentages[index] = value;
      return newPercentages;
    });
  };

  return (
    <>
      <header class="h-10 bg-accent-500 flex justify-center items-center">
        <h1>Border-radius Previewer</h1>
      </header>
      <main class="bg-red-600 relative">
        <ul class="flex flex-col w-80  gap-2 -rotate-90 fixed top-52 ">
          <For each={percentages()}>
            {(item, index) => (
              <section class="flex">
                <input
                  id={index().toString()}
                  onInput={handleChange}
                  type="range"
                  class="range h-6 w-[100%]"
                  min="0"
                  step={1}
                  max="100"
                />
                <h1 class="p-1 rotate-90 ">{item}</h1>
              </section>
            )}
          </For>
        </ul>
        <div
          class="fixed h-[75dvh] w-[75dvh] top-24 left-[55dvh] bg-red-700"
          style={{
            "border-radius": `${percentages()[0]}% ${percentages()[1]}% ${
              percentages()[2]
            }% ${percentages()[3]}% / ${percentages()[4]}% ${
              percentages()[5]
            }% ${percentages()[6]}% ${percentages()[7]}%`,
          }}
        >
          l
        </div>
      </main>
    </>
  );
}

export default App;
