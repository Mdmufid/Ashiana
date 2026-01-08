import React from "react";

function SubHeading({
  className,
  type,
  text,
}: {
  className?: string;
  type?: "H1" | "H3" | "H4";
  text: string;
}) {
  const ComponentToLoad = ({ text }: { text: string }) => {
    if (type === "H3")
      return (
        <h3
          className={`font-tex text-gray-800 text-xl mt-8 uppercase ${className}`}
        >
          {text}
        </h3>
      );
    if (type === "H4")
      return (
        <h4
          className={`font-tex text-gray-800 text-xl mt-8 uppercase ${className}`}
        >
          {text}
        </h4>
      );

      if (type === "H1")
        return (
          <h1
            className={`font-tex text-gray-800 text-xl mt-8 uppercase ${className}`}
          >
            {text}
          </h1>
        );

    return (
      <h2
        className={`font-tex text-gray-800 text-xl mt-8 uppercase ${className}`}
      >
        {text}
      </h2>
    );
  };
  return <ComponentToLoad text={text} />;
}

export default SubHeading;
