function Navbar()
{
    return (
        <>
        <div className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="text-xl font-bold">Currency Converter</div>
          {/* Add your navigation links or components here */}
          
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
        </>
    )
}


export default Navbar