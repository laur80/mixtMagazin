import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
     <div className="relative">
    
    <div className="container ">
      <img loading="lazy" className="cover" src="img/entry.jpg" alt="" />
    </div>

    <div className=" gridish ">
      <div className="card">
        <div className="box  b1"></div>
        <h2 >Diverse</h2>
    </div>
    <div className="card fw-bold">
      <div className="box  b2"></div>
      <h2>Panificatie</h2>
    </div>
    <div className="card">
      <div className="box  b12"></div>
      <h2>Lactate</h2>
    </div>
    <div className="card">
      <div className="box  b6"></div>
      <h2>Mezeluri</h2>
    </div>
    <div className="card">
      <div className="box  b3"></div>
      <h2>Condimente</h2>
    </div>
    <div className="card">
      <div className="box  b4"></div>
      <h2>Ulei si Otet </h2>
    </div>
    <div className="card">
      <div className="box  b7"></div>
      <h2>Bauturi</h2>
    </div>
    <div className="card">
      <div className="box  b8"></div>
      <h2>Cafea si Ceai</h2>
    </div>
    <div className="card">
      <div className="box  b9"></div>
      <h2>Sucuri si Apa</h2>
    </div>
    <div className="card">
      <div className="box  b10"></div>
      <h2>Conserve</h2>
    </div>
    <div className="card">
      <div className="box  b11"></div>
      <h2>Dulciuri</h2>
    </div>
    <div className="card">
      <div className="box  b5"></div>
      <h2>Legume si fructe</h2>
    </div>

    </div>
    </div>
    </>
  )
}
