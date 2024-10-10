
export default function Contact(){
    return(
        <main className="mt-16">
            <main className="mt-16">
            <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto p-6">
        <div className="text-4xl font-bold text-left mb-6">Contact</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name here*"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email here*"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message*"
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Right Side - Office Info */}
          <div className="bg-gradient-to-r from-gray-300 to-gray-500 p-6 rounded-lg shadow-md text-white">
            <div className="text-2xl font-bold mb-2">Hashtag Caffè</div>
            <div className="text-lg mb-4">Head Office</div>
            <hr className="border-white mb-4"/>
            <div className="text-base">
              <p>12/2, abc road</p>
              <p>xyz st, west (000000)</p>
              <p>www.notheredef.city</p>
              <p>8.00am - 8.00pm [Monday - Sunday]</p>
            </div>
            

          </div>
        </div>
      </div>
    </div>
        </main>
        </main>
    )
}