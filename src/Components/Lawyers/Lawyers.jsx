import { useEffect, useState } from "react";
import axios from "axios";
import LawyerDetails from "./LawyersDetails";

const LawyerPage = () => {
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

  return (
    <div>
      {lawyerData ? <LawyerDetails lawyer={lawyerData} /> : <p>Loading...</p>}
    </div>
  );
};

export default LawyerPage;
