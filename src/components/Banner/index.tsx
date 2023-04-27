import styles from "./Banner.module.css"
function Banner() {
    return <div className={styles.Banner}>
        <div className={styles["Wrapper-imgs"]}>
    <img className={styles["Image-Banner"]} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png" alt="" />
    <img className={styles["Image-Title"]} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="" />
        </div>
    </div>
}

export default Banner