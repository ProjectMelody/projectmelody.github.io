import {Head} from "next/head"
// import "../styles/layout.scss"

function Layout({children}) {
    return <main className="markdown-body">{children}</main>
}

export default Layout;
