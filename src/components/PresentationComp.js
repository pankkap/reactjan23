export default function PresentationComp({users}) {
  return (
    <div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
              {
                users?
                users.map((user)=>(
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                )):null
              }
            </tbody>
        </table>
    </div>
  )
}
