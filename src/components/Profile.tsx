import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/58962240?s=460&u=8444c7439f3d2fc4994475aa6833fa8b7dfd855c&v=4" alt="Raphael Souza" />
            <div>
                <strong>Raphael Souza</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level 1</p>
            </div>
        </div>
    );
}