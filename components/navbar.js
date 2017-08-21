import Link from 'next/link'

export default () => (
  <nav>
    <Link prefetch href='/'><a className="hello">TEDxCharoenkrung</a></Link>
    <Link prefetch href='/watch'><a>Watch</a></Link>
    <Link prefetch href='/read'><a>Read</a></Link>
    <Link prefetch href='/partners'><a>Partners</a></Link>
    <Link prefetch href='/about'><a>About</a></Link>
    <style jsx>{`
      nav > a {
        font-family: 'latoBold';
      }
    `}
    </style>
  </nav>
)
