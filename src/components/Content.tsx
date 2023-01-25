import { PropsWithChildren } from "react"


const Content = ({ children }: PropsWithChildren) => (
  <div className="m-4 ml-0 px-6 py-5 rounded-lg shadow-xl border border-gray-200 flex flex-1">
    {children}
  </div>
)

export default Content
