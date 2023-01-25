import { memo, MouseEventHandler, useCallback } from "react"
import cx from "utils/classnames"
import { icons, IconType } from "./Icons"

interface SidebarButtonProps {
  idx: number
  label: IconType
  isMin: boolean
  isActive: boolean
  onClick: any
}
const SidebarButton = ({ idx, label, isMin, isActive, onClick }: SidebarButtonProps) => {
  console.log({ render: label })

  const Icon = memo(icons[label])

  const handleClick: MouseEventHandler<HTMLLIElement> = useCallback((e) => {
    e.stopPropagation()
    onClick(idx)
  }, [onClick, idx])

  return (
    <li className="group/item flex py-1" onClick={handleClick}>
      <a href="#" className={cx(
        "transition-all duration-500 relative",
        isMin ? "h-10 w-10" : "h-10 w-full",
      )}>
        <div className={cx(
          "inline-flex items-center",
          "absolute rounded-full",
          "transition-all duration-300",
          "w-full h-full",
          isActive ? "bg-gray-800 text-white" : "group-hover/item:bg-gray-900 text-gray-400",
          isMin ? "group-hover/item:w-40" : null
        )}>
          <div className="inline-flex shrink-0 items-center justify-center h-10 aspect-square">
            <Icon className="fill-current h-4 w-4 transition-all duration-300 group-hover/item:translate-x-2" />
          </div>
          <span className={cx(
            "pt-1 ml-1 transition-all duration-300 translate-x-0 group-hover/item:translate-x-2",
            isMin ? "opacity-0 -translate-x-2 group-hover/item:opacity-100" : null
          )}>
            {label}
          </span>
        </div>
      </a>
    </li>
  )
}

export default memo(SidebarButton)