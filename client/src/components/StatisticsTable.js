const StatisticsTable = ({ data }) => {

  return (
    <>
      {data.map((d, index) => (
        <tr key={index}>
          <td>{d.age}</td>
          <td>{d.count}</td>
        </tr>
      ))}
    </>
  )

}

export default StatisticsTable