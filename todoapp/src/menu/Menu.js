import './Menu.css'
function Menu() {
    return (
        <div className = "Menu">
            <header className="Menu-header">
                <p>{element}</p>
            </header>
        </div>
    )
}
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Quang',
    lastName: 'Bao'
  };
  
  const element = (
    <p>
      Hello, {formatName(user)}!
    </p>
  );
  
  
  
  export default Menu;