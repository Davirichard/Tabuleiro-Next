import Linha from "./Linha"
import styles from '../styles/tabuleiro.module.css'

export default function tabuleiro(){
    return(
    <>
        <div className={styles.container}>
        <Linha preta/>
        <Linha/>
        <Linha preta/>
        <Linha/>
        <Linha preta/>
        <Linha/>
        <Linha preta/>
        <Linha/>
        </div>
    </>
    )
}