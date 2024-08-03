import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';



const continents = [
  { src: 'africa.jpeg', alt: 'Africa', gdp: '1.2 trillion USD' },
  { src: 'asia.jpeg', alt: 'Asia', gdp: '31.6 trillion USD' },
  { src: 'europe.jpeg', alt: 'Europe', gdp: '22.3 trillion USD' },
  { src: 'northamerica.jpeg', alt: 'North America', gdp: '25.7 trillion USD' },
  { src: 'southamerica.jpeg', alt: 'South America', gdp: '5.3 trillion USD' },
  { src: 'australia.png', alt: 'Australia', gdp: '1.4 trillion USD' },
  { src: 'antractica.png', alt: 'Antarctica', gdp: 'Unknown' },
];

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [worldGDP, setWorldGDP] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [hoveredContinent, setHoveredContinent] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common);
        setCountries(countryNames);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCountries();

    const fetchWorldGDP = async () => {
      try {
        const response = await fetch('http://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.CD?format=json');
        const data = await response.json();
        const latestData = data[1].filter(item => item.value !== null).sort((a, b) => new Date(b.date) - new Date(a.date))[0];
        setWorldGDP(latestData.value);
      } catch (err) {
        setError(err);
      }
    };

    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setExchangeRate(response.data.rates.INR);
      } catch (err) {
        setError(err);
      }
    };

    fetchWorldGDP();
    fetchExchangeRate();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-red-500">Error fetching data: {error.message}</div>;
  }

  const data = {
    labels: ['World GDP'],
    datasets: [
      {
        label: 'Current World GDP (USD)',
        data: [worldGDP],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 16,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: 'white',
          font: {
            size: 16,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white',
          font: {
            size: 18,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        footerFont: {
          size: 12,
        },
      },
    },
  };

  const formattedWorldGDP = worldGDP ? `$${worldGDP.toLocaleString()}` : 'Loading...';
  const convertedGDP = worldGDP && exchangeRate ? `₹${(worldGDP * exchangeRate).toLocaleString()}` : 'Loading...';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <section id="section1" className="flex flex-col md:flex-row p-8">
        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-start p-8">
          <h1 className="text-4xl font-bold mb-4">What is GDP?</h1>
          <p className="text-lg mb-4">
            Gross Domestic Product (GDP) is a monetary measure of the market value of all the final goods and services produced in a specific time period by countries.
          </p>
          <p className="text-lg">
            GDP is important because it gives information about the size of the economy and how an economy is performing. The real GDP (constant prices) considers inflation and provides a more accurate assessment of growth.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center p-8 ml-3">
          <h1 className="text-4xl font-bold mb-4">Current World GDP</h1>
          {worldGDP ? (
            <>
              <div className="text-3xl mb-4">{formattedWorldGDP}</div>
              <div className="text-2xl mb-4">{convertedGDP}</div>
              <div className="w-full h-64">
                <Bar data={data} options={options} />
              </div>
            </>
          ) : (
            <div>Loading world GDP data...</div>
          )}
        </div>
      </section>

      <div className="flex flex-wrap justify-center">
        {continents.map((continent, index) => (
          <div key={index} className="relative">
            <img
              src={continent.src}
              alt={continent.alt}
              className="h-32 w-auto m-2 rounded-lg shadow-lg"
              onMouseEnter={() => setHoveredContinent(continent)}
              onMouseLeave={() => setHoveredContinent(null)}
            />
            {hoveredContinent === continent && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 rounded-b-lg">
                <p className="text-lg font-bold">{continent.alt}</p>
                <p className="text-sm">{continent.gdp}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
