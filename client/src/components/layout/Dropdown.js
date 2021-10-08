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
    const url = `/users/age?product=${e.target.value}`
    setProductURL(url)
  }

  const {data} = useFetch(productURL)

  console.log(data)

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
