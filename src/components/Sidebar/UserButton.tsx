import { memo } from "react"
import cx from "utils/classnames"

interface UserButtonProps {
  isMin: boolean
}
const UserButton = ({ isMin }: UserButtonProps) => (
  <li className="group/item flex mt-auto mb-2 text-gray-400" onClick={e => e.stopPropagation()}>
    <a href="#" className={cx(
      "transition-all duration-500 relative",
      isMin ? "h-10 w-10" : "h-10 w-full",
    )}>
      <div className={cx(
        "inline-flex items-center absolute",
        "transition-all duration-300",
        "w-full h-full rounded-full",
        "group-hover/item:bg-gray-900",
        isMin ? "group-hover/item:w-48" : null
      )}>
        <div className={cx(
          "h-10 aspect-square rounded-full bg-white overflow-hidden",
          "text-gray-700 fond-bold text-2xl leading-none",
          "inline-flex flex-shrink-0 justify-center items-center",
          "group-hover/item:scale-125 scale-75 transition-transform"
        )}>
          <img src="https://picsum.photos/300" />
        </div>
        <div className={cx(
          "flex flex-col justify-center ml-3",
          "transition-all duration-300 translate-x-0 group-hover/item:translate-x-2",
          isMin ? "opacity-0 -translate-x-2 group-hover/item:opacity-100" : null
        )}>
          <span className="font-bold text-sm">Username</span>
          <span className="opacity-80 text-xs">user@email.com</span>
        </div>
      </div>
    </a>
  </li>
)

export default memo(UserButton)