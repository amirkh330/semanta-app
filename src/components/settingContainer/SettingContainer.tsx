import { Button, Flex, Input, Select, Text, chakra } from '@chakra-ui/react'
import { SketchPicker } from 'react-color'
import { useSettingContainer } from './SettingContainer.biz'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MultiDirectedGraph } from 'graphology'
import { Attributes } from 'react'

interface ISettingContainer {
  handleAddNode: (nodeName: string, relatedNode: string, color: string) => void
  graph: MultiDirectedGraph<Attributes, Attributes, Attributes>
}

export const SettingContainer = ({
  handleAddNode,
  graph,
}: ISettingContainer) => {
  const {
    color,
    nodeName,
    setColor,
    setNodeName,
    setRelatedNode,
    handleSubmit,
  } = useSettingContainer(handleAddNode)

  return (
    <Flex direction='column' w='full'>
      <Flex
        bg='blue.800'
        p='4'
        justifyContent='center'
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
      >
        <Text color='white' fontWeight='extrabold' fontSize='lg'>
          Settings
        </Text>
      </Flex>
      <Flex direction='column' my='4' mx='2'>
        <chakra.div mb='8' gap='2'>
          <Text fontSize='sm' fontWeight='bold' color='gray.700' mb='2'>
            Node name:
          </Text>
          <Input
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
            placeholder='please fill node name'
          />
        </chakra.div>
        <chakra.div mb='8' gap='2'>
          <Text fontSize='sm' fontWeight='bold' color='gray.700' mb='2'>
            Relate Node :
          </Text>
          <Select
            onChange={(e) => setRelatedNode(e.target.value)}
            placeholder='Select relatedNode'
          >
            {graph.nodes()?.map((option: string, index: number) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              )
            })}
          </Select>
        </chakra.div>
        <chakra.div mb='8' gap='2'>
          <Text fontSize='sm' fontWeight='bold' color='gray.700' mb='2'>
            Node Color:
          </Text>
          <Flex justifyContent='center'>
            <SketchPicker onChange={({ hex }) => setColor(hex)} color={color} />
          </Flex>
        </chakra.div>
        <Button size='sm' colorScheme='blue' onClick={handleSubmit}>
          Add Node
        </Button>
        <ToastContainer theme='dark' />
      </Flex>
    </Flex>
  )
}
