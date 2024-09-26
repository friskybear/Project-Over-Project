import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createSignal } from "solid-js";
function App() {
  const [data, set_data] = createSignal(0);
  return (
    <>
      <header
        class="flex justify-center items-center h-10 bg-rose-700"
        data-tauri-drag-region
      >
        <h1 class="">Bin2Dec</h1>
      </header>
      <main class="m-1 flex justify-center items-center flex-col">
        <input
          type="text"
          pattern="[0-1]*"
          maxLength={16}
          class="input input-accent m-1"
          onInput={(e) => {
            const input = e.currentTarget;
            input.value = input.value.replace(/[^01]/g, '');
            const binary = input.value;
            if (binary) {
              const decimal = Number.parseInt(binary, 2);
              set_data(decimal);
            } else {
              set_data(0);
            }
          }}
          onKeyPress={(e) => {
            if (e.key !== '0' && e.key !== '1') {
              e.preventDefault();
            }
          }}
        />
        <input
          type="number"
          class="input input-secondary m-1"
          value={data()}
          readOnly
        />
      </main>
    </>
  );
}
export default App;
