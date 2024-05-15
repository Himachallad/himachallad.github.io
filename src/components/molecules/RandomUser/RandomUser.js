import Image from "next/image";
import { useEffect, useState } from "react";


export default function RandomUser({ idx = 0 }) {

    useEffect(() => {
        const randomUserMap = { "0": "blonde_girl", "1": "business_woman", "2": "businessman", "3": "mature_man", "4": "old_female", "5": "teenager" };
        let randomUser = [];
        const len = Object.keys(randomUserMap).length;
        const newIdx = idx % len;
        randomUser.push(
            <Image className="mr-2 mb-5"
                src={`/icons/users/${randomUserMap[newIdx]}.svg`}
                key={idx}
                alt="star"
                width={120}
                height={120}
            />
        );

        setRandomUser(randomUser);

    }, [idx]);

    const [randomUser, setRandomUser] = useState([]);


    return (<div className="flex">
        {randomUser}
    </div>
    );
}