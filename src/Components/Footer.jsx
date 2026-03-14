import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import logoClassyBuy from "../assets/logo-classybuybest.png";
import paymentcart from "../assets/paymentCard.png";


const Footer = () => {
  return (
    <footer className=' bg-gray-100 text-black pt-15 mt-5 pb-5'>
      <div className='max-w-screen-2x1 container mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 '>

        {/* logo and deatials*/}
        <div className=' md:col-span-2'>
          <div className='  py-2 '><Link to="/"><img src={logoClassyBuy} alt="" className="py-3 h-[13vh] w-[32vh]"/></Link></div>

          <p className=' md:mr-12'>The smooth touch of the best fabrics, modern design and comfortable fitting—this garment will give you a stylish look and all-day comfort, enhancing your confidence and beauty in every moment. Our company is always committed to providing quality products.</p>
        </div>
        {/* services div */}
        <div>
          <h3 className='text-xl font-semibold mb-4'>INFORMATION</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Contact Us</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>About ClassyBuy</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Store Locator</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Community Guidelines</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>POLICIES</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Delivery Policy</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Exchange Policy</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Customer support</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Safety Advisory</Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className='text-xl font-semibold mb-4'>OUR PRODUCTS</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>All </Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>New Arrivals</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>On Sale</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Womens</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Mens</Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 '>Kids</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <ul className=' space-y-2'>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaFacebookF />   <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link to="/" className=' hover:text-amber-500 flex items-center space-x-2'>
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* copyright */}
      <div className='max-w-screen-2x1 container mx-auto px-12 mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black border-t border-gray-300 pt-4'>
        <p className='text-sm'> Copyright &copy; {new Date().getFullYear()} <NavLink to= "/" className=" text-blue-600 hover:text-red-400"> www.classybuy.com </NavLink> All rights reserved</p>
        <div>

        <div><img src={paymentcart} alt="" className=' justify-center h-20 w-70 rounded-lg'/></div>
        </div>
        <div className='flex items-center gap-4'>
          <Link to="/" className=' hover:text-amber-500'>Terms & Conditions</Link>
          <Link to="/" className=' hover:text-amber-500'>Privacy Policy</Link>
        </div>
        
      </div>
      <p className='max-w-screen-2x1 container mx-auto px-12 mt-2 text-sm'>Developed by- <span className='text-green-600 font-light italic'>Rashed Jaman Raj</span></p>
    </footer>
  )
}

export default Footer

