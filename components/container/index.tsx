import cn from 'classnames'
import s from './container.module.scss'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn(className, s.container)}>{children}</div>
}

export { Container }
