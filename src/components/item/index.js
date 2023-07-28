import "style.css"
import { cn as bem } from "@bem-react/classname";
import { memo } from 'react';

const Item = ({ item }) => {
  const cn = bem("Item");
  console.log(item);
  return (
    <div className={cn()}>
        <img src={item.avatar_url} className={cn("Avatar")} />
      <div className={cn("Box")}>
        <p className={cn("Login")}>{item.login}</p>
      <a href={item.html_url} target="_blank" className={cn("Link")}>
        {item.html_url}
      </a>
      </div>
    </div>
  );
};

export default memo(Item);
