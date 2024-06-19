interface Props {
    color: string,
    opacity?: number,
    title: string,
    children?: React.ReactNode
}
const SkillBucket = (props: Props) => {
    const {title, children} = props;

    return (
        <div className='flex flex-col justify-between border-1 border-dashed border-opacity-20 rounded-sm border-gray' >
            <div className={`grid grid-cols-4 gap-2 p-5`}>
                {children}
            </div>
            <div className={`flex flex-row justify-center font-medium text-gray`}>
                {title}
            </div>
        </div>
    );
}

export default SkillBucket;