import { invoke } from "@tauri-apps/api/core";
import "./App.css";
function App() {
  return (
    <>
      <header class="h-10 flex justify-center bg-primary-500 items-center font-bold">
        Calculator
      </header>
      <main class="flex justify-center items-center">
        <section class=" flex flex-col justify-center p-5 h-[80dvh] items-center w-[50dvh]">
          <input
            type="text"
            class="input input-primary w-[45dvh] h-[15dvh] rounded-2xl mb-5"
          />
          <section class="flex flex-row items-center justify-center flex-wrap">
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              Ac
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              C
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              +
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              -
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              %
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              /
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              *
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              ^
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              9
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              8
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              7
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              6
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              5
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              4
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              3
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              2
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              1
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              0
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              .
            </button>
            <button class="btn btn-circle btn-secondary m-1.5 " type="button">
              =
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
export default App;
