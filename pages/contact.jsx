import styles from '../styles/contact.module.css'
import { GoogleMap, useLoadScript, LoadScript, Marker, InfoWindow, } from '@react-google-maps/api';

const libraries = ["places"];
const mapContainerStyle = {
   height: "100vh",
   width: "100vw",
 };
 const center = {
   lat: 46.217155,
   lng: 27.670864,
 };
 

const contact = () => {
   
   const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
      libraries,
    });


    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

  return ( 
      <div className='mt-5'>
            <GoogleMap 
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={17}
            center={center}
            // options={options}
            >
               <Marker
               position={{ lat: 46.217155, lng: 27.670864}}
                  />
            </GoogleMap>
      </div>
//     <div className={styles.containgps}>
       
//     <div loading="lazy" className={styles.date}>
//       <h1 id="ss">SUNTEM AICI: </h1>
//       <h1 className={styles.loc}>Program</h1>
//       <h1 className={styles.telefon}>Telefon</h1>
//       <h1 className={styles.social}>Adresa</h1>
//     </div>
  
//   <div loading="lazy" className={styles.contact}></div>
// </div>
   );
}
 
export default contact;
            