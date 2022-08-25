import styles from '../styles/subdivisao.module.css'

export default function teste(props) {
    return (
        <>
            <div style={{ backgroundColor: props.preta ? "#000" : "#fff" }}
                className={styles.subdivisao}>

            </div>

        </>
    )
}