import { useState } from "react"
import useFetch from "../../hooks/useFetch"

import { StyledSelect } from "../styles/Dropdown.styled"

const Dropdown = () => {

  const shopingCart = [
    "carrot",
    "apple",
    "grapes",
    "cake",
    "tv",
    "cracker",
    "chips",
    "ham",
  ]

  const [productURL, setProductURL] = useState('')

  const select = shopingCart.map(add => add)
  
  const handleClick = (e) => {
    console.log(e.target.value)
    const url = `http://localhost:5000/users/age?product=${e.target.value}`
    console.log(url)
    setProductURL(url)
  }

  const {isLoading, data, error} = useFetch(productURL)

  return (
    <StyledSelect
      onChange={e => handleClick(e)}
    >
      {
        select.map((item, index) => (
          <option value={item} key={index}>{item}</option>
        ))
      }
    </StyledSelect>
  )
}

export default Dropdown
