import { AddWhitelistContent } from 'components/add_whitelist'
import {
  AddWhitelistContextProvider,
  AddWhitelistContextConsumer
} from 'components/add_whitelist/add_whitelist_context'
import { SellWhitelist } from 'components/add_whitelist/sell_whitelist'
import { Container } from 'components/container'
import { TermsAndRules } from 'components/terms_and_rules'
import { useState } from 'react'
import s from 'components/add_whitelist/add_whitelist.module.scss'

export default function AddWhitelist() {
  const [showTermsAndRules, setShowTermsAndRules] = useState(true)

  return (
    <AddWhitelistContextProvider>
      <AddWhitelistContextConsumer>
        {(context) => (
          <Container className={s.content}>
            {(() => {
              switch (true) {
                case showTermsAndRules:
                  return (
                    <TermsAndRules
                      onAgree={() => setShowTermsAndRules(!showTermsAndRules)}
                    />
                  )
                case context?.isSellOpen:
                  return <SellWhitelist />
                default:
                  return <AddWhitelistContent />
              }
            })()}
          </Container>
        )}
      </AddWhitelistContextConsumer>
    </AddWhitelistContextProvider>
  )
}
