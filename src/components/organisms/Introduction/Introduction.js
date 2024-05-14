import { Divider } from 'antd';
import styles from './styles.module.css';

export default function Introduction() {
    return <>
        <div className='grid grid-cols-3 md:gap-[100px] gap-10 font-normal md:text-[100px] my-[50px] text-4xl'>
            <div className={`text-green-600 flex justify-center ${styles["scale-out"]}`}>Architect</div>
            <div></div>
            <div></div>
            <div></div>
            <div className={`text-green-600 flex justify-center ${styles["scale-out"]}`}>Innovate</div>
            <div></div>
            <div></div>
            <div></div>
            <div className={`text-green-600 flex justify-end ${styles["scale-out"]}`}>Excel</div>
        </div>
        <Divider />
        <h1 className='font-bold text-4xl mt-20'>About me</h1>
        <p className={`font-light text-xl pt-10 pb-5`}>
            Hello! I am an alchemist of the tech world. Be it architecting and design awesome applications from scratch, give life to your ideas, or make your business go to the next level. I am your guy!
        </p>
    </>;
}