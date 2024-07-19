import logo from '../assets/zulkefalLogo.png'
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaSquareXTwitter} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { FaStackOverflow } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';
import { RxResume } from 'react-icons/rx';

import React from 'react'

const Navbar = () => {
  return (
    <nav className='mb-2 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/ethereumblockchaindeveloper/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
        </a>
        <a href="https://www.github.com/zulkefal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
            <FaGithub />
        </a>
        <a href="https://leetcode.com/u/blockchainer15/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <SiLeetcode />
        </a>
        <a href="https://stackoverflow.com/users/17253387/zulkefal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaStackOverflow />
        </a>
        
      
    </div>
</nav>
  )
}

export default Navbar