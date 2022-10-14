import React from 'react'

interface CountdownProps {
  textTest: string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  textTest,
}) => {
  return <h1>{textTest}</h1>
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    textTest: {
      title: 'Teste',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
