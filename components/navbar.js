import Link from 'next/link'
import stylesheet from '../styles/index.scss'

export default () => (
  <nav>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Link href='/'><a className="hello">TEDxCharoenkrung</a></Link>
    <Link href='/watch'><a>Watch</a></Link>
    <Link href='/read'><a>Read</a></Link>
    <Link href='/partners'><a>Partners</a></Link>
    <Link href='/about'><a>About</a></Link>
    <style jsx>{`
      nav > a {
        font-family: latoBold;
      }
    `}
    </style>
  </nav>
)
