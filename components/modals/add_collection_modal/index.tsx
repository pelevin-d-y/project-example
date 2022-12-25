import cn from 'classnames'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import Link from 'next/link'
import { Modal } from '../modal'
import s from './add_collection_modal.module.scss'

type AddCollectionModalProps = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const schema = yup.object().shape({
  name: yup.string().required('Collection name is required'),
  link: yup.string().required('Collection link is required'),
  accept_rules: yup
    .boolean()
    .oneOf([true], 'You need to accept rules and terms')
})

const AddCollectionModal: React.FC<AddCollectionModalProps> = ({
  className,
  isOpen,
  onClose
}) => {
  return (
    <Modal
      className={cn(className, s.addCollectionModal)}
      isOpen={isOpen}
      headerText="Add collection"
      onClose={onClose}
    >
      <div className={s.content}>
        <div className={s.title}>Add NFT collection</div>
        <div className={s.description}>Only real collections can be added</div>
        <Formik
          onSubmit={(values) => {
            console.log('values', values)
            return Promise.resolve('')
          }}
          initialValues={{
            name: '',
            link: '',
            accept_rules: false
          }}
          validationSchema={schema}
          validateOnChange={false}
        >
          {({ getFieldProps, isSubmitting, errors }) => {
            return (
              <Form className={s.form}>
                <Input
                  className={s.input}
                  error={errors.name}
                  label="Name of collection"
                  placeholder="Doge"
                  {...getFieldProps('name')}
                />
                <Input
                  className={s.input}
                  error={errors.link}
                  label="Twitter link"
                  placeholder="twitter.com/name"
                  {...getFieldProps('link')}
                />
                <div className={s.footer}>
                  <div className={s.checkboxField}>
                    {errors.accept_rules && (
                      <div className={s.checkboxErrors}>
                        {errors.accept_rules}
                      </div>
                    )}
                  </div>
                  <Button htmlType="submit" disabled={isSubmitting}>
                    Add collection
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Modal>
  )
}

export { AddCollectionModal }
