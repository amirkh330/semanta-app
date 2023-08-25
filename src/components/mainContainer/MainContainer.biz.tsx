import { useBoolean } from '@chakra-ui/react'
import { useRegisterEvents } from '@react-sigma/core'
import '@react-sigma/core/lib/react-sigma.min.css'
import React, { useEffect, useState } from 'react'

export const useMainContainer = () => {
  const [visible, setVisible] = useBoolean()
  const [node, setNode] = useState<string>()

  const GraphEvents: React.FC = () => {
    const registerEvents = useRegisterEvents()

    useEffect(() => {
      registerEvents({
        clickNode: ({node}) => {
          setNode(node)
          setVisible.on()
        },
      })
    }, [registerEvents])

    return null
  }

  return { GraphEvents, visible, setVisible, node }
}
