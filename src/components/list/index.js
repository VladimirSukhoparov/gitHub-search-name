import "style.css";
import { cn as bem } from "@bem-react/classname";
import Item from "../item";
import { memo } from 'react';

const List = ({list}) => {
    const cn = bem("List")
  return (
    <div className={cn()}>
      {list && list.map((el) => (
        <Item item={el} key={el.id}/>
      ))}
    </div>
  );
};

export default memo(List);
