import React, { useState } from "react";

interface TagComponentProps {
  auctionCategories: string[];
  sendDataToParent: (data: any) => void;
}

export const TagComponent: React.FC<TagComponentProps> = ({
  auctionCategories,
  sendDataToParent,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCheckboxChangeForVal = (e) => {
    const newValue = e.target.value;

    sendDataToParent(selectedItem);

    setSelectedItem((prevSelectedItem) => {
      const updatedSelectedItem =
        prevSelectedItem === newValue ? null : newValue;
      sendDataToParent(updatedSelectedItem);
      return updatedSelectedItem;
    });
  };

  return (
    <div data-testid="region-ASIA_PACIFIC">
      <div className="sc-5a358c27-1 PRBbP">
        <fieldset className="sc-5a358c27-2 eecalz">
          <legend className="sc-a80bc31a-2 sc-5a358c27-3 iLIiey hhGVHr">
            Quick Watch:
          </legend>
          <ul
            role="list"
            aria-label="Countries"
            className="sc-5a358c27-0 dohTDJ"
          >
            {auctionCategories.map((category, index) => {
              return (
                <li key={index}>
                  <div className="sc-7a302213-0 jXNff">
                    <input
                      type="checkbox"
                      id={category}
                      className="sc-7a302213-5 edXAUi"
                      checked={selectedItem === category}
                      // onChange={() => {
                      //   handleCheckboxChangeForVal(country);
                      // }}
                      onChange={handleCheckboxChangeForVal}
                      value={category}
                    />
                    <label htmlFor={category} className="sc-7a302213-4 kIfFIU">
                      {category}
                      {selectedItem === category && (
                        <div className="sc-7a302213-1 sc-7a302213-3 hLecSb bYgPbp">
                          <svg
                            width="7"
                            height="7"
                            viewBox="0 0 42 42"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                          >
                            <path d="M9.3564 6.50033L35.4997 32.6442C35.82 32.9646 36 33.3992 36 33.8523C36 34.3055 35.82 34.74 35.4997 35.0605L35.0589 35.4997C34.7384 35.82 34.3039 36 33.8508 36C33.3977 36 32.9632 35.82 32.6427 35.4997L6.49943 9.35413C6.17962 9.03374 6 8.59953 6 8.14682C6 7.69411 6.17962 7.2599 6.49943 6.93951L6.94028 6.50033C7.26071 6.17997 7.69525 6 8.14834 6C8.60143 6 9.03597 6.17997 9.3564 6.50033V6.50033Z"></path>
                            <path d="M6.50033 32.6436L32.6442 6.50029C32.9646 6.17995 33.3992 6 33.8523 6C34.3055 6 34.74 6.17995 35.0605 6.50029L35.4997 6.94114C35.82 7.26157 36 7.69611 36 8.1492C36 8.60229 35.82 9.03683 35.4997 9.35726L9.35413 35.5006C9.03374 35.8204 8.59953 36 8.14682 36C7.69411 36 7.2599 35.8204 6.93951 35.5006L6.50033 35.0597C6.17997 34.7393 6 34.3047 6 33.8517C6 33.3986 6.17997 32.964 6.50033 32.6436V32.6436Z"></path>
                          </svg>
                        </div>
                      )}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </fieldset>
      </div>
    </div>
  );
};
