import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "full stack web dev",
    "yogi",
    "ui/ux designer",
    "musician",
    "actor",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const typeSpeed = isDeleting ? 100 : 100;

    if (!isDeleting && text.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
    } else {
      setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : prev + currentWord[prev.length]
        );
      }, typeSpeed);
    }
  }, [text, isDeleting, wordIndex]);
  return (
    <div className="neonBorderHome">
      <h1>jordan olguin</h1>
      <h2 className="banner-text">
        <span className="wrap">{text || "\u00A0"}</span>
      </h2>
    </div>
  );
}
