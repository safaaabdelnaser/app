const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
          <p className="text-gray-600 mb-2">{review.text}</p>
          <p className="text-gray-400">{review.text2}</p>
          <p className="text-gray-400">{review.text3}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
