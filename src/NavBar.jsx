import "./NavBar.css";

export function NavBar({setOption}) {

  return (
    <>
      <div className="NavBar">
        <div className="container">
        <button onClick={() => {setOption('About')}}>About</button>
        <button onClick={() => {setOption('Work')}}>Works</button>
        <button onClick={() => {setOption('Contact')}}>Contact</button>
        </div>
      </div>
    </>
  );
}
