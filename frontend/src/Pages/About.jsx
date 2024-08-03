import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* <div className="bg-blue-600 text-white text-center py-4">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div> */}
        <div className="p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Our data analysis project focuses on analyzing the nominal and actual GDP of various countries and predicting their future GDP trends. Utilizing advanced data analysis techniques and machine learning algorithms, our project aims to provide accurate insights and forecasts to help policymakers, economists, and researchers.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="flex flex-wrap ">
              <div className="w-[300px] p-1">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Yatharth Singhal</h3>
                  <p className="text-gray-700">Software Engineer</p>
                </div>
              </div>
              <div className="w-[300px] p-1">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Yash Rathore</h3>
                  <p className="text-gray-700">Software Engineer</p>
                </div>
              </div>
              <div className="w-[300px] p-1">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Visnu Batni</h3>
                  <p className="text-gray-700">Software Engineer</p>
                </div>
              </div>
              <div className="w-[300px] p-1">
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">Tarun Kataruka</h3>
                  <p className="text-gray-700">Software Engineer</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Python</li>
              <li>Pandas</li>
              <li>pdfplumber</li>
              <li>NumPy</li>
              <li>LLM Support</li>
              <li>Neo4j Graph Database</li>
              <li>spaCy</li>
              <li>Seaborn</li>
              <li>Plotly</li>
              <li>Folium</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
