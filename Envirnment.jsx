import './css-modules/Environment.module.css';
import styles from './css-modules/Environment.module.css'

function Environment() {

    return(
        <div className={styles.main_div}>
            <h2>School environment</h2>
            <p>Our school contains beautiful environments which includes many classrooms, large playgrounds, and clean environments. These are present to enhance quick and enjoyable learning to all students.</p>
            <p>We also maintain regular checking of our environments including classrooms, playgrounds and general school environment. As well as encouraging discipline of preserving school properties among students.</p>
        </div>
    )
}
export default Environment;