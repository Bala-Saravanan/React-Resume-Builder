import { useState } from "react";
import Button from "./ui/Button";
import Preview from "./Preview";

export default function Form({ title, fields, state, changefn }) {
  const [preview, setPreview] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    changefn((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-[500px] h-fit rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg p-4">
      <h1 className="text-2xl font-bold text-black mb-4">{title}</h1>
      {!preview && (
        <ul className="flex flex-col items-center space-y-2">
          {fields.map((field, idx) => (
            <li key={idx} className="flex justify-between w-full">
              <label
                htmlFor={field.id}
                className="text-lg font-semibold text-black"
              >
                {field.label}:
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                name={field.id}
                value={state[field.id]}
                id={field.id}
                className="w-4/5 h-[35px] rounded-sm p-1 border-1 border-gray-200 outline-1 outline-indigo-500"
                onChange={handleChange}
              />
            </li>
          ))}
        </ul>
      )}
      {preview && <Preview info={state} />}
      <div className="flex justify-end gap-5 mt-4">
        {!preview && (
          <Button text={"Submit"} onClick={() => setPreview(true)} />
        )}
        {preview && <Button text={"Edit"} onClick={() => setPreview(false)} />}
      </div>
    </div>
  );
}
