import { useParams } from "react-router-dom";
import "../SingleType/SingleType.css";

const LawyerDetails = ({ lawyer }) => {
  const { categoryId } = useParams();
  console.log(categoryId);

  return (
    <>
      <div className="flex justify-center items-center h-full mt-[100px]">
        <div>
          <div className="flex justify-center items-center h-full">
            <div className="my-[20px] mx-[20px]">
              {lawyer.sections.map(
                (section) =>
                  section.section.id == categoryId && (
                    <h1 key={section.id}>{section.section.title}</h1>
                  )
              )}
            </div>
          </div>

          <div className="singlType flex-grow flex flex-col items-center justify-center p-4 border rounded-lg shadow-md m-2">
            <span>
              <img
                src={lawyer.logo}
                alt={lawyer.name}
                className="w-[50px] rounded-full"
              />
            </span>
            <div>
              <h2 className="text-xl mt-2">{lawyer.name}</h2>
              <p className="text-sm mt-2">{lawyer.about}</p>
              <p className="text-xs mt-2 mx-[40px]">
                (مراجعة){(lawyer.rate_count = 456)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerDetails;
