import { Link } from "react-router-dom";
import { Button } from "../element/Button";
import { TypeAnimation } from "react-type-animation";
import Logo from "../element/Logo";

const Hero = () => {
  return (
    <>
      <div className="bg-white h-auto min-h-screen w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 justify-center items-center px-14 py-28 lg:p-64">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-5 text-black text-justify">
              <h1 className="text-4xl lg:text-6xl text-[#2F318B] font-bold">
                Broide.
              </h1>
              <div className="font-bold lg:font-normal text-base lg:text-xl">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    500,
                    "Create perfection in every stitch", // initially rendered starting point
                    1000,
                    "Create your identity in every idea",
                    1000,
                    "With Broide",
                    500,
                  ]}
                  speed={50}
                  style={{}}
                  repeat={Infinity}
                />
              </div>
              <p className="text-base md:text-lg lg:text-2xl">
                broide atau broide project adalah sebuah perusahaan yang
                bergerak di bidang pakaian bordir kostum.kami hadir sebagai
                inovasi serta solusi atas keterbatasan yang muncul pada individu
                yang berkeinginan membuat suatu pakaian dengan tidak leluasa.
                maka dari itu kami berusaha sebaik mungkin demi melayani anda
                pada pakaian bordir dimana kami membuat serta mengabadikan pada
                setiap jahitan benang yang kalian inginkan.{" "}
              </p>
              <Link to={"https://www.instagram.com/broide.project/"}>
                <Button type="button">Support</Button>
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <Logo size="h-30 lg:h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
