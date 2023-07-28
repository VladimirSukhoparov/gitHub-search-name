import "style.css";
import { cn as bem } from "@bem-react/classname";
import Search from "../../components/search";
import List from "../../components/list";
import Pagination from "../../components/pagination";
import useStore from "../../store/useStore";
import useSelector from "../../store/useSelector";
import { memo, useCallback, useEffect } from "react";

const Main = () => {
  const cn = bem("Main");
  const store = useStore();

  const select = useSelector((state) => ({
    list: state.list,
    currentPage: state.currentPage,
    pageCount: state.pageCount,
  }));

  const callbacks = {
    switchPage: useCallback(
      (pageNumber) => store.switchPage(pageNumber),
      [store]
    ),
  };
  let currentListSearch = select.list.slice((select.currentPage-1)*10, (select.currentPage)*10)
 
  return (
    <div className={cn()}>
      <Search />
      <List list={currentListSearch} />
      {select.list.length>0 && <Pagination
        currentPage={select.currentPage}
        pageCount={select.pageCount}
        switchPage={callbacks.switchPage}
      />}
    </div>
  );
};

export default memo(Main);
