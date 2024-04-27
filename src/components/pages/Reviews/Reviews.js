"use client";
import { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Rating from "@/components/molecules/Rating/Rating";
import RandomUser from "@/components/molecules/RandomUser/RandomUser";

export default function Reviews() {
    useEffect(() => {
        const reviewComments = ["SEO expert who helped me scale my business, Thanks for your time!",
            "Nikhil works fast and always deliver a clean job, easy to read and easy for manage. He is an expert.",
            "I am very happy and grateful to Nikhil. He understood my need very quickly and has developed my project in a very fast time. He has a great knowledge of Python and other tools. He is very kind and empathic with me. Its programming is very very neat and clean, which allows me to find everything within the code easily. We communicate perfectly in English. Nikhil's kindness and seriousness is very important to me. I will definitely continue to work with Nikhil and recommend him to you guys.",
            "Nikhil did improved the current architecture of the web application to make it smooth and fast.",
            "Nikhil was very quick to understand all the requirements I gave him. On top of that he went out of his way to complete the work quicker than expected. Would definitely recommend him for any web development needs",
            "Good job. Fast and clean."
        ];

        const finalReviews = reviewComments.map((comment, idx) => {
            return (<div key={idx}>
                <RandomUser idx={idx} />
                <Rating idx={idx} given={5} total={5} />
                <div className="mt-10">
                    {comment}
                </div>
            </div>);
        });
        setReviews(finalReviews);
    }, []);

    const [reviews, setReviews] = useState([]);

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return <>
        <h1 className='font-bold text-4xl mt-20'>Reviews</h1>
        <Carousel autoplay
            autoplaySpeed={5000} className="bg-green-200 mt-5 mb-20 p-10 leading-[20px] text-xl tracking-wide rounded-md" afterChange={onChange}>{reviews}</Carousel >
    </>;
}