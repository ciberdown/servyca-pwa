import "./app.scss";
import PwaWarning from "./components/pwa-warning";
import Start from "./start/page";

export default function Home() {
  return (
    <main className="app">
      <PwaWarning />

      <Start />
    </main>
  );
}
