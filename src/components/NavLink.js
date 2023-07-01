import React from 'react';
import { useMatch, useResolvedPath } from "react-router-dom"

export default function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "current" : ""}>
      <a href={to} {...props}>
        {children}
      </a>
    </li>
  )
}