export default function Introduction() {
    return <>
        <div className='grid grid-cols-3 gap-10 font-normal text-8xl pb-5'>
            <div>Architect</div>
            <div></div>
            <div></div>
            <div></div>
            <div className='flex justify-center'>Innovate</div>
            <div></div>
            <div></div>
            <div></div>
            <div className='flex justify-end'>Propel</div>
        </div>
        <div className="border-t border-gray-300 pb-5"></div>
        <h1 className='font-bold text-4xl mt-20'>About me</h1>
        <p className={`font-light text-xl pt-5 pb-5`}>
            Hello! I am an alchemist of the tech world. Be it architecting and design awesome applications from scratch, give life to your ideas, or make your business go to the next level. I am your guy!
        </p>
    </>;
}