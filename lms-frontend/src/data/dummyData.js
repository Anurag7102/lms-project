export const DUMMY_COURSES = Array.from({ length: 10 }, (_, i) => {
  const courseNum = i + 1;
  return {
    id: `class${courseNum}`,
    title: `Class ${courseNum}`,
    thumbnail: `/assets/thumbnails/img${courseNum}.jpg`,
    lessons: [
      {
        id: `lesson${courseNum}`,
        title: `Lesson ${courseNum}`,
        pdf: `/assets/pdfs/SM${courseNum}.pdf`,
        video: `/assets/videos/SM${courseNum}.mp4`,
      },
    ],
  };
});

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
};
