import cn from 'classnames'
import { Input } from 'components/input'
import { Selector } from 'components/select'
import { TextArea } from 'components/textarea'
import { Form, Formik } from 'formik'
import s from './sell_whitelist_form.module.scss'

type SellWhitelistFormProps = {
  className?: string
}

const currencies = [
  {
    value: 'bitcoin',
    label: 'Bitcoin'
  },
  {
    value: 'tether',
    label: 'Tether'
  },
  {
    value: 'ether',
    label: 'Ether'
  },
  {
    value: 'solana',
    label: 'Solana'
  }
] as const

const blockchain = [
  {
    value: 'Bitcoin 1',
    label: 'Bitcoin 1'
  },
  {
    value: 'Bitcoin 2',
    label: 'Bitcoin 2'
  },
  {
    value: 'Bitcoin 3',
    label: 'Bitcoin 3'
  },
  {
    value: 'Bitcoin 4',
    label: 'Bitcoin 4'
  }
] as const

const SellWhitelistForm: React.FC<SellWhitelistFormProps> = ({ className }) => {
  return (
    <div className={cn(className, s.sellWhitelistForm)}>
      <Formik
        initialValues={{
          terms: '',
          price: 0,
          currency: '',
          blockchain: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ getFieldProps, handleSubmit, setFieldValue }) => (
          <Form>
            <TextArea
              className={s.textarea}
              {...getFieldProps('terms')}
              label="Your terms"
              placeholder="Everything a buyer needs to know about your offer"
            />
            <div className={s.row}>
              <Input
                className={s.input}
                {...getFieldProps('price')}
                label="Price"
                type="number"
              />
              <Selector
                options={currencies}
                defaultValue={currencies[0]}
                label="Currency"
                size="big"
              />
            </div>
            <div className={s.selectRow}>
              <Selector
                className={s.selector}
                options={blockchain}
                defaultValue={blockchain[0]}
                label="Blockchain"
                size="big"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { SellWhitelistForm }
