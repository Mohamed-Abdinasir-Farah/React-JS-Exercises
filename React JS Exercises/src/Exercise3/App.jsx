import UserCard from './Exercise3';

function App() {
  return (
    <>
      <UserCard 
        email={"mohamed@example.com"}
        password={"password123"}
      />

      <UserCard 
        email={"ahmed@example.com"}
        password={"password1234"}
      />

      <UserCard 
        email={"fatime@example.com"}
        password={"password12abc"}
      />

      <UserCard 
        email={"akram@example.com"}
        password={"passwordABC123"}
      />
    </>
  )
}

export default App;