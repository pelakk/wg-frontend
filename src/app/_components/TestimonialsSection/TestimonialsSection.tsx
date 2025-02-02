import Image from "next/image";
import React from "react";
import testimonial1 from "./images/testimonial1.png";
import testimonial2 from "./images/testimonial2.png";
import testimonial3 from "./images/testimonial3.png";
import testimonial4 from "./images/testimonial4.png";
import testimonial5 from "./images/testimonial5.png";
import testimonial6 from "./images/testimonial6.png";
import testimonial7 from "./images/testimonial7.png";
import testimonial8 from "./images/testimonial8.png";

export default function TestimonialsSection() {
  return (
    <div className="space-y-20">
      <p className="md:text-6xl font-medium text-center text-4xl">
        Nadal niezdecydowany?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
        <Image src={testimonial1} alt="testimonial1" />
        <Image src={testimonial2} alt="testimonial2" />
        <Image src={testimonial3} alt="testimonial3" />
        <Image src={testimonial4} alt="testimonial4" />
        <Image src={testimonial5} alt="testimonial5" />
        <Image src={testimonial6} alt="testimonial6" />
        <Image src={testimonial7} alt="testimonial7" />
        <Image src={testimonial8} alt="testimonial8" />
      </div>
    </div>
  );
}
