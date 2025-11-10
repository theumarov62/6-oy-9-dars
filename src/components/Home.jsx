import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 12;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // Pagination qismi
  // meniki emas AI
  // aynan pagination qism
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const currentCountries = countries.slice(firstIndex, lastIndex);

  const totalPages =
    parseInt(countries.length / countriesPerPage) +
    (countries.length % countriesPerPage > 0 ? 1 : 0);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  // Pagination logikasi tugadi :)

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Where in the world?
      </h1>

      {/* Barcha Cardlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentCountries.map((country) => (
          // Umumiy card
          <div
            key={country.name.common}
            onClick={() => navigate(`/country/${country.name.common}`)}
            className="p-5 bg-white border border-gray-200 rounded-2xl cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              {country.name.common}
            </h2>
            <p className="text-gray-600">Region: {country.region}</p>
            <p className="text-gray-600">Poytaxt: {country.capital?.[0]}</p>
            <p className="text-gray-600">Aholi: {country.population}</p>
          </div>
        ))}
      </div>

      {/* Pagination qism */}
      {/* meniki emas AI */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-5 py-2 cursor-pointer bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Oldingi
        </button>

        <span className="text-gray-700 font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-5 py-2 bg-gray-100 cursor-pointer text-gray-700 font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Keyingi
        </button>
      </div>
      {/* Pagination ishlatish qismi tugadi */}
    </div>
  );
}
