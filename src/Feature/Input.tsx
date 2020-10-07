import React, { FunctionComponent, ChangeEvent } from 'react'

type Props = {
  id: string
  label: string
  setValue: (e: string) => void
  type?: string
  value: string
}

export const Input: FunctionComponent<Props> = ({
  id,
  label,
  setValue,
  value,
  type = 'text',
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        onChange={handleChange}
        value={value}
        data-test-id={id}
      />
    </label>
  )
}
