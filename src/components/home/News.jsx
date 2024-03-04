import React from "react";

function News() {
  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-20 text-white">
        <div className="grid gap-8">
          <div>
            <h2 className="uppercase text-4xl font-bold">News</h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((itm, i) => (
                  <div key={i}>
                    <GridCards />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Tweets />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCards() {
  return (
    <div>
      <div className="grid gap-3">
        <img src="./news-1.jpg" alt="image" className="rounded-xl" />
        <p className="text-[#1e73be] font-semibold uppercase">News</p>
        <h2 className="font-semibold uppercase">
          title Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
          soluta.
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
          quos laboriosam doloremque natus voluptates nemo dicta eos excepturi
          voluptatum, similique earum eius aperiam odio, nostrum perferendis
          vero corporis accusantium.
        </p>

        <p className="text-xs">24 February 2024</p>
      </div>
    </div>
  );
}

function Tweets() {
  return <div>Tweets</div>;
}

export default News;
