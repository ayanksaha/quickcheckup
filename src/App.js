import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <MainPage params={params} />
      </div>
    </Provider>
  );
}

export default App;
