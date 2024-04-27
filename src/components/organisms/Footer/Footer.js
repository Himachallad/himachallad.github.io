import Image from 'next/image';

export default function Footer() {
    return <>
        <div className="p-8 flex flex-row justify-end bg-green-400 gap-4">
            <div className="flex flex-col">
                <div className="text-white flex mb-5">
                    <a href="https://www.linkedin.com/in/himachallad/" target="_blank" rel="noopener noreferrer" className="flex">
                        <Image className="linkedin mr-2 cursor-pointer"
                            src={`/icons/social/linkedin.svg`}
                            key={"linkedin"}
                            alt="linkedin-logo"
                            width={20}
                            height={20}
                        />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~017c77e6882cfe931f" target="_blank" rel="noopener noreferrer" className="flex">
                        <Image className="upwork mr-2 cursor-pointer"
                            src={`/icons/social/upwork.svg`}
                            key={"upwork"}
                            alt="upwork-logo"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="https://github.com/Himachallad" target="_blank" rel="noopener noreferrer" className="flex">
                        <Image className="github cursor-pointer"
                            src={`/icons/social/github.svg`}
                            key={"github"}
                            alt="github-logo"
                            width={20}
                            height={20}
                        />
                    </a>

                </div>
                <div className=" text-white">Copyright © 2024 Nikhil Pathania</div>
            </div>
        </div>
    </>;
}