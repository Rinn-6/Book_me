

import Banner from "./components/Banner";
import Header from "./components/Header";
import SmallCard from "./components/SmallCard";
import MediumCard from "./components/MediumCard";
import data from "./data/SmallCardData.js";
import mediumCardData from "./data/MediumCardData";
import LargeCard from "./components/LargeCard";
import Footer from "./components/Footer";

export default function Home() {
  const cards = data.map((card) => {
    return (
      <SmallCard
        key={card.img}
        img={card.img}
        location={card.location}
        distance={card.distance}
      />
    );
  });

  const mediumCards = mediumCardData.map((mediumCard) => {
    return (
      <MediumCard
      key={mediumCard.img}
      img={mediumCard.img}
      title={mediumCard.title}
      />
    )
  })
  return (
    <div>
      <Header />
      <Banner />
      <main className=" max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cards}
          </div>
        </section>

        <section>
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className=" flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
            {mediumCards}</div>
        </section>
        <LargeCard
        img='https://cdn.pixabay.com/photo/2022/05/07/00/33/village-7179243_1280.jpg' 
        title='The Greatest Outdoors'
        description='Wishlists curated by Bookme'
        buttonText='Get Inspired'
        />
      </main>
     <Footer/>
     
    </div>
  );
}

