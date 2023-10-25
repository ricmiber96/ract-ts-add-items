import { ItemId } from "../App";

export default function Item({text, handleClick}:{id:ItemId, text:string, handleClick:()=>void}) {
    return (
        <li>
        {text}
        <button onClick={handleClick}>
          Eliminar elemento
        </button>
      </li>
    );
}

