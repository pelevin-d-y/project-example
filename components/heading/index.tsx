import cn from 'classnames'
import { BackButton } from 'components/back_button'
import s from './heading.module.scss'

type HeadingProps = {
  className?: string
  actionComponent?: React.ReactNode
  title: string
  description?: string
  backAction?: () => void
}

const Heading: React.FC<HeadingProps> = ({
  className,
  actionComponent,
  title,
  description,
  backAction
}) => {
  return (
    <div className={cn(className, s.heading, backAction && s.withBack)}>
      {backAction && (
        <div className={s.backBox}>
          <BackButton onClick={backAction} />
        </div>
      )}
      <div className={s.headingText}>
        <h1 className={s.title}>{title}</h1>
        {description && <div className={s.description}>{description}</div>}
      </div>
      {actionComponent && <div className={s.action}>{actionComponent}</div>}
    </div>
  )
}

export { Heading }
