import { Carousel } from "flowbite-react";
import Image from "next/image";

const testimonials = [
  {
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/YasminWhiteLowRes.jpg?width=290&height=290&name=YasminWhiteLowRes.jpg",
    alt: "Yamin's testimonial",
    text: "When people ask me why I work for Acquisition.com I tell them that there’s no other company I’d rather work for. I truly enjoy working with everyone here and the culture is unlike any other. In my past experience I have worked in companies that frown upon expressing your ideas and speaking up and that’s the complete opposite of how it is to work here at Acquisition.com. Our Leaders strive to ensure every employee has a voice and feels comfortable sharing ideas and that’s super important to me. I love that I always feel connected to my team regardless of working virtually, they are truly just awesome group of people. I would not trade working here to work anywhere else!",
  },
  {
    src: "https://www.acquisition.com/hs-fs/hubfs/Acquisition_September2022/QuinnFulmerLowRes.jpg?width=290&height=290&name=QuinnFulmerLowRes.jpg",
    alt: "Quinn's testimonial",
    text: "This team practices what they preach. Expect your hard work to be appreciated, your insight to be valued, and growth to be encouraged (both personally and professionally). The result: a great place for top performers to call home.",
  },
];

export default function EmployeeTestimonials() {
  return (
    <div className=" flex flex-col items-center py-8">
      <h3 className="px-16 text-center text-5xl font-extrabold">
        OUR PEOPLE <span className=" text-primary-200">SAY IT BEST</span>
      </h3>
      <div className="flex flex-col">
        <div className="h-1/2"></div>
        <div className="flex w-full px-8 py-8 sm:px-16">
          <Carousel>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.alt} testimonial={testimonial} />
            ))}
          </Carousel>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function Card(props: {
  testimonial: { src: string; alt: string; text: string };
}) {
  const { src, alt, text } = props.testimonial;

  return (
    <div className="h-full w-full bg-primary-100 p-[16px]">
      <div className="flex w-full justify-center py-8">
        <Image src={src} alt={alt} height={200} width={200}></Image>
      </div>
      <p className="flex w-full px-12 pb-16 text-center text-white sm:px-24">
        {text}
      </p>
    </div>
  );
}
