const LoadingAnimation = () => {
  return (
    <div className="w-full h-full bg-[rgba(0,0,0,0.3)] z-0  flex items-center justify-center text-center relative">
      <div className="items-center border-[6px] border-t-sky-500 to-blue-500  flex animate-spin justify-center rounded-full w-14 h-14 "></div>
    </div>
  );
};

export default LoadingAnimation;
