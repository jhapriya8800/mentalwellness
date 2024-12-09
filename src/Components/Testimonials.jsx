import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";

const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonials = () => {
  return (
    <>
      <div id="testimonial" className="bg-[#f7f8fc] py-12">
        <div className="container mx-auto pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-secondary mb-3">
              What Our Clients Say
            </h2>
            <p className="text-lg mb-12 md:w-1/2 mx-auto">
              Hear from some of our satisfied clients about how our services
              have positively impacted their loves and well-being
            </p>
          </div>
          <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-lg p-6 flex-1"
              >
                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <BsFillChatQuoteFill className="size-12 text-primary" />
                </div>
                <div className=" flex flex-col space-y-3 mb-4 ">
                  <p className="text-lg mb-2">{testi.review}</p>
                  <div className="flex gap-1">
                    <img
                      src={testi.image}
                      alt="reviewer images"
                      className="size-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibol">{testi.name}</p>
                      <p className="text-gray-600">{testi.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;