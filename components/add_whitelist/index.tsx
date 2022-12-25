import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { Input } from 'components/input'
import { useState } from 'react'
import { useDebounce } from 'utils/hooks'
import { AddCollection } from './add_collection'
import s from './add_whitelist.module.scss'
import { WhitelistCard } from './whitelist_card'

type AddWhitelistContentProps = {
  className?: string
}

const AddWhitelistContent: React.FC<AddWhitelistContentProps> = ({
  className
}) => {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce(search, 500)

  const { data, isFetching } = useQuery({
    queryKey: ['whitelist', debouncedValue],
    queryFn: async (): Promise<Collection[]> => {
      const params = { search: debouncedValue }
      const url = '/api/cards?' + new URLSearchParams(params)

      const response = await fetch(url)

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response.json())
        }, 1000)
      })
    }
  })

  return (
    <Container className={cn(className, s.whitelistContent)}>
      <Heading
        title="Sell your whitelist"
        description="The offer will be seen by 3,000,000 people daily"
      />
      <div className={s.content}>
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          label="Name of collection"
          placeholder="Valhalla"
        />
        {isFetching ? (
          <div className={s.loading}>Loading...</div>
        ) : (
          <div className={s.cards}>
            {data?.map((card) => (
              <WhitelistCard key={card.id} data={card} />
            ))}
            {debouncedValue && <AddCollection />}
          </div>
        )}
      </div>
    </Container>
  )
}

export { AddWhitelistContent }
