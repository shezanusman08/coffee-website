

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
          
                
        </div>


      </section>

  )
}


