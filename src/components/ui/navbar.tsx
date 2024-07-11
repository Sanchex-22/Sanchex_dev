function Navbar() {

    return (
      <nav id="navbar" className="w-full h-14 fixed z-40 blur-filter ">
        <div className="h-0.5 bg-gradient-to-r from-black via-jazzberry-jam-900 to-black"></div>
        <div className="w-full mx-auto max-w-7xl h-full flex justify-between items-center px-4 md:px-4 lg:px-0">
          <p className="gradient-text">Carlos Sanchez</p>

          <div className="flex items-center gap-4">
            <p className="border border-custom-black-600 rounded-sm px-4 py-1">GitHub</p>
            <div className="bg-jazzberry-jam-900 h-10 w-10 rounded-full"></div>
          </div>
        </div>

      </nav>
    )
  }
  
export default Navbar
  