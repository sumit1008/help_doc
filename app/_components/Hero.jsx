import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt=""
                            src="/doc.jpg"
                            width={800}
                            height={800}
                            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Find & Book Appointment with your fav Doctor
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                            minus veniam tempora deserunt? Molestiae eius quidem quam
                            repellat.
                        </p>

                        <Button className="mt-10">Explore Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
