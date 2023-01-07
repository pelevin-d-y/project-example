import cn from 'classnames'
import { Button } from 'components/button'
import { Heading } from 'components/heading'
import s from './terms_and_rules.module.scss'

type TermsAndRulesProps = {
  className?: string
  onAgree: () => void
}

const TermsAndRules: React.FC<TermsAndRulesProps> = ({
  className,
  onAgree
}) => {
  return (
    <div className={cn(className, s.rules)}>
      <Heading
        title="Terms and Rules"
        description="Terms and Rules"
        actionComponent={
          <Button className={s.action} onClick={onAgree}>
            Agree
          </Button>
        }
      />
      <p className={s.text}>
        This site is just a showcase that provides an example of my code if
        someone asks for one. I took some of it from a real project I was
        involved in and rewrote it.🤗 <br />
        <br />
        The technologies and libraries I used here: <br /> Next.js, Formik,
        React Context, React modal, typescript
      </p>
    </div>
  )
}

export { TermsAndRules }
