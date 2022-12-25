import cn from 'classnames'
import s from './whitelist_card.module.scss'
import Image from 'next/image'
import { useAddWhitelist } from '../add_whitelist_context'

type WhitelistCardProps = {
  className?: string
  data: Collection
}

const WhitelistCard: React.FC<WhitelistCardProps> = ({ className, data }) => {
  const { id, image, title } = data
  const { toggleSellOpen, updateCollectionData } = useAddWhitelist()

  const onCardClick = () => {
    updateCollectionData(data)
    toggleSellOpen(true)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onCardClick}
      className={cn(className, s.whitelistCard)}
    >
      <Image
        className={s.image}
        src={'/' + image}
        width={208}
        height={150}
        alt={title}
      />
      <div className={s.title}>{title}</div>
    </div>
  )
}

export { WhitelistCard }
