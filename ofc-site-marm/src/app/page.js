import Image from "next/image";
import Link from "next/link";
import styles from "./globals.css";
import Styles from "./styles.modules.css"
import { register } from "swiper/element/bundle"

export default function Home() {
  return (
    <section>


    <div className="barra">
      <div className="barra-logo">
        <img src="/logo.jpeg" className="logo"></img>
        </div>
        <h1 className="text-barra">Marmoraria Florianópolis</h1>
        <div className="buttons">
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./contatos'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
      <Link href=" https://whatsapp.com/dl/."><button className="button-whatsapp">WhatsApp</button></Link>
      </div>
    </div>

    <div className="showroom">
<img src="showroom22.jpg" className="showroom-foto"></img>
    </div>

<div className="threebts">
<div className="icones">
<img src="portifolio.png" className="butum1"></img>
<h1 className="a1">PORTIFOLIO</h1>
<h2 className="a2">INSPIRE-SE</h2>
<h3 className="a3">Conheça alguns de nosso trabalhos realizados pela nossa equipe altamente qualificada.</h3>
</div>



<div className="icones">
<img src="produto.png" className="butum1"></img>
<h1 className="a1">PRODUTOS</h1>
<h2 className="a2">MELHOR QUALIDADE</h2>
<h3 className="a3">Trabalhamos com produtos de altíssima qualidade e com grande variedade de materiais.</h3>
</div>



<div className="icones">
<img src="maquinas.png" className="butum1"></img>
<h1 className="a1">MAQUINÁRIO</h1>
<h2 className="a2">E EQUIPE</h2>
<h3 className="a3">Contamos com moderno maquinário e pessoas com capacidade técnica especializada</h3>
</div>

</div>


<div className="escritas">
           <div className="imagem-clicavel">
           <Link href="https://maps.app.goo.gl/NPSJPNp6B877nH396">
           <img src="/faixada.jpg" alt="faixada"/>
           </Link>
           </div>
     <div className="text-esc">
     <h1 className="escrita-1">SUA MARMORARIA EM <br></br>FLORIANÓPOLIS</h1>
     <h2 className="escrita-2">A Marmoraria Florianópolis oferece uma grande seleção de mármores e granitos, <br></br>tanto nacionais quanto importados, com acabamento de alta qualidade. Seus produtos <br></br>trazem mais valor aos ambientes, incluindo opções para cozinhas, pisos, revestimentos, <br></br>lavatórios, soleiras, molduras e outros itens.</h2>
     <h3 className="escrita-3">Clique na foto para localizar nossa empresa</h3>
     </div>
     </div>


 <div className="visita">
          <img src="/visitenos.jpg" className="visita-click"></img>
   <div className="visitas-text">
          <h1 className="visita-1">VENHA NOS FAZER UMA VISITA</h1>
          <h2 className="visita-2">A Marmoraria Florianópolis está localizada em Florianópolis,<br></br> Santa Catarina, e atende toda a Grande Florianópolis e região. <br></br>Oferecemos orçamentos gratuitos e sem compromisso para <br></br> todos os tipos de clientes. Venha nos fazer uma visita!</h2>
          <button  className="visita-3"><h3>NOS VISITE</h3></button>
   </div>
 </div>




  <div className="footer1">
  <div className="footer-barra"></div>
  <div className="footer-text">
  <h1>MARMORARIA FLORIANÓPOLIS</h1>
  <h1>ONDE NOS ENCONTRAR</h1>
  <h1>FALE CONOSCO</h1>
  </div>
  </div>
         

      </section>          

)
}