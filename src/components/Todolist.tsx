import {IItem} from "../types/todo";

interface IProps {
  items: IItem[];
}

export const TodoList: React.FC<IProps> = (props) => {
  return (
    <>
      <h1>{"TODOS"}</h1>
      <ul>
        {props.items.map((item) => (
          <li key={Math.random().toString() + Date.now().toString()}>
            <p>{item.text}</p>
            <p>{item.id}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
