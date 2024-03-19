import React from "react";
import { motion } from "framer-motion";

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
      src: "/news-video.mp4",
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
      src: "/news-top-right.jpg",
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
      src: "/news-bottom-left.jpg",
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
      src: "/news-bottom-right.jpg",
      date: "24 February 2024",
      type: "image",
    },
  ];
  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto lg:py-40 py-16 text-white">
        <div className="grid gap-8">
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Initial state of the element
              whileInView={{ opacity: 1, x: 0 }} // Animation state
              transition={{ type: "spring", duration: 0.5 }} // Transition duration
              viewport={{ once: true }}
            >
              <h2 className="uppercase text-4xl font-bold">News</h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 lg:px-20 grid-cols-1 px-2 gap-12">
            {news &&
              news.map((itm, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial state of the element
                    whileInView={{ opacity: 1, y: 0 }} // Animation state
                    transition={{
                      type: "spring",
                      duration: 0.5,
                    }} // Transition duration
                    viewport={{ once: true }}
                  >
                    <GridCards obj={itm} />
                  </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Initial state of the element
          whileInView={{ opacity: 1, y: 0 }} // Animation state
          transition={{
            type: "spring",
            duration: 0.5,
          }} // Transition duration
          viewport={{ once: true }}
        >
          <h2 className="font-semibold uppercase">{obj.title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Initial state of the element
          whileInView={{ opacity: 1, y: 0 }} // Animation state
          transition={{
            type: "spring",
            duration: 0.5,
          }} // Transition duration
          viewport={{ once: true }}
        >
          <p className="text-sm">{obj.content}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Initial state of the element
          whileInView={{ opacity: 1, y: 0 }} // Animation state
          transition={{
            type: "spring",
            duration: 0.5,
          }} // Transition duration
          viewport={{ once: true }}
        >
          <p className="text-xs">{obj.date}</p>
        </motion.div>
      </div>
    </div>
  );
}

function Tweets() {
  return <div>Tweets</div>;
}

export default News;
