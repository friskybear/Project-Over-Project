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
          class="textarea textarea-bordered textarea-primary h-[40dvh] w-full mb-5"
          oninput={(e) => {
            invoke("csv_to_json", { data: e.currentTarget.value }).then(
              (res) => {
                console.log(res);
                if (typeof res === "string" && res.startsWith("error:")) {
                  console.error("Error:", res);
                  set_json("Error parsing CSV to JSON.");
                } else {
                  set_json(JSON.parse(res as string));
                }
              }
            );
          }}
        >
          a
        </textarea>
        <textarea
          name="JSON"
          id="JSON"
          class="textarea textarea-bordered textarea-primary h-[40dvh] w-full"
          readOnly
        >
          {json()}
        </textarea>
      </main>
    </>
  );
}
export default App;
