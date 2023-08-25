import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { SigmaContainer } from '@react-sigma/core'
import '@react-sigma/core/lib/react-sigma.min.css'
import { useMainContainer } from './MainContainer.biz'
import { MultiDirectedGraph } from 'graphology'
import { Attributes } from 'react'

interface IMainContainer {
  graphList: MultiDirectedGraph<Attributes, Attributes, Attributes>
}

export const MainContainer = ({ graphList }: IMainContainer) => {
  const { GraphEvents, setVisible, visible, node } = useMainContainer()

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
          View
        </Text>
      </Flex>
      <SigmaContainer
        style={{ height: '100%', width: '100%' }}
        graph={graphList}
      >
        <GraphEvents />
      </SigmaContainer>
      <Modal isOpen={visible} onClose={setVisible.off}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Node Detail ... </ModalHeader>
          <Divider />
          <ModalBody>
            <Flex p='4' alignItems='center' w='full'>
              You select
              <Text fontWeight='bold' mx='2'>
                {node}
              </Text>
              .
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
