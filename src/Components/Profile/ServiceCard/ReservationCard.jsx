const ReservationCard = ({ price, info, type }) => {
  return (
    <div className="bg-gray-50 shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">معلومات الحجز</h2>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{type}</h3>
          <p className="text-xs">{info}</p>
        </div>
        <div>
          <p className="text-xs font-bold">سعر الخدمة </p>
          <p className=" text-green-400 px-1">{price}ر.س</p>
        </div>
      </div>
      <button className="bg-yellow-600 text-white font-semibold py-1 px-4 rounded-lg mx-auto block w-2/3">
        طلب الخدمة
      </button>
    </div>
  );
};

export default ReservationCard;
