import { useState } from 'react';
import BreedList from './components/BreedList';
import { catBreeds, dogBreeds, ageStages } from './data/breeds';

function App() {
  const [activeTab, setActiveTab] = useState('dogs');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🐾</span>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Pet Breed Weight Tracker
                </h1>
                <p className="text-sm text-gray-500">
                  Track weight growth for cats and dogs
                </p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('dogs')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'dogs'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                🐕 Dogs
              </button>
              <button
                onClick={() => setActiveTab('cats')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'cats'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                🐱 Cats
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐕</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dog Breeds</p>
                <p className="text-2xl font-bold text-gray-800">{dogBreeds.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Cat Breeds</p>
                <p className="text-2xl font-bold text-gray-800">{catBreeds.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Age Stages</p>
                <p className="text-2xl font-bold text-gray-800">{ageStages.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Breed Lists */}
        {activeTab === 'dogs' && (
          <BreedList
            breeds={dogBreeds}
            title="Dog Breeds"
            emoji="🐕"
            ageStages={ageStages}
          />
        )}

        {activeTab === 'cats' && (
          <BreedList
            breeds={catBreeds}
            title="Cat Breeds"
            emoji="🐱"
            ageStages={ageStages}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500">
          <p>
            🐾 Pet Breed Weight Tracker • Weight data shown is approximate and
            may vary by individual pet
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
