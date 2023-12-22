import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {

  return (

    <footer className={styles.footer}>
        <div className={styles.btns}>
            <a href="https://github.com/Luis-GTHBCD" target='_blanck'>
                <button className={styles.btn_1}>

                    <div className={styles.icon}>
                        <Image src="/images/github.png" width={30} height={30}/>

                    </div>

                    <div className={styles.text}><p>Github</p></div>

                    <div className={styles.name}><p>Luís Gustavo</p></div>

                </button>

            </a>

            <a href="https://github.com/Thayna-Zacharias" target='_blanck'>
                <button className={styles.btn_1}>
                    <div className={styles.icon}>
                        <Image src="/images/github.png" width={30} height={30}/>

                    </div>

                    <div className={styles.text}><p>Github</p></div>
                    <div className={styles.name}><p>Thayna Zacharias</p></div>

                </button>

            </a>

            <a href="https://github.com/hilariogrossi" target='_blanck'>
                <button className={styles.btn_1}>
                    <div className={styles.icon}>
                        <Image src="/images/github.png" width={30} height={30}/>

                    </div>

                    <div className={styles.text}><p>Github</p></div>
                    <div className={styles.name}><p>Hilário Grossi</p></div>

                </button>

            </a>

            <a href="https://github.com/maurochavesjr" target='_blanck'>
                <button className={styles.btn_1}>
                    <div className={styles.icon}>
                        <Image src="/images/github.png" width={30} height={30}/>

                    </div>

                    <div className={styles.text}><p>Github</p></div>
                    <div className={styles.name}><p>Mauro Chaves</p></div>

                </button>

            </a>

        </div>

    </footer>

  );
  
};

export default Footer;
