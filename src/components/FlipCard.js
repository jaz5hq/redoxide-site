import * as React from 'react';
import styles from "./FlipCard.module.css";

const FlipCard = (props) => {
    const { children } = props;

    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={`${styles.flipCardFront} shadow--md`}>
                    {children}
                </div>
                <div className={`${styles.flipCardBack}`}>
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;