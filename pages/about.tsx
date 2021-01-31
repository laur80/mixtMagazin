import styles from '../styles/about.module.css'

const about = () => {
  const lp="mt-5"
  return ( 
    <>
    
      <div className={styles.brick}>
        <h1 className={styles.despre}>Despre Noi</h1>
      </div>

      <div className={styles.container}>
          <div className={styles.col}>
            <h1>Cine suntem?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A id laborum et. Debitis, nisi, explicabo ratione excepturi soluta corrupti vitae esse odit, aperiam veritatis ullam ea repellendus tempore. Unde accusantium quos odio, repudiandae sed officiis eaque magni consectetur reiciendis totam, iusto ipsa ex quaerat, veniam error illum tempore possimus? Voluptate!  
            </p>
          </div>

          <div className="mt-5">
              <h1>Cum facem asta?</h1>
              <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, quidem dolor? Quo debitis voluptates, harum atque consectetur molestias soluta nostrum, in aliquid rerum error omnis! Optio assumenda nulla libero deleniti ut sint odit ad reprehenderit consequuntur voluptatum qui temporibus similique, nostrum quaerat architecto eveniet velit nobis! Nam qui repellendus magnam?
              </p>
            </div>

            <div className={styles.col} >
              <h1>Valori</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero id nesciunt! Impedit, voluptates at iure, quas labore fugit provident, voluptatem doloribus id eligendi blanditiis eaque distinctio voluptate facilis quo molestiae aperiam et reprehenderit? Hic, cum magni, ratione aperiam perspiciatis vitae laudantium quibusdam molestiae dolore, ad nemo soluta fugiat accusamus!
              </p>
            </div>
      </div>
    </>
   );
   }

 
export default about;




