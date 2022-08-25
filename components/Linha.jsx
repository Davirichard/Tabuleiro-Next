import Subdivisao from './Subdivisao'
import styles from '../styles/linha.module.css'

export default function linha(props) {
  return (
    <>
      <div className={styles.linha}>
        <Subdivisao preta={props.preta} />
        <Subdivisao preta={!props.preta} />
        <Subdivisao preta={props.preta} />
        <Subdivisao preta={!props.preta} />
        <Subdivisao preta={props.preta} />
        <Subdivisao preta={!props.preta} />
        <Subdivisao preta={props.preta} />
        <Subdivisao preta={!props.preta} />
      </div>
    </>
  )
}