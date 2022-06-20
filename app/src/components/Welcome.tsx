import React from "react";

export function Welcome(): JSX.Element {
    return(
        <div style={styles.welcome}>
            <h1>CALCULATOR</h1>
            <p>PROOF OF CONCEPT</p>
        </div>
    );
}

const styles = {
    welcome: {
        width: "40%",
        padding: "30px 0px 0px 0px",
        margin: "auto",
        background: "white",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        alignCourses: "center",
        fontSize: 30,
    },
} as const;
