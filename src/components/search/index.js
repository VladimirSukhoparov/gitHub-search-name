import "style.css";
import { cn as bem } from "@bem-react/classname";
import { memo, useRef } from "react";
import { useState } from "react";
import useStore from "../../store/useStore";

const Search = () => {
  const cn = bem("Container");
  const [name, setName] = useState(null);
  const searchText = useRef(null);
  const store = useStore();

  function searchName() {
    store.search(name);
    searchText.current.value=''
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchName();
      searchText.current.value=''
    }
  };

  return (
    <div className={cn()}>
      <label className={cn("label")}>Введите данные для поиска:</label>
      <input
        type="text"
        name="search"
        id="search"
        className={cn("search")}
        ref={searchText}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        id="search__btn"
        className={cn("btn")}
        type="button"
        value="Найти"
        onClick={searchName}
      />
      <hr />
    </div>
  );
};

export default memo (Search);
