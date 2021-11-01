import { CustomDateInput } from "./components/CustomDateInput/CustomDateInput";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.App}>
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <CustomDateInput />
        </div>
      </main>
    </div>
  );
}

export default App;
