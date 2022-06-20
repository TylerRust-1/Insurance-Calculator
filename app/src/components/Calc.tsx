import React from "react";

export function Calc(): JSX.Element {
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        return value;
    };
    /*var e = document.getElementById("InsuranceOption") as HTMLInputElement;
    var value = "0";
    if (e.value!=null){
        value = e.value;
    }
    else{
        value="0";
    }
*/
    return(
        <div>
            inputHandler
        </div>
    );
}

