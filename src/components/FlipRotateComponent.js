import React, { useState } from 'react';
import styles from "./FlipRotateComponent.module.css";

const FlipRotateComponent = (props) => {
    const { front, back, ...rest } = props;

    return (
        <div className={styles.flipCard} {...rest}>
            <div className={styles.flipCardInner}>
                <div className={`${styles.flipCardFront}`}>
                    {front}
                </div>
                <div className={`${styles.flipCardBack}`}>
                    {back}
                </div>
                <div className={`${styles.flipCardPlaceholder}`}>
                    {front}
                </div>
            </div>
        </div>
    );
};

export default FlipRotateComponent;