import useFetch from "../hooks/useFetch"

const Home = () => {

  const url = `http://localhost:5000/users`
  // const url = `https://www.breakingbadapi.com/api/characters?limit=10`

  const {isLoading, data: users, error} = useFetch(url)

  // return (
  //   <div>
  //     {isLoading && <div>Loading...</div>}
  //     {error && <div>{console.log(error)}</div>}
  //     {users && 
  //         users.map(user => (
  //           <div key={user.char_id}>
  //             <h1>{user.name}</h1>
  //             <img src={user.img} alt="" />
  //           </div>
  //           ))
  //     }
  //   </div>
  // )

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{console.log(error)}</div>}
      {users && 
          users.map(user => (
            <div key={user.name}>
              <h1>{user.name}</h1>
              <h2>{user.age}</h2>
            </div>
            ))
      }
    </div>
  )
}

export default Home
