import { useState } from 'react'
import { toast } from 'react-toastify'

export const useSettingContainer = (
  handleAddNode: (nodeName: string, relatedNode: string, color: string) => void
) => {
  const [color, setColor] = useState<string>('')
  const [nodeName, setNodeName] = useState<string>('')
  const [relatedNode, setRelatedNode] = useState<string>('')

  const handleSubmit = () => {
    if (!nodeName || !relatedNode) {
      return toast('Please fill all input!')
    }
    handleAddNode(nodeName, relatedNode, color)
    setNodeName('')
  }

  return {
    color,
    setColor,
    nodeName,
    setNodeName,
    relatedNode,
    setRelatedNode,
    handleSubmit,
  }
}
