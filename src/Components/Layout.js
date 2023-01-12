import React from "react"
import Navbar from "./Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <footer>
        <p className="footer">Copyright {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
