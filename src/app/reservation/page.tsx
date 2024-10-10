export default function Reservation(){
    return(
        <main className="mt-16">
            <div className="min-h-screen bg-white py-10">
      {/* Reservation Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">Reservation</h1>
        <p className="mt-2 italic">
          <span className="font-bold">#Caffè</span> provides both online and offline table reservations for our customers.
        </p>
      </header>

      {/* Reservation Form */}
      <div className="container mx-auto px-6">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">


          {/* Name */}

          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-user"></i>
            </span>
          </div>

          {/* Phone */}


          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-phone"></i>
            </span>
          </div>

          {/* Email */}


          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-envelope"></i>
            </span>
          </div>

          {/* Number of People */}


          <div className="relative">
            <label htmlFor="people" className="block text-sm font-medium text-gray-700">
              Number of people:
            </label>
            <input
              type="number"
              id="people"
              placeholder="Enter number of people"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-users"></i>
            </span>
          </div>

          {/* Date */}


          <div className="relative">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-calendar"></i>
            </span>
          </div>

          {/* Time */}


          <div className="relative">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time:
            </label>
            <input
              type="time"
              id="time"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <span className="absolute right-2 top-2 text-gray-500">
              <i className="fas fa-clock"></i>
            </span>
          </div>
        </form>


        {/* Reservation Button */}


        <div className="flex justify-center mt-6">
          <button className="bg-[#461111] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-brown-700">
            Reservation Now
          </button>
        </div>

        {/* Footer Note */}


        <div className="text-center mt-4 text-xs text-gray-500">
          <p className="flex items-center justify-center gap-2">
            <i className="fas fa-exclamation-triangle text-red-500"></i>
            Reservations can be held for 15 mins. We won't refund cancellations done after 15 mins of hold; however, cancellation within 15 mins would be refunded.
          </p>
        </div>
      </div>
    </div>
        </main>
    )
}

