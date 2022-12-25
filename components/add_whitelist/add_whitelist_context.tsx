import React, { useCallback, useMemo, useReducer } from 'react'

type FormData = {
  terms: string
  price: string
  currency: string
  blockchain: string
}

type State = {
  formData: FormData
  collectionData?: Collection | null
  isSellOpen: boolean
}

type Action =
  | { type: 'SET_FORM_DATA'; payload: Partial<FormData> }
  | { type: 'TOGGLE_SELL_OPEN'; payload: boolean }
  | { type: 'SET_COLLECTION_DATA'; payload: Collection | null }

const addCollectionReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      }
    case 'TOGGLE_SELL_OPEN':
      return {
        ...state,
        isSellOpen: action.payload
      }
    case 'SET_COLLECTION_DATA':
      return {
        ...state,
        collectionData: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  formData: { terms: '', price: '', currency: '', blockchain: '' },
  collectionData: undefined,
  isSellOpen: false
}

type ContextType = State & {
  toggleSellOpen: (isOpen: boolean) => void
  updateCollectionData: (data: Collection) => void
}

const AddWhitelistContext = React.createContext<ContextType | null>(null)

type ProviderType = {
  children: React.ReactNode
}

const AddWhitelistContextProvider = ({ children }: ProviderType) => {
  const [state, dispatch] = useReducer(addCollectionReducer, initialState)

  const updateFormData = useCallback((data: Partial<FormData>) => {
    dispatch({ type: 'SET_FORM_DATA', payload: data })
  }, [])

  const updateCollectionData = useCallback((data: Collection) => {
    dispatch({ type: 'SET_COLLECTION_DATA', payload: data })
  }, [])

  const toggleSellOpen = useCallback((isOpen: boolean) => {
    dispatch({ type: 'TOGGLE_SELL_OPEN', payload: isOpen })
  }, [])

  const value = useMemo(() => {
    return {
      ...state,
      toggleSellOpen,
      updateCollectionData
    }
  }, [state, toggleSellOpen, updateCollectionData])

  return (
    <AddWhitelistContext.Provider value={value}>
      {children}
    </AddWhitelistContext.Provider>
  )
}

const useAddWhitelist = () => {
  const context = React.useContext(AddWhitelistContext)
  if (context === null) {
    throw new Error(
      'useAddCollection must be used within a AddWhitelistContextProvider'
    )
  }
  return context
}

const AddWhitelistContextConsumer = AddWhitelistContext.Consumer

export {
  AddWhitelistContextProvider,
  useAddWhitelist,
  AddWhitelistContextConsumer
}
