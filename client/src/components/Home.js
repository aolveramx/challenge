import { Fragment } from "react"
import useFetch from "../hooks/useFetch"
import Dropdown from "./layout/Dropdown"
import StatisticsTable from "./StatisticsTable"

import { Table } from "./styles/Home.styled"

const Home = () => {

  const url = `/users/age`
  const {isLoading, data, error} = useFetch(url)

  return (
    <Fragment>
      {isLoading && <div>Loading...</div>}
      {error && <div>{console.log(error)}</div>}
      {data && 
        <Table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <StatisticsTable data={data} />
          </tbody>
        </Table>
      }
      <Dropdown />
      {/* {
        data 
          ?
          <Dropdown />
          :
          <div>Loading...</div>
      } */}
    </Fragment>
  )
}

export default Home


