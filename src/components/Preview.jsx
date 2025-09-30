export default function Preview({ info }) {
  const keys = Object.keys(info);
  return (
    <div>
      <ul>
        {keys.map((field, idx) => (
          <li key={idx} className="flex gap-2">
            <div className="text-lg font-semibold text-black">
              {[field[0].toUpperCase() + field.substring(1)]}:{" "}
            </div>
            <div className="text-lg">{info[field]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
