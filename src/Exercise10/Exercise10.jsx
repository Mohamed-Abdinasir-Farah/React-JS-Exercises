const UserLists = () => {
  const userLists = [
    {
      id: crypto.randomUUID(),
      name: "Mohamed",
      email: "mohamed1234"
    },
    {
      id: crypto.randomUUID(),
      name: "Ahmed",
      email: "ahmed1234"
    },
    {
      id: crypto.randomUUID(),
      name: "Kafia",
      email: "kafia1256"
    }
  ];

  return (
    <div>
      <h1>Users Info</h1>

      {userLists.length > 0 ? (
        <ul>
          {userLists.map((userList) => (
            <li key={userList.id}>Name:{userList.name} & Email:{userList.email} </li>
          ))}
        </ul>
      ) : (
        <h3>No users found.</h3>
      )}
    </div>
  );
};

export default UserLists;