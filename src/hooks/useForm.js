import { useEffect, useState } from 'react'

export const useForm = (initialValues) => {
  const [formState, setFormState] = useState(initialValues)

  useEffect(() => {
    setFormState(initialValues)
  }, [initialValues])

  const onInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const reset = () => {
    setFormState(initialValues)
  }

  return {
    ...formState,
    onInputChange,
    formState,
    reset,
  }
}
