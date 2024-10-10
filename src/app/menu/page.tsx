import Image from "next/image";


export default function Menu(){

    // Reusable MenuItem Component
const MenuItem = ({ imgSrc, imgAlt, title }: { imgSrc: string, imgAlt: string, title: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-48">
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
    </div>
  );
  
 
    return(
        <main className="mt-16">
           <div className="min-h-screen bg-white">
      {/* Menu Heading */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Menu</h1>
      </header>

      {/* Menu Grid */}
      <div className="container mx-auto py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Menu Items */}
          <MenuItem
            imgSrc="/images/doppio.jpg"
            title="Doppio"
            imgAlt="Doppio Coffee"
          />
          <MenuItem
            imgSrc="/images/latte-macchiato.jpg"
            title="Latte Macchiato"
            imgAlt="Latte Macchiato"
          />
          <MenuItem
            imgSrc="/images/cappuccino.jpg"
            title="Cappuccino"
            imgAlt="Cappuccino"
          />
          <MenuItem
            imgSrc="/images/vanilla-latte.jpg"
            title="Vanilla Latte"
            imgAlt="Vanilla Latte"
          />
          <MenuItem
            imgSrc="/images/ristretto.jpg"
            title="Ristretto"
            imgAlt="Ristretto Coffee"
          />
          <MenuItem
            imgSrc="/images/chocolatechip.jpg"
            title="Coffee Chocolate Chip Cookies"
            imgAlt="Coffee Chocolate Chip Cookies"
          />
          <MenuItem
            imgSrc="/images/affogato-coffee.jpg"
            title="Affogato Coffee"
            imgAlt="Affogato Coffee"
          />
          <MenuItem
            imgSrc="/images/walnut-cake.jpg"
            title="Walnut Cake"
            imgAlt="Walnut Cake"
          />
          <MenuItem
            imgSrc="/images/italian-rum-cake.jpg"
            title="Italian Rum Cakes"
            imgAlt="Italian Rum Cakes"
          />
          <MenuItem
            imgSrc="/images/classic-pizzelle.jpg"
            title="Classic Pizzelle"
            imgAlt="Classic Pizzelle"
          />
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-600 text-sm">
          <p>
            These are just a few selections of coffee and snacks in our <span className="text-red-500 font-bold">Caffè</span>. 
            There are more in our house, some include traditional Italian snacks and drinks.
          </p>
        </footer>
      </div>
    </div>
  ;
;
        </main>
    )
}