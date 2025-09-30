export default function Button({ text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-indigo-500 text-white font-medium text-xl py-2 px-5 rounded-xl cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
}
