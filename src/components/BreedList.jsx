import { useState } from 'react';

function BreedCard({ breed, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
        isSelected
          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg'
          : 'bg-white hover:shadow-lg border border-gray-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{breed.image}</span>
        <div>
          <h3 className={`font-semibold text-lg ${isSelected ? 'text-white' : 'text-gray-800'}`}>
            {breed.name}
          </h3>
          <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
            {breed.origin}
          </p>
        </div>
      </div>
    </div>
  );
}

function WeightChart({ breed, ageStages }) {
  const maxWeight = Math.max(...Object.values(breed.weights));

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-5xl">{breed.image}</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{breed.name}</h2>
          <p className="text-gray-500">{breed.origin}</p>
          <p className="text-gray-600 mt-1">{breed.description}</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-700 mb-4">Weight Growth Chart</h3>

      <div className="space-y-4">
        {ageStages.map((age) => {
          const weight = breed.weights[age];
          const percentage = (weight / maxWeight) * 100;

          return (
            <div key={age} className="flex items-center gap-4">
              <div className="w-24 text-sm font-medium text-gray-600">{age}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                >
                  <span className="text-white text-sm font-semibold">{weight} lbs</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <th className="py-3 px-4 text-left rounded-tl-lg">Age</th>
              <th className="py-3 px-4 text-right rounded-tr-lg">Weight (lbs)</th>
            </tr>
          </thead>
          <tbody>
            {ageStages.map((age, index) => (
              <tr
                key={age}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-purple-50 transition-colors`}
              >
                <td className="py-3 px-4 font-medium text-gray-700">{age}</td>
                <td className="py-3 px-4 text-right font-semibold text-purple-600">
                  {breed.weights[age]} lbs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BreedList({ breeds, title, emoji, ageStages }) {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{emoji}</span>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          {breeds.length} breeds
        </span>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredBreeds.map((breed) => (
          <BreedCard
            key={breed.id}
            breed={breed}
            isSelected={selectedBreed?.id === breed.id}
            onClick={() => setSelectedBreed(selectedBreed?.id === breed.id ? null : breed)}
          />
        ))}
      </div>

      {filteredBreeds.length === 0 && (
        <p className="text-center text-gray-500 py-8">No breeds found matching "{searchTerm}"</p>
      )}

      {selectedBreed && <WeightChart breed={selectedBreed} ageStages={ageStages} />}
    </div>
  );
}
