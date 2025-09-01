// src/data/dummyData.js
// src/data/dummyData.js
export const DUMMY_COURSES = [
  {
    id: "react",
    title: "React for Beginners",
    description: "Learn React from scratch and build interactive UIs.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS Mastery",
    description: "Master utility-first CSS framework for rapid UI development.",
    thumbnail:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=80", // ✅ Tailwind CSS / UI design
  },
  {
    id: "nodejs",
    title: "Node.js Bootcamp",
    description: "Learn backend development using Node.js and Express.",
    thumbnail:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "blockchain",
    title: "Blockchain Basics",
    description: "Understand blockchain technology and its applications.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence and machine learning concepts.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
  },
];

export const DUMMY_QUIZZES = {
  "react-basics": {
    l1: [
      {
        q: "React uses which syntax for components?",
        options: ["JSX", "HTML only"],
        answer: 0,
      },
    ],
  },
  blockchain: {
    l1: [
      {
        q: "Blockchain is a…",
        options: ["Central DB", "Distributed ledger"],
        answer: 1,
      },
    ],
  },
  // add other quizzes as needed
};
