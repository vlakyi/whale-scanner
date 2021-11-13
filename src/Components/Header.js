const Header = () => {
  const headerHandler = (e) => {
    e.preventDefault()
  }
  return (
    <nav className="skew-menu">
      <ul>
        <li>
          <a href="/" onClick={headerHandler}>
            Shoes
          </a>
        </li>
        <li>
          <a href="/" onClick={headerHandler}>
            Sandals
          </a>
        </li>
        <li>
          <a href="/" onClick={headerHandler}>
            Shirts
          </a>
        </li>
        <li>
          <a href="/" onClick={headerHandler}>
            Jackets
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Header
