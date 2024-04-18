export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="ابحث..."
      className="p-2 border rounded-md outline-none w-2/5"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
