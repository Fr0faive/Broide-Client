import { Link } from "react-router-dom";
import { Button } from "../element/Button";
import Logo from "../element/Logo";

const Hero = () => {
  return (
    <>
      <div className="bg-white h-screen w-full">
        <div className="flex flex-row gap-24 justify-center items-center p-64">
          <div className="w-2/3">
            <div className="flex flex-col gap-5 text-black text-justify">
              <h1 className="text-6xl text-[#2F318B] font-bold">Broide.</h1>
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem in distinctio repudiandae explicabo porro tempore
                nostrum sed libero eligendi. Asperiores, ullam? Saepe veniam
                reiciendis nisi repudiandae nihil sint ex consequatur maxime!
                Labore cupiditate, magnam dignissimos exercitationem, eum sequi
                fuga neque suscipit repellendus eaque repudiandae voluptatem
                debitis aliquid ut, in perspiciatis!
              </p>
              <Link to={"/"}>
                <Button type="button">Order Now</Button>
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <Logo size="h-96" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
