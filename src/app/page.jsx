import logo from "../../public/logotipo.png";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className='w-80 md:w-[550px] pb-16' alt="logo" />

        <Link
          href="https://loja-negociosdeesporte.vercel.app/"
          className="App-link"
          rel="noopener noreferrer"
        >
          Uniformes Esportivos
        </Link>

        <Link
          href="https://curso-homci.vercel.app"
          className="App-link"
          rel="noopener noreferrer"
        >
          Coaching Esportivo
        </Link>
      </header>
    </div>
  );
}
