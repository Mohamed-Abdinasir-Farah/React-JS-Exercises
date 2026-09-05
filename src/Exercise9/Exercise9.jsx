import { useState, useEffect } from 'react'

const fetchGitHub = () => {
  const [user, setUser] = useState(null)
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);


 
    const handleSearch = async () => {
      if (!searchName) return;

      setLoading(true);
      setUser(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(`https://api.github.com/users/${searchName}`);
        if (!response.ok) {
          throw new Error("Github User not Found");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch User Data", error)
      }
      setLoading(false);
    }


  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder='Enter a User'
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {
        loading ? <p>Loading</p> : null
      }

      {
        user ? (
          <div style={{ margin: "24px" }}>
            <h3>{user.name || user.login}</h3>
            <img        
              alt={user.login}
              src={user.avatar_url}
              width="100"
              style={{ borderRadius: '50%' }}
            />
            <p>Location: {user.location || 'N/A'}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        ) : null
      }
    </div>
  )
}

export default fetchGitHub;