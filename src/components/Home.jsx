import headerImg from '../assets/header_img.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header className="py-8 px-[5%] bg-green-100">
      <div className='flex flex-col sm:flex-row sm:justify-center gap-[20px] sm:gap-[200px] items-center text-center sm:text-left'>
        <div className='w-full sm:w-[400px] flex flex-col gap-3'>
          <h1 className="text-gray-800 font-bold text-5xl">Order your Dairy <br />Groceries</h1>
          <h1 className="text-white font-bold text-4xl">#Free Delivery</h1>
          <div className='relative flex items-center bg-white w-fit rounded-[30px] p-[2px] mx-auto sm:mx-0'>
            <div className=''>
              <i className="fa-solid fa-magnifying-glass text-md text-gray-500 absolute left-[15px] top-[16px]"></i>
              <input type="text" placeholder="Search" className='px-12 py-2 rounded-[30px] focus:outline-none' id="" />
            </div>
            <div>
              <Link to="#" className="bg-green-500 text-white py-2 px-6 rounded-[30px] hover:bg-green-700">Search</Link>
            </div>
          </div>
        </div>
        <div className='sm:w-[450px] w-full h-[400px] z-20 border-[10px] border-white rounded-[40px]'>
          <img src={headerImg} alt="header image" className='w-full h-full object-cover rounded-[30px]' />
        </div>
      </div>
    </header>
  )
}

export default Home