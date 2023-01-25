/**
 * reproduction of sidebar design and movement
 * found at https://twitter.com/JoshGuoSpace/status/1617484846955368449
 */

import { useState } from "react"
import cx from "utils/classnames"
import { IconType } from "./Icons"

import LogoItem from "./LogoButton"
import SidebarButton from "./SidebarButton"
import UserButton from "./UserButton"

const buttons: IconType[] = [
  "Home", "Dashboard", "Store", "Reports", "Design", "Settings"
]

const Sidebar = () => {
  const [isCompressed, setCompressed] = useState(false)
  const [active, setActive] = useState(0)

  // useEffect(() => {
  //   const t = setInterval(() => setCompressed(c => !c), 5000)
  //   return () => clearInterval(t)
  // }, [])

  return (
    <ul
      className={cx(
        "relative m-4 p-3 flex flex-col flex-shrink-0 ",
        "bg-black text-sm font-thin rounded-xl shadow-xl border border-gray-900",
        "transition-all duration-500",
        isCompressed ? "w-16" : "w-60"
      )}
      onClick={() => setCompressed(c => !c)}
    >
      <LogoItem key="logoitem" />

      {buttons.map((b, k) => (
        <SidebarButton
          idx={k}
          key={b}
          label={b}
          isMin={isCompressed}
          isActive={active === k}
          onClick={setActive}
        />
      ))}

      <UserButton
        key="user100"
        isMin={isCompressed}
      />

    </ul>
  )
}

export default Sidebar