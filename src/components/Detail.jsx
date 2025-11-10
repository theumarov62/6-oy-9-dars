import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  // FETCH api dan ma'lumot olib keladi va SetCountry degan statega saqlidi
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  // Loader
  // !country '!' = (country.lentgh === 0) bo'lsa return ichidagi ma'lumot chiqadi va undan pastdagi tanlangan card ma'lumot chiqdimidi
  if (!country)
    return (
      <h2 className="text-center text-[30px] mt-[400px]">Yuklanyopti . . .</h2>
    );

  // Tanlangan Card
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-10">
      {/* Orqaga qaytish Buttoni */}
      <button
        onClick={() => navigate("/")}
        className="self-start mb-6 absolute bg-gray-200 px-4 cursor-pointer py-2 rounded hover:bg-gray-300 transition"
      >
        Comeback
      </button>

      {/* Tanlangan Card bo'yicha to'liq ma'lumotlar */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-72 h-48 object-cover rounded-xl mx-auto mb-6 border border-gray-200"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {country.name.common}
        </h1>

        <div className="space-y-2 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">Nomi: {country.name.official}</span>
          </p>
          <p>
            <span className="font-bold">Poytaxti: {country.capital}</span>
          </p>
          <p>
            <span className="font-bold">Regioni: {country.region}</span>
          </p>
          <p>
            <span className="font-bold">Aholisi: {country.population}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
