import React from "react";

function News() {
  const news = [
    {
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta.",
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
      quos laboriosam doloremque natus voluptates nemo dicta eos excepturi
      voluptatum, similique earum eius aperiam odio, nostrum perferendis
      vero corporis accusantium.
      `,
      src: "./news-video.mp4",
      date: "24 February 2024",
      type: "video",
    },
    {
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta.",
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
      quos laboriosam doloremque natus voluptates nemo dicta eos excepturi
      voluptatum, similique earum eius aperiam odio, nostrum perferendis
      vero corporis accusantium.
      `,
      src: "./news-1.jpg",
      date: "24 February 2024",
      type: "image",
    },
    {
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta.",
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
      quos laboriosam doloremque natus voluptates nemo dicta eos excepturi
      voluptatum, similique earum eius aperiam odio, nostrum perferendis
      vero corporis accusantium.
      `,
      src: "./news-1.jpg",
      date: "24 February 2024",
      type: "image",
    },
    {
      title:
        "title Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta.",
      content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
      quos laboriosam doloremque natus voluptates nemo dicta eos excepturi
      voluptatum, similique earum eius aperiam odio, nostrum perferendis
      vero corporis accusantium.
      `,
      src: "./news-1.jpg",
      date: "24 February 2024",
      type: "image",
    },
  ];

  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-40 text-white">
        <div className="grid gap-8">
          <div>
            <h2 className="uppercase text-4xl font-bold">News</h2>
          </div>

          <div className="grid grid-cols-2 gap-12 px-20">
            {news &&
              news.map((itm, i) => (
                <div key={i}>
                  <GridCards obj={itm} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GridCards({ obj }) {
  return (
    <div>
      <div className="grid gap-3">
        {obj.type == "video" ? (
          <video
            autoPlay
            muted
            loop
            className="min-w-full min-h-full object-cover rounded-xl"
          >
            <source src={obj.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={obj.src} alt="image" className="rounded-xl" />
        )}
        <p className="text-[#1e73be] font-semibold uppercase">News</p>
        <h2 className="font-semibold uppercase">{obj.title}</h2>
        <p className="text-sm">{obj.content}</p>
        <p className="text-xs">{obj.date}</p>
      </div>
    </div>
  );
}

function Tweets() {
  return <div>Tweets</div>;
}

export default News;
