import { LogoSci } from "components/Sidebar/Icons"
import { InputHTMLAttributes, useEffect, useRef, useState } from "react"
import cx from "utils/classnames"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  isHidden?: boolean
}
const Input = ({ name, label, isHidden, ...rest }: InputProps) => {
  const canCollapse = typeof isHidden === "boolean"

  const innerRef = useRef<HTMLDivElement>(null)
  const [h, setHeight] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const h = innerRef?.current?.clientHeight || 0
    setHeight(h)
    setMounted(true)
  }, [])

  const height = canCollapse
    ? (isHidden ? 0 : h) : 'auto'

  return (
    <div
      style={{ height }}
      className={"flex flex-col transition-all duration-300 relative"}>
      <div ref={innerRef} className={cx(
        "flex w-full pb-4 flex-col space-y-1 transition-all duration-500",
        (mounted && canCollapse) ? "absolute" : null,
        isHidden
          ? "opacity-0 scale-75 translate-y-8"
          : "opacity-100 scale-100 translate-y-0"
      )}>

        <label htmlFor={name}
          className="text-xs uppercase font-bold origin-left scale-75"
        >
          {label}
        </label>
        <input
          name={name}
          {...rest}
          className="rounded-lg px-3 py-1 text-base text-black placeholder:text-gray-600"
        />
      </div>
    </div>
  )
}

export const Login = () => {

  const [isLogin, setLogin] = useState(true)


  return (
    <div className="bg-black rounded-3xl p-12 text-white">

      <div className="text-gray-200 mb-6 flex flex-col items-center space-y-2">
        <LogoSci className="w-12 h-12" />
        <h1 className="font-bold text-2xl tracking-wide flex flex-col items-center justify-center w-full h-10 relative">
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out-2",
            isLogin
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-150 -translate-x-full"
          )}>
            Log in
          </span>
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out-2",
            isLogin
              ? "opacity-0 scale-150 translate-x-full"
              : "opacity-100 scale-100 translate-x-0"
          )}>
            Sign up
          </span>
        </h1>
      </div>


      <div className="flex flex-col w-64">

        <Input
          name="username"
          label="Username"
          placeholder="Your username..."
        />
        <Input
          name="email"
          label="E-mail"
          placeholder="you@example.com"
          isHidden={isLogin}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Your password..."
        />
        <Input
          name="password-repeat"
          label="Repeat your password"
          type="password"
          placeholder="Your password again..."
          isHidden={isLogin}
        />

      </div>

      <div className="transition-all flex flex-col mt-8">
        <button onClick={() => setLogin(true)}
          className={cx(
            "relative rounded-lg p-2 transition-all h-10 flex justify-center items-center duration-500",
            isLogin
              ? "bg-gray-800 shadow-gray-900 shadow-lg translate-y-0"
              : "bg-transparent shadow-none translate-y-20"
          )}>
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out",
            isLogin
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
          )}
          >
            Log in
          </span>
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out",
            isLogin
              ? "opacity-0 scale-0"
              : "opacity-100 scale-100"
          )}
          >
            Enter your credentials
          </span>
        </button>
        <div className="mt-4 flex items-center justify-center text-gray-400 before:w-1/3 before:bg-gray-700 before:h-px before:my-auto after:w-1/3 after:bg-gray-700 after:h-px after:my-auto">
          <span className="mx-3">
            or
          </span>
        </div>
        <button onClick={() => setLogin(false)}
          className={cx(
            "relative rounded-lg p-2 transition-all h-10 flex justify-center items-center duration-500",
            isLogin
              ? "translate-y-0"
              : "bg-gray-800 shadow-gray-900 shadow-lg -translate-y-20"
          )}>
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out",
            isLogin
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
          )}
          >
            Create an account
          </span>
          <span className={cx(
            "absolute transition-all duration-500 ease-in-out",
            isLogin
              ? "opacity-0 scale-0"
              : "opacity-100 scale-100"
          )}
          >
            Sign up
          </span>
        </button>
      </div>

    </div>
  )
}