import { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return (
        <div className={styles.ChallengeBoxContainer}>


            {activeChallenge ? (
                <div className={styles.ChallengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            onClick={handleChallengeFailed}
                            className={styles.ChallengeFailedButton}
                        >
                            Falhei
                        </button>
                        <button type="button"
                            onClick={handleChallengeSucceeded}
                            className={styles.ChallengeSucceededButton}
                        >
                            Completei</button>
                    </footer>

                </div>
            ) : (
                <div className={styles.ChallengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                                Avance de level completando desafios.
                            </p>
                </div>

            )}

        </div>
    )
}