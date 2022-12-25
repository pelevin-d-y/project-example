import cn from 'classnames'
import { Button } from 'components/button'
import Image from 'next/image'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { useAddWhitelist } from '../add_whitelist_context'
import s from './sell_whitelist.module.scss'
import { SellWhitelistForm } from './sell_whitelist_form'

type SellWhitelistProps = {
  className?: string
}

const SellWhitelist: React.FC<SellWhitelistProps> = ({ className }) => {
  const { toggleSellOpen, collectionData } = useAddWhitelist()

  return (
    <Container className={cn(s.sellWhitelist, className)}>
      <Heading
        title="Sell your whitelist"
        description="The offer will be seen by 3,000,000 people daily"
        backAction={() => toggleSellOpen(false)}
        actionComponent={<Button disabled>Place an offer</Button>}
      />
      <div className={s.content}>
        <div className={s.form}>
          <SellWhitelistForm />
        </div>
        <div className={s.info}>
          <div className={s.title}>Whitelist for collection</div>
          {collectionData?.image && (
            <Image
              className={s.image}
              src={'/' + collectionData?.image}
              width={325}
              height={232}
              alt={collectionData?.title}
            />
          )}
          <div className={s.name}>{collectionData?.title}</div>
          <Button className={s.button} size="small" type="outlined">
            Change collection
          </Button>
        </div>
      </div>
    </Container>
  )
}

export { SellWhitelist }
