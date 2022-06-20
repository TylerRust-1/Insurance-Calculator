import React from "react";

export function Footer(): JSX.Element {
    return(
        <div style={styles.footer}>
            <p>Made for Delaware Sleep Disorder Centers<br/>
            &copy; 2022 Tyler Rust
            <br/>
            </p>
        </div>
    );
}

const styles = {
    footer: {
        backgroundColor: "lightgreen",
        position: "fixed",
        margin: "0px 0px 0px 0px",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "50px",
        padding: "0px 0px 15px 0px",
        boxSizing: "inherit",
    },
} as const;
