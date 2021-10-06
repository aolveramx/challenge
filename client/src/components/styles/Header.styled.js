import styled from 'styled-components'

export const Navbar = styled.nav`
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;

  & a {
    margin-left: 16px;
    padding: 6px;
    text-decoration: none;
  }

  & a:hover {
    color: #f1356d;
  }

  & h1 {
    color: #f1356d;
  }
`

export const NavLinks = styled.div`
  margin-left: auto;
`