import Image from "next/image";
import { useEffect, useState } from "react";


export default function Rating({ given, total, idx }) {

    useEffect(() => {
        let rating = [];
        for (let i = 0; i < given; i++) {
            rating.push(
                <Image className="mr-2"
                    src={`/icons/goldstar.svg`}
                    key={`${idx}_${i}_gold`}
                    alt="star"
                    width={20}
                    height={20}
                />
            );
        }


        let totalRating = [];

        for (let i = 0; i < (total - given); i++) {
            totalRating.push(<Image className="mr-2"
                src={`/icons/emptystar.svg`}
                key={`${idx}_${i}_empty`}
                alt="star"
                width={20}
                height={20}
                priority
            />);
        }

        setGivenStars(rating);
        setTotalStars(totalRating);

    }, [idx, given, total]);

    const [givenStars, setGivenStars] = useState([]);
    const [totalStars, setTotalStars] = useState([]);


    return (<div className="flex">
        {givenStars}
        {totalStars}
    </div>
    );
}