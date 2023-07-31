export interface TextFieldInterface {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  setValue(value: string): void;
  className?: string;
}
export function TextField(props: TextFieldInterface) {
  return (
    <input
      className={
        "border-purple-500 border-2 rounded-sm flex-grow flex left-0 text-center h-16 w-full " +
        (props.className ? props.className : "")
      }
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
    />
  );
}
