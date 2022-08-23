





import avatar from './avatar.png'
function App() {
  return (
    <div className="bg-grey-300 h-screen w-screen p-12">
      <header className="flex flex-row justify-start items-center ">
        <img className="rounded-full object-contain h-8 w-8" src="https://github.com/JcscJosecarlossilvacoelho.png"/>
        <span className="font-sans text-xs font-bold text-white ml-3" >José Coelho</span>
      </header>
      <section className=" grid grid-cols-2 gap-3 justify-start h-full  items-center ">
         <div className="flex flex-col gap-20">
            <div>
              <span className="font-sans text-7xl text-white font-bold">PORTUGALAPI</span>
              <p></p>
              <span className="font-serif text-5xl text-white font-light">Let´s transform <br/> Portugal into an API</span>
            </div>
            <div className="w-[350px] flex flex-row justify-between flex-wrap">
               <a className="font-sans font-normal text-white">👁 Use cases of API</a>
               <a  className="font-sans font-normal text-white">📝 Join us! And let´s <br/> transform Portugal</a>
               <a  className="font-sans font-normal text-white">📦 Documentation</a>
            </div>
         </div>
         <div >
          <img  src={avatar}/>
         </div>
      </section>
    </div>
  )
}

export default App
