import MotionDivFromBottom from "../home/motion/motionFromBottom";

export function AboutButton() {
  return (
    <button
      className="bg-red-10 group  mt-5 flex w-28 flex-col border-none "
      onClick={() => alert("clicado")}
    >
      <span className="text-md group flex  text-white">
        Saiba Mais <img src={"./arrowLeft.png"} className="p-1" />
      </span>
      <span className=" bottom-0 left-0 z-[1000] h-0.5 w-10 bg-green-500 transition-all duration-300 ease-in-out group-hover:w-[80%]"></span>
    </button>
  );
}
