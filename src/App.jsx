import React from 'react'

const App = () => {
  const barbers = [
    { id: 1, name: 'Javohir', specialty: 'Professional Stylist', image: '/barber/1.png' },
    { id: 2, name: 'Sardor', specialty: 'Master Barber', image: '/barber/2.png' },
    { id: 3, name: 'Bobur', specialty: 'Hair Specialist', image: '/barber/3.png' },
    { id: 4, name: 'Akmal', specialty: 'Expert Barber', image: '/barber/4.png' },
  ]

  return (
    <div className="web-pattern min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header - lime color */}
        <h1 className="text-5xl font-bold text-center mb-4">
          Barber Shop
        </h1>
        
        {/* Subheading - lime color */}
        <h2 className="text-3xl text-center mb-8">
          Professional Hair & Beard Styling
        </h2>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">
                Haircut
              </h3>
              <p className="text-gray-300">
                Professional haircut and styling tailored to your preference
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">
                Beard Trim
              </h3>
              <p className="text-gray-300">
                Expert beard trimming and shaping for the perfect look
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">
                Hot Towel Shave
              </h3>
              <p className="text-gray-300">
                Traditional hot towel shave experience
              </p>
            </div>
          </div>
        </section>

        {/* Our Barbers Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Our Expert Barbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barbers.map((barber) => (
              <div key={barber.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={barber.image} 
                  alt={barber.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {barber.name}
                  </h3>
                  <p className="text-gray-400">{barber.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App