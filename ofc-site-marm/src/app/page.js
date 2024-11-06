import Image from "next/image";
import Link from "next/link";
import styles from "./globals.css";
import Styles from "./styles.modules.css"
import Carousel from './components/Carousel';


export default function Home() {
  return (
    <section>

    <div className="barra">
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./contatos'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
      <Link href=""></Link>
    </div>
<main className="rowller">

         <div className="imagem-clicavel">
      <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396">
          <img src="/logo.marm.png" alt="Descrição da imagem"/>
      </Link>
          </div>

</main>

<footer>
<div className="footeer">
<h1>loc</h1>


</div>



</footer>

  <div>
  </div>
         

      </section>          

)
}