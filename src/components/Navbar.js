import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <>
        <div className="col-xl-7 col-lg-7">
            <div className="main-menu text-right text-xl-right">
                <nav id="mobile-menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                        <li><NavLink to="/classes">Classes</NavLink></li>
                        <li><NavLink to="/teachers">Teachers</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contactus">Contact Us</NavLink></li>                                       
                    </ul>
                </nav>
            </div>
        </div>   
        <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-30 mb-30 text-right text-xl-right">
            <div className="login">
                <ul>
                    <li>
                        <div className="header-btn second-header-btn">
                            <Link to="/contactus" className="btn">Get Started</Link>
                        </div>
                    </li>
                </ul>                    
            </div>                  
        </div>
        <div className="col-12">
            <div className="mobile-menu"></div>
        </div>  
    </>
    )
  }

  function NavLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <li className={isActive ? "current" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
