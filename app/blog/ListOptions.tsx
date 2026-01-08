import React from "react";

function ListOptions({
  className,
  type,
  options,
}: {
  className ? : string;
  type?: "H2" | "H3" | "H4";
  options: string[];
}) {
  const ComponentToLoad = ({ text }: { text: string }) => {
    if (type === "H2")
      return (
        <h2 className="josefin-sans-400 text-gray-600 text-justify">{text}</h2>
      );
    if (type === "H3")
      return (
        <h3 className="josefin-sans-400 text-gray-600 text-justify">{text}</h3>
      );
    if (type === "H4")
      return (
        <h4 className="josefin-sans-400 text-gray-600 text-justify">{text}</h4>
      );

    return (
      <span className="josefin-sans-400 text-gray-600 text-justify">
        {text}
      </span>
    );
  };

  return (
    <ul className={`w-full py-9 space-y-10 ${className}`}>
      {options.map((item, key) => (
        <li key={key} className="flex items-start gap-4">
          <div className="flexCenter">
            <div className="h-7 w-7 bg-[#9283EA] mt-1 flexCenter text-white something font-tex">
              {key + 1}
            </div>
          </div>

          {<ComponentToLoad text={item} />}
        </li>
      ))}
    </ul>
  );
}

export default ListOptions;
