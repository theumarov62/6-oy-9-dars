import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  if (!country)
    return (
      <h2 className="text-center font-[80px] mt-[400px]">Yuklanmoqda...</h2>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-10">
      <button
        onClick={() => navigate("/")}
        className="self-start mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Orqaga
      </button>
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
            <span className="font-semibold">Rasmiy nom:</span>
            {country.name.official}
          </p>
          <p>
            <span className="font-semibold">Poytaxt:</span>
            {country.capital?.[0]}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Aholi:</span>
            {country.population}
          </p>
        </div>
      </div>
    </div>
  );
}
