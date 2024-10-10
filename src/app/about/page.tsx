import Image from "next/image";

export default function About() {
  return (
    <main className="mt-10 mx-5 lg:mx-10">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Left side */}
        <div className="flex-1 mt-10 lg:mt-16 text-center lg:text-left">
          <h1 className="font-bold text-4xl md:text-5xl">About Us</h1>
          <p className="text-base md:text-lg text-gray-600 mt-6 md:mt-8">
            Our main goal since we began has remained basic: acquaint our
            clients with the domains we specifically purchase our extraordinary
            tasting coffee from, broil the beans with consideration, and make
            astounding coffee increasingly available through our bistros and
            our site. The coffee we cook is the coffee we like to drink, and we
            trust you like it as well.
          </p>
          <button className="bg-white py-2 px-6 mt-10 md:mt-16 shadow rounded-3xl hover:bg-gray-100 transition-all">
            Read more
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 mt-8 lg:mt-0">
          <Image
            width={500}
            height={500}
            src="/images/aboutcoffee.png"
            alt="coffee"
            className="mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
