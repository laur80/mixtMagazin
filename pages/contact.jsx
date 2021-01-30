import styles from '../styles/contact.module.css'

const contact = () => {
  return ( 
    <div className={styles.containgps}>
       
    <div loading="lazy" className={styles.date}>
      <h1 id="ss">SUNTEM AICI: </h1>
      <h1 className={styles.loc}>Program</h1>
      <h1 className={styles.telefon}>Telefon</h1>
      <h1 className={styles.social}>Adresa</h1>
    </div>
  
  <div loading="lazy" className={styles.contact}></div>
</div>
   );
}
 
export default contact;