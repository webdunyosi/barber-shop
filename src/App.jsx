import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-black web-pattern">
      {/* Header with backdrop blur */}
      <header className="backdrop-blur-md bg-black/30 border-b border-lime-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-lime-400 modern-heading text-center">
            Barber Shop
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-lime-500/20">
          <h2 className="text-5xl font-bold text-lime-400 modern-heading text-center mb-6">
            Professional Haircuts & Grooming
          </h2>
          <p className="text-white/80 text-center text-lg max-w-2xl mx-auto">
            Welcome to our modern barber shop. We provide premium haircuts, beard trims, and grooming services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-lime-400 modern-heading text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all">
            <h3 className="text-2xl font-bold text-lime-400 modern-heading mb-3">
              Classic Haircut
            </h3>
            <p className="text-white/70">
              Traditional and modern haircuts tailored to your style
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all">
            <h3 className="text-2xl font-bold text-lime-400 modern-heading mb-3">
              Beard Trim
            </h3>
            <p className="text-white/70">
              Professional beard shaping and grooming services
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-lime-500/20 hover:border-lime-500/40 transition-all">
            <h3 className="text-2xl font-bold text-lime-400 modern-heading mb-3">
              Hot Towel Shave
            </h3>
            <p className="text-white/70">
              Luxury straight razor shave with hot towels
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-lime-500/20">
          <h2 className="text-4xl font-bold text-lime-400 modern-heading text-center mb-6">
            About Us
          </h2>
          <p className="text-white/80 text-center text-lg max-w-3xl mx-auto">
            With over 20 years of experience, our skilled barbers are dedicated to providing 
            exceptional grooming services in a modern and comfortable environment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-black/30 border-t border-lime-500/20 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-lime-400/80">© 2026 Barber Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App