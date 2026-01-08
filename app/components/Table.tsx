import React from "react";


interface IProps {
    headingColorList? : string[];
    headingnames? : string[];
    items? : string[][];
}

function Table({ headingColorList = [], headingnames = [], items = [[]] } : IProps) {
  const isFloat = (index : number) => {
    const numToString = (index / 2).toString();

    if (numToString.includes(".")) return true;
    return false;
  };

  return (
    <div className="w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headingnames.map((item, index) => (
              <th
                style={{ backgroundColor: headingColorList[index] }}
                key={item}
                scope="col"
                className={`py-4 text-center text-[1.115rem] text-white tableRadius sm:text-xs`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index + item[0]}
              className={`border-b dark:bg-gray-800 dark:border-gray-700 ${
                isFloat(index) ? "bg-[#EAEAEA]" : "bg-white"
              }`}
            >
              {item.map((eachItem : any, index : any) =>
                index === 0 ? (
                  <th
                    key={eachItem}
                    scope="row"
                    className="py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                  >
                    {eachItem}
                  </th>
                ) : (
                  <td key={eachItem} className="py-4 text-center">
                    {eachItem}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
