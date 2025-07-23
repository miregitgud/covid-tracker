import styles from "./Alert.module.css"

const Alert = (props) => {
    return (
        <div>
            <span className={styles.errorMessage}>{props.children}</span>
        </div>
    );
}


export default Alert;