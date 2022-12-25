import cn from 'classnames'
import { AddCollectionModal } from 'components/modals/add_collection_modal'
import { useState } from 'react'
import s from './add_collection.module.scss'

type AddCollectionProps = {
  className?: string
}

const AddCollection: React.FC<AddCollectionProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={s.addCollection}>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className={s.button}
        >
          <div className={s.icon}>
            <PlusIcon />
          </div>
          <span className={s.text}>Add NFT collection</span>
        </button>
      </div>
      <AddCollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      />
    </>
  )
}

const PlusIcon = () => (
  <svg
    width="12px"
    height="12px"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.16797 5.1665V0.166504H6.83464V5.1665H11.8346V6.83317H6.83464V11.8332H5.16797V6.83317H0.167969V5.1665H5.16797Z"
      fill="white"
    />
  </svg>
)

export { AddCollection }
