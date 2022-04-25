import { Link } from "gatsby"
import logo from "images/logo.png"
import github from "images/github.png"

const links = [
  { name: "About", to: "/about" },
  { name: "Latest", to: "/latest" },
  { name: "Posts", to: "/posts" },
]

export const Header = () => {
  return (
    <nav className="container h-16 flex items-center m-auto">
      <Link to="/" className="h-full mr-auto">
        <img src={logo} alt="logo" className="h-full" />
      </Link>
      {Object.values(links).map(link => {
        return (
          <Link
            to={link.to}
            key={`${link.name}-${link.to}`}
            className="text-lg font-semibold p-2 m-2 active:font-bold "
          >
            {link.name}
          </Link>
        )
      })}
      <a href="https://github.com/etczrn" className="ml-auto">
        <img src={github} alt="github" className="w-8 m-auto" />
      </a>
    </nav>
  )
}
