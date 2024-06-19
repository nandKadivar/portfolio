const TimelineBar = ({bar}: {bar : {title:string, description: string}}) => {
  return (
    <div className="p-2 flex flex-col justify-center bg-slice-bg">
        <span className="font-medium text-sm md:text-sm text-xs leading-none text-dark-gray timeline-text-title">{bar.title}</span>
        <span className="text-xs text-gray leading-none timeline-text-body">{bar.description}</span>
    </div>
  );
};

export default TimelineBar;