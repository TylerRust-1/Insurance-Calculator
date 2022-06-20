import React from "react";
import { useState } from "react";

export function Insurance(): JSX.Element {
    const options = [
        {value: 0, text: '--Choose an option--'},
        {value: 10, text: 'Insurance 1'},
        {value: 20, text: 'Insurance 2'},
        {value: 30, text: 'Insurance 3'},
    ];
    const [selected, setSelected] = useState(options[0].value);
    const handleChange = (event: { target: { value: React.SetStateAction<number>; }; }) => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };
    return (
        <div>
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      );
    };

//const styles = {
//} as const;
