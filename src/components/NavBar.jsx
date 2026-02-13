import dayjs from 'dayjs'
import { navIcons, navLinks } from '#constants'
import React from 'react'
const NavBar = () => {
  return (
    <nav>
      <div>
        <img src='/images/logo.svg' alt='logo'/>
        <p className='font-bold'>Pratyay's Portfolio</p>

        <ul>
          {
            navLinks.map(({id,name})=>(
              <li key={id}>
                <p>{name}</p>
              </li>
            ))
          }
        </ul>

        <time>{dayjs().format('dddd MMM D h:mm A')}</time>
      </div>
      <div>
        <ul>
          {navIcons.map(({id,img})=>(
            <li key={id}>
              <img src={img} className='icon-hover' alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar