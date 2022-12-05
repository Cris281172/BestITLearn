import type {NextPage} from "next";
import styles from './HowItWork.module.scss';
import {useState} from 'react';
import ListItem from "./ListItem";

const HowItWork: NextPage = () => {

    return(
        <div className={styles.howItWork}>
            <h3 className={styles.sectionTitle}>Jak to działa</h3>
            <ul className={styles.tilesWrapper}>
                <ListItem number={1} title="Wybierz swoją technologię" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." readMoreLink="" />
                <ListItem number={2} title="Wybierz swoją technologię" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." readMoreLink="" />
                <ListItem number={3} title="Wybierz swoją technologię" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." readMoreLink="" />
                <ListItem number={4} title="Wybierz swoją technologię" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." readMoreLink="" />
            </ul>
        </div>
    )
}

export default HowItWork;