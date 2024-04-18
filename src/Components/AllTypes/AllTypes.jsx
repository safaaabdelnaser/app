import { useState, useEffect } from "react";
import axios from "axios";
import SingleType from "../SingleType/SingleType";
import SearchBar from "../SearchBar/SearchBar";
import "./AllTypes.css";

export default function AllTypes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ymtaz.sa/api/client/digital-guide/categories"
        );
        setCategories(response.data.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const items = categories.map((category) => ({
    icon: <img src={category.image} className="w-[50px] rounded-full" />,
    title: category.title,
    subtitle: `متوفر عدد ${category.lawyers_count}`,
    categoryId: category.id,
  }));

  const filteredItems = items.filter(
    (item) =>
      item.title.includes(searchTerm) || item.subtitle.includes(searchTerm)
  );
  const numRows = Math.ceil(filteredItems.length / 3);

  return (
    <div className="flex flex-col items-center w-full dir-rtl">
      <h1 className="text-bold my-2 font-25">الدليل الرقمى</h1>
      <SearchBar onSearch={setSearchTerm} />
      {[...Array(numRows)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-center mt-4 ">
          {filteredItems
            .slice(rowIndex * 3, rowIndex * 3 + 3)
            .map((item, index) => (
              <SingleType key={index} {...item} className="AllsinglType" />
            ))}
        </div>
      ))}
    </div>
  );
}
