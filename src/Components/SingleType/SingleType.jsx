import "./SingleType.css";
export default function SingleType({ icon, title, subtitle, categoryId }) {
  const handleClick = () => {
    window.location.href = `/lawyers/${categoryId}`;
  };

  return (
    <div
      className="singlType flex-grow flex flex-col items-center justify-center p-4 border rounded-lg shadow-md m-2"
      onClick={handleClick}
    >
      <span className="text-4xl">{icon}</span>
      <h1 className="text-xl mt-2">{title}</h1>
      <p className="text-sm mt-1">{subtitle}</p>
    </div>
  );
}
