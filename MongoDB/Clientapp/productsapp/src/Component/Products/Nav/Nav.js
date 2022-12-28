import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"
import "./a.css"


function Nav() {
  return (
    <div className={styles.maindiv}>
   <Link to="/">Home</Link>
   <Link to="/Users">Users</Link>
   <Link to="/NewUsers">Newuser</Link>
    </div>
  )
}

export default Nav