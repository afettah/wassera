"use client";

import CountUp from "react-countup";
import Container from "./components/container";

const statistics = [
  {
    id: "countto2",
    value: 350,
    label: "Trusted Clinets",
  },
  {
    id: "countto3",
    value: 15,
    label: "Years of Experience",
    decimals: 1,
  },
  {
    id: "countto4",
    value: 215,
    label: "finished projects",
  },
  {
    id: "countto4",
    value: 3,
    prefix: "+",
    suffix: "M",
    label: "annual profits",
  },
];

export default function Statistics() {
  return (
    <div className="bg-gray-100 py-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {statistics.map((stat) => (
            <div key={stat.id}>
              <div className="flex items-center gap-3 p-6">
                <h3 className="text-6xl font-bold leading-tight text-center text-primary ">
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals || 0}
                    duration={2.5}
                    separator=","
                  />
                  {stat.suffix}
                </h3>
                <p className="mt-2 text-base font-semibold text-muted-foreground uppercase leading-tight">
                  {(() => {
                    const words = stat.label.split(" ");
                    if (words.length === 1) {
                      const mid = Math.ceil(words[0].length / 2);
                      return (
                        <>
                          <span className="block">
                            {words[0].slice(0, mid)}
                          </span>
                          <span className="block">{words[0].slice(mid)}</span>
                        </>
                      );
                    } else {
                      const mid = Math.ceil(words.length / 2);
                      const firstPart = words.slice(0, mid).join(" ");
                      const secondPart = words.slice(mid).join(" ");
                      return (
                        <>
                          <span className="block">{firstPart}</span>
                          <span className="block">{secondPart}</span>
                        </>
                      );
                    }
                  })()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
