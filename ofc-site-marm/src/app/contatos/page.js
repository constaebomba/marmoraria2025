import Link from "next/link";

export default function Home() {
    return (

    <section>
    <div className="barra">
      <div className="barra-logo">
        <img src="/logo.jpeg" className="logo"></img>
        </div>
        <h1 className="text-barra">Marmoraria Florianópolis</h1>
        <div className="buttons">
      <Link href={'/'} className="link-sobre"><button className="btn">HOME</button></Link>
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./contatos'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
      <Link href=" https://whatsapp.com/dl/."><button className="button-whatsapp">WhatsApp</button></Link>
      </div>
    </div>
    </section>
    )
}