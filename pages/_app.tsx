import React from 'react'
import { AppProps } from 'next/app'
import Link from 'next/link'
import '../style/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <ul className="headerUl">
          <li className="linkHeader">
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li className="linkHeader">
            <Link className="link" href="/sobre">
              Sobre
            </Link>
          </li>
          <li className="linkHeader">
            <Link className="link" href="#">
              Portifólio
            </Link>
          </li>
          <li className="linkHeader">
            <Link className="link" href="#">
              Certificado
            </Link>
          </li>
          <li className="linkHeader contato">
            <Link className="link" href="#">
              Contato
            </Link>
          </li>
        </ul>
      </header>
      <Component {...pageProps} />
      <footer>Criado por &copy; Erick</footer>
    </>
  )
}

export default MyApp
