const Header = () => {
  return (
    <header id="header">
        <div className="container">
          <div id="logo" className="pull-left">
            <a href="#intro" className="scrollto">
              <img src="assets/img/200" alt="" title="" />
            </a>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="/#intro">НҮҮР</a>
              </li>
              <li>
                <a href="/#about">БИДНИЙ ТУХАЙ</a>
              </li>
              <li>
                <a href="/#speakers">БАГШ НАР</a>
              </li>
              <li>
                <a href="/#schedule">ХӨТӨЛБӨР</a>
              </li>
              <li>
                <a href="/#venue">БОЛОХ ГАЗАР</a>
              </li>
              <li>
                <a href="/#hotels">БУУДЛУУД</a>
              </li>
              <li>
                <a href="/#gallery">ЗУРАГ</a>
              </li>
              <li>
                <a href="/#supporters">ИВЭЭН ТЭТГЭГЧ</a>
              </li>
              <li>
                <a href="/#contact">ХОЛБОО БАРИХ</a>
              </li>
              <li className="buy-tickets">
                <a href="/#buy-tickets">БИЛЕТ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header