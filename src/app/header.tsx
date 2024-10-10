

import Image from 'next/image'

export default function Header() {
  return (
      <section>
      <div className='text-right'>

          <div className="w-full h-[70vh] md:h-[50vh] overflow-hidden">
            <Image
              src="/images/coffeeheader.jpg"
              alt="coffee"
              layout="fill"
              objectFit="cover"
             className="absolute inset-0 w-full h-full z-0"
            />
          </div>
          <h1 className="text-[#461111] text-4xl md:text-6xl lg:text-7xl font-bold absolute top-16 right-10 transition-transform duration-300 hover:scale-105">
          Welcome to Hashtag Caffè
        </h1>
        <p className="text-[#461111] text-lg md:text-xl lg:text-2xl absolute top-36 right-10 transition-transform duration-300 hover:scale-105">
          Your favorite coffee place
        </p>

                
        </div>


      </section>

  )
}


