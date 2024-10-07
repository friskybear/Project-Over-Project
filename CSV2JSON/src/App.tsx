import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { createSignal } from "solid-js";
function App() {
  const [json, set_json] = createSignal("");
  return (
    <>
      <main class="flex flex-col m-10">
          <textarea
            name="CSV"
            id="CSV"
            class="textarea textarea-bordered textarea-primary h-[40dvh] w-full"
          ></textarea>
          <textarea
            name="JSON"
            id="JSON"
            class="textarea textarea-bordered textarea-primary h-[40dvh] w-full"
          >
            {json()}
          </textarea>
      </main>
    </>
  );
}
export default App;
