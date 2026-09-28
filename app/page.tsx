"use client";

import About from "@/components/about";
import BookingModal from "@/components/booking-modal";
import Differentials from "@/components/differentials";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Location from "@/components/location";
import Results from "@/components/results";
import Services from "@/components/services";
import { Service } from "@/lib/services";
import { useState } from "react";

export default function Home() {
  const [bookingService, setBookingService] = useState<Service | null>(null);

  function openBooking(service?: Service) {
    setBookingService(service ?? null);
  }

  function closeBooking() {
    setBookingService(null);
  }

  return (
    <>
      <Header onBooking={openBooking} />
      <Hero onBooking={openBooking} />
      <About />
      <Services onBooking={openBooking} />
      <Results />
      <Differentials />
      <Location onBooking={openBooking} />
      <FinalCTA onBooking={openBooking} />
      <Footer onBooking={openBooking} />

      <BookingModal service={bookingService} onClose={closeBooking} />
    </>
  );
}
