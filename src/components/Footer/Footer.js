import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import './Footer.css'

function Footer() {

    // const shortname = (name) => {
    //     if(name.length > 10) {
    //         return name.split(" ")[1]
    //     } else {
    //         return name
    //     }
    // }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                 by {headerData.name}
            </p>
            
        </div>
    )
}

export default Footer

