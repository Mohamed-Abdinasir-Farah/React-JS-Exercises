const UserCard = ({email, password}) => {
  return (
    <>
      <h1>Your email is {email}</h1>
      <h2>Your password is {password}</h2>
    </>
  )
}

export default UserCard;