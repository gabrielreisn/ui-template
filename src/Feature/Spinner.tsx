import React, { FunctionComponent } from 'react'
import { css, keyframes } from 'emotion'
import { colors } from 'constants/colors'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
export const loading = css`
  border: 6px solid ${colors.gray_100};
  border-radius: 50%;
  border-top: 6px solid ${colors.blue_100};
  width: 90px;
  height: 90px;
  animation: ${spin} 2s linear infinite;
`

export const Spinner: FunctionComponent = () => {
  return <div className={loading} data-testid="loading-spinner" />
}
