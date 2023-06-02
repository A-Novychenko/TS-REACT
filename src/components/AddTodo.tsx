import {useState} from "react";
import {IItem} from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

type onlyTitle = Pick<IItem, "text">;

export const AddTodo: React.FC<IProps> = (props) => {
  const [todo, setTodo] = useState<Partial<onlyTitle>>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({text: e.target.value});
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.text) return;
    props.onAddTodo(todo as IItem);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Add text
        <input type="text" onChange={onChange} />
      </label>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

// import {useRef} from "react";

// export const AddTodo: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("input", inputRef.current?.value);

//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label>
//         Add text
//         <input type="text" ref={inputRef} />
//       </label>
//       <button type="submit">ADD TODO</button>
//     </form>
//   );
// };
