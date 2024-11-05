import Image from "next/image";
import Link from "next/link";
import styles from "./globals.css";
import Styles from "./styles.modules.css"


export default function Home() {
  return (
    <section>
<div className="head">

<h1 className="tittle">Marmoraria Florianópolis</h1>

</div>

    <div className="barra">
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./contatos'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
    </div>
<main className="rowller">
  <img src="/back-premium.png" alt="desc" className="back-premium"></img>
  <div className="photos4">
          <img src="/row-1.png" alt="desc" className="row-1"></img>  
          <img src="/row-2.png" alt="desc" className="row-2"></img>  
          <img src="/row-3.png" alt="desc" className="row-3"></img>  
          <img src="/row-4.png" alt="desc" className="row-4"></img>  
  </div>         
</main>

  <div>
  </div>
         

      </section>          

)
}