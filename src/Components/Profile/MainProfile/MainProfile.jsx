// Card component for reservation information
import { useEffect, useState } from "react";
import "./MainProfile.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import ReservationCard from "./../ServiceCard/ReservationCard";

// Card component for personal information
const PersonalInfoCard = ({
  name,
  about,
  phone,
  image,
  phone_code,
  details,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 flex items-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h2 className="text-xl font-semibold mb-4 mx-2">{name}</h2>
        <h4 className="text-gray-600 mb-2 mx-2">{about}</h4>
        {/* Rating */}
        <div className="flex items-center mx-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 mr-1" />
          ))}
          <span className="text-gray-600 ml-2">500 تقييمات من 1600 عميل</span>
        </div>
        <h5 className="text-gray-600 mb-2 mx-2">
          {" "}
          {phone} ( {phone_code})
        </h5>
        <p className="text-gray-600 mb-2 mx-2">{details}</p>
      </div>
    </div>
  );
};

// Card component for bio information
const BioCard = ({ bio }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 ">
      <h2 className="text-xl font-semibold mb-4">نبذة عني</h2>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

// Card component for customer reviews

const ReviewCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex justify-between">
      {/* Customer Rating */}
      <div className="flex items-center flex-col">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 mr-1" />
          ))}
        </div>
        <p className="text-gray-600 mb-1">تقيم العملاء</p>
      </div>

      {/* Platform Rating */}
      <div className="flex items-center flex-col">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 mr-1" />
          ))}
        </div>
        <p className="text-gray-600 mb-1">تقيم المنصة</p>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex items-center text-gray-600 mb-0 mr-2 bg-yellow-400 rounded p-1">
          5/5
        </div>
        <p className="text-gray-400 mb-0">تقيم الاستشارين</p>
      </div>
    </div>
  );
};

// Component to display a list of reviews
const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

const MainProfile = () => {
  // const { categoryId } = useParams();
  const [lawyerData, setLawyerData] = useState(null);
  const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ymtaz.sa/api/client/lawyer/5218",
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        setLawyerData(response.data.data.lawyer);
      } catch (error) {
        console.error("Error fetching lawyer data:", error);
      }
    };

    fetchData();
  }, []);

  if (!lawyerData) {
    return <p>Loading...</p>;
  }

  // Sample data for personal information
  const personalInfo = {
    name: lawyerData.name,
    about: lawyerData.about,
    phone: lawyerData.phone,
    phone_code: lawyerData.phone_code,
    image: lawyerData.cv,
    details: lawyerData.accurate_specialty.title,
    // name: "ss",
    // about: "hdh",
    // phone: 5522,
    // phone_code: 555,
    // image: "hhdhdh",
  };

  // Sample data for bio information
  const bioInfo = {
    // bio: "",
    bio: `انا ${lawyerData.name} ${lawyerData.about} حاصل على ${lawyerData.degree.title} فى القانون`,
  };
  // Sample data for customer reviews
  const reviews = [{}, {}, {}];
  console.log(lawyerData);

  if (!lawyerData) {
    return <p>Loading...</p>;
  }
  const lawyerServices = lawyerData.services.map((service) => (
    <ReservationCard
      key={service.service_id}
      price={service.ymtaz_price}
      info={service.intro}
      type={service.title}
    />
  ));
  return (
    <div className="container mx-auto py-8 containerProfile mt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {/* Personal Information Card */}
          <PersonalInfoCard {...personalInfo} />
          {/* Bio Card */}
          <BioCard {...bioInfo} />
          {/* Review List */}
          <h2 className="text-2xl font-semibold mb-4">تقييمات العملاء</h2>
          <ReviewList reviews={reviews} />
        </div>
        {/* Reservation Card */}
        <div className="">{lawyerServices}</div>
      </div>
    </div>
  );
};

export default MainProfile;
