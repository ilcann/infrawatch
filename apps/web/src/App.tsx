function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {process.env.NODE_ENV}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tailwind CSS ile güçlendirildi! 🎨
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Birincil Buton
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            İkincil Buton
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
