function Footer() {
    const date = new Date()
    return (
      <nav id="navbar" className="w-full h-14 flex justify-center">

        <div className="w-full mx-auto max-w-7xl bg-black h-full flex justify-center items-center text-center border-t-2 border-custom-black-900">
          <p className="gradient-text text-center"> Carlos Sanchez © - {date.getFullYear()} </p>
        </div>

      </nav>
    )
  }
  
  export default Footer
  