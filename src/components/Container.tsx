import {ReactNode} from 'react'

type Props = {
  children: ReactNode
}

function Container({children}: Props) {
  return (
    <div className="flex items-center w-full justify-betweenw max-w-[1246px] px-[15px] mx-auto">
      {children}
    </div>
  )
}

export default Container
