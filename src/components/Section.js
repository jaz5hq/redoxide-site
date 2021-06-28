import React from 'react';
import styles from "./Section.module.css";

const Section = (props) => {
    const { children } = props;

    return (
        <section className={styles.section}>
            <div className="container container-fluid">
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;