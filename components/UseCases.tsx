import React from "react";
import SingleUseCase from "./micros/SingleUseCase";
import { useCasesArray } from "@/data/static";

const UseCases = () => {
  return (
    <section className="w-full mx-auto bg-[#FFFFFF]  py-24  px-8 md:px-16 lg:px-24">
      <p className="text-[#9A9A9A] text-[14px] tracking-wider lg:text-center uppercase leading-[20px] mb-4">
        OUR USE CASES
      </p>
      <h1 className="text-[32px] w-full lg:w-[60%]  lg:mx-auto lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-8">
        Ideal for everyone, but especially for ...
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
