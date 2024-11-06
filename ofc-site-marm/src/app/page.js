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
          <img src="/row-2.png" alt="desc" className="row-1"></img> 
          <img src="/row-3.png" alt="desc" className="row-1"></img> 
          <img src="/row-4.png" alt="desc" className="row-1"></img>  
        
          <div className="texto1">COZINHAS</div>
          <div className="texto2">BANHEIROS</div>
          <div className="texto3">MESAS</div>
          <div className="texto4">FAIXADAS</div>
  </div>

         <div className="meio-bglho">
         <h1 className="text-sob">SOBRE NÓS</h1>
         <p className="p-sob">A Marmoraria Florianópolis é uma empresa especializada em mármore, granito e pedras ornamentais.<br></br> com [X] anos de experiência no mercado. Oferecemos soluções de alta qualidade para projetos residenciais e comerciais <br></br> sempre com um acabamento impecável e precisão nos cortes. Nosso compromisso é transformar seus projetos com materiais <br></br>sofisticados e duráveis, utilizando tecnologia de ponta e respeitando rigorosamente os prazos. Com uma equipe qualificada, <br></br> garantimos um atendimento personalizado, acompanhando cada detalhe do início ao fim. Trabalhamos com as melhores pedras <br></br> para entregar um resultado final que exceda suas expectativas.</p>

         </div>

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