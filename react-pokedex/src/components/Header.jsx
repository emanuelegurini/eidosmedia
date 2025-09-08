import { Main } from "../components/Main";

import styles from './Header.module.css'

export function Header() {
	console.log(styles)
  return (
    <div>
      <h1 className={styles.pizza}>Pokedex</h1>
      <Main />
    </div>
  );
}
