import { LinkProps, NavLink, useMatch, useResolvedPath } from "react-router-dom";

export function Link({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      className={`${match ? 'text-white' : 'text-blue-light'} 
        block py-2 pr-4 pl-3 font-semibold font-poppins rounded 
        hover:text-blue md:hover:bg-transparent md:border-0
      `}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  )
}