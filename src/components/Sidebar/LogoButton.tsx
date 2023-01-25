import { memo } from "react"
import { LogoSci } from "./Icons"

const LogoItem = memo(() => (
  <li className="p-2 mb-4">
    <LogoSci className="w-6 h-6 fill-gray-300" />
  </li>
))


export default LogoItem