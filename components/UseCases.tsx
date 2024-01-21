import React from "react";
import SingleUseCase from "./micros/SingleUseCase";
import { useCasesArray } from "@/data/static";

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="relative w-full mx-auto bg-[#FFFFFF]  py-6  px-8 md:px-16 lg:px-24"
    >
      <div className="hidden lg:block absolute right-0 -top-0">
        <img
          src="/images/3d-images/Torus-1.png"
          alt="3d asset"
          className="h-[200px] object-contain"
        />
      </div>
      <p className="text-[#FE7E37] text-[14px] tracking-wider lg:text-center uppercase leading-[20px] mb-4 font-bold">
        OUR USE CASES
      </p>
      <h1 className="text-[32px] w-full lg:mx-auto lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold">
        Ideal for everyone,
      </h1>
      <h1 className="text-[32px] w-full  lg:mx-auto lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-8">
        but especially for ...
      </h1>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-4">
        {useCasesArray.map((useCase) => (
          <SingleUseCase {...useCase} key={useCase.id} />
        ))}
      </article>
    </section>
  );
};

export default UseCases;
