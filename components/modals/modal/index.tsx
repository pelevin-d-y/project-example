import cn from 'classnames'
import ReactModal from 'react-modal'
import s from './modal.module.scss'

type ModalProps = React.PropsWithChildren<{
  className?: string
  isOpen: boolean
  headerText?: string
  onClose?: () => void
}>

const Modal: React.FC<ModalProps> = ({
  className,
  headerText,
  isOpen,
  onClose,
  children
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={cn(className, s.modal)}
      overlayClassName={s.overlay}
      onRequestClose={onClose}
    >
      {headerText && <div className={s.heading}>{headerText}</div>}
      <CloseIcon className={s.close} onClick={onClose} />
      {children}
    </ReactModal>
  )
}

const CloseIcon = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_302_12028)">
        <path
          d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_302_12028">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { Modal }
