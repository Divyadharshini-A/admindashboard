import "./newUser.css";



const NewUser = () => {
  return (
    <>
      <div className="newUser">
        <h1 className="newUserTitle">New Organization</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newUserItem">
            <label>Company Name</label>
            <input type="text" placeholder="company name" />
          </div>
          <div className="newUserItem">
            <label>Company Email</label>
            <input type="email" placeholder="company@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="newUserItem">
            <label>Contact</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="text" placeholder="Bombay| India" />
          </div>
          <div className="newUserItem">
            <label>Organization type</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Government</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Non-Government</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div></>
  )
}

export default NewUser