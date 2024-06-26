import React from "react";
import Section from "./Section";
import bg from "../assets/images/bg.png";

const Overview = () => {
  return (
    <Section id="overview" crosses>
      <div className="container">
        <h2 className="h3 mb-6 text-center font-bold">
          Let's Have a Brief Overview on our Project!
        </h2>
        <div className="relative">
          <div className="relative  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 z-1 flex items-center h-[39rem] mb-5 p-8 border  border-white rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <img
              className="hidden h-[40rem] w-[44rem] rounded-lg object-cover md:inline"
              src={bg}
            />
            <div className="relative z-1 max-w-[24rem] ml-auto">
              <h4 className="h4 mb-4">
                What Motivated Us in Doing this Project?
              </h4>
              <p className="body-2 mb-[3rem] text-zinc-100">
                Tackling the United Nation's 13th Sustainable Development Goal
                (Climate Action) is arguably one of the most important
                undertakings the country, or the world in general, will have to
                commit to. Close to the equator, we are already feeling the
                effect of the, albeit slow, rise in temperature. Our lands are
                drier, rains are shorter, our workers are risking their health
                in the heat. Our group seeks to understand the direct link
                between climate change and crop productivity, affecting over 1/3
                of the working Filipino population.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[46rem] border border-white rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-start p-8 bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 lg:p-15">
              <h4 className="h4 mb-4">What Problems Do We Seek to Answer?</h4>
              <h6 className="h6">Primary Research Question</h6>
              <p className="body-2 mb-[1rem] text-zinc-100">
                How does climate change affect the crop productivity of the
                Philippines?
                <p className="my-2 ml-4">
                  - Intends to find out fundamental effect of climate change
                  (e.g. weather patterns, droughts, floods, etc. ) on the second
                  largest employment sector in the country, Agriculture
                  (Statista, 2023).
                </p>
                <p className="my-2 ml-4">
                  - Climate Change indirectly affects everyone and everything,
                  but it has the most direct effect on Agriculture, affecting
                  usable land, water availability, temperature, precipitation
                </p>
                <p className="my-2">
                  Reference:
                  <a href="https://www.statista.com/statistics/1268346/philippines-employment-rate-by-sector/">
                    https://www.statista.com/statistics/1268346/philippines-employment-rate-by-sector/
                  </a>
                </p>
              </p>
              <h6 className="h6">Secondary Research Question</h6>
              <p className="body-2 mb-[1rem] text-zinc-100">
                How does the % of Agriculture in GDP correlate with the CO2
                emissions of the Philippines?
                <p className="my-2 ml-4">
                  - Intends to find out if the economic output of Agriculture of
                  the Philippines has any effect on the greenhouse gas emission
                  rate of the Philippines. Further analysis of this data could
                  lead to possible links between the agricultural productivity
                  of the Philippines and the Greenhouse Gas emission rate of the
                  country.
                </p>
              </p>
            </div>
          </div>

          <div className="p-4  bg-gradient-to-b from-zinc-800/0 to-zinc-800/90 border border-white rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">How Would We Solve These Problems?</h4>
              <p className="body-2 mb-[3rem] text-zinc-100">
                Analyze the changes in the crop productivity of the Philippines
                throughout the years and find out if there is a correlation
                between the effects of climate change such as, but not limited
                to:
                <ul className="list-disc ml-7">
                  <li>Precipitation</li>
                  <li>Mean Surface Air Temperature</li>
                  <li>Natural Disasters</li>
                  <li>GHG Emissions</li>
                </ul>
              </p>
              <h4 className="h4 mb-4">Here are Our Hypotheses!</h4>
              <h4 className="h6 mb-2">Null Hypothesis</h4>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Research Question 1: Climate Change has no effect on the crop
                productivity of the Philippines
              </p>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Research Question 2:There is no correlation between the % of the
                Philippine GDP contributed by Agriculture and the Greenhous Gas
                Emission rate of the country.
              </p>
              <h4 className="h6 mb-2">Alternative Hypothesis</h4>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Research Question 1: Climate Change lowers crop productivity in
                the Philippines
              </p>
              <p className="body-2 mb-[2rem] text-zinc-100">
                Research Question 2: An increase in the GDP share of agriculture
                leads to a decrease in the greenhouse gas emission rate of the
                country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Overview;
