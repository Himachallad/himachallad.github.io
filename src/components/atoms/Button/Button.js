export default function Button({ children, ...props }) {
    return <button className='mr-[10px]' {...props}>{children}</button>;
}