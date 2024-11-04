import Image from "next/image";
import Link from "next/link";
import styles from "./styles.modules.css"

export default function Home() {
  return (
  
<section>

<div className="head">

<h1 className="tittle">Marmoraria Florianopolis</h1>

</div>
    <div className="barra">
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
    </div>
    
      <div className="corpo">
             <img src="/back.marm.jpg" alt="Descrição da imagem" className="back-marm"/>  
           <img src="/row.png" alt="Descrição da imagem" className="row-marm"/>  
    </div>
    
</section>
)
}