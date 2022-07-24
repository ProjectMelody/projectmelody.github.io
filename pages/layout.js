import {Head} from "next/head"
import "../styles/layout.scss"

function Layout({children}) {
    return <Head><title>Project Melody</title><Head><main>{children}</main>
}

export default Layout;
