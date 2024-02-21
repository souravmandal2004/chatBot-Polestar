import './App.css';
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";

function App() {

  return (
    <div className='flex flex-col gap-80'>
      {/* Heading  */}
      <div className='text-4xl font-bold text-center mt-12'>
        <h1>Welcome to <span className='text-[#034371]'>AiML ChatBot</span></h1>
      </div>


      {/* Input field  */}
      <div className='flex justify-center border-2 max-w-[800px] w-11/12 mx-auto rounded-md'>

        <div className='flex flex-col w-screen'>

            <div className='flex flex-row justify-around bg-white'>
              <div className='mt-4 lg:max-w-[800px] md:max-w-[400px] sm:max-w-[50px]'>
                  <textarea cols="75" rows="2" placeholder='Medical problems only...' className='outline-none'></textarea>
              </div>

              {/* send button  */}
              <div className='cursor-pointer pr-3 pt-7'>
                <IoSend />
              </div>
            </div>


            {/* attachment icon  */}
            <div className='flex bg-[#F7F7F7] h-[40px] w-full items-center pl-4 cursor-pointer gap-2'>
              <div>
                <ImAttachment />
              </div>
              <p>Attach</p>
            </div>
        </div>


        </div>
      </div>
  )
}

export default App;