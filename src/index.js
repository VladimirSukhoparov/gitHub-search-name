import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Store from "./store";
import { StoreContext } from "./store/context";
import App from "./app/index";

const root = createRoot(document.getElementById("root"));
const store = new Store();
// Первый рендер приложения
root.render(
  <BrowserRouter>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </BrowserRouter>
);
