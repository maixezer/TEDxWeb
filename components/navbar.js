import Link from 'next/link'

export default () => (
  <nav className="navbar navbar-expand-md bg-faded justify-content-center tedx_navbar">
    <Link prefetch href='/'>
      <a className="tedx_logo navbar-brand mr-auto" href="#">
        <span className="sr-only">TEDxCharoenkrung</span>
      </a>
    </Link>
    <button className="navbar-toggler tedx_hamburger_button" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon tedx_hamburger_icon"></span> */}
      <div id="tedx_hamburger_icon">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
        <Link prefetch href='/watch'>
          <li className="nav-item tedx_menu_item">
            <a className="nav-link tedx_link" href="#">Watch</a>
          </li>
        </Link>
        <Link prefetch href='/read'>
          <li className="nav-item tedx_menu_item">
            <a className="nav-link tedx_link" href="#">Read</a>
          </li>
        </Link>
        <Link prefetch href='/partners'>
          <li className="nav-item tedx_menu_item">
            <a className="nav-link tedx_link" href="#">Partners</a>
          </li>
        </Link>
        <Link prefetch href='/about'>
          <li className="nav-item tedx_menu_item">
            <a className="nav-link tedx_link" href="#">About</a>
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)
