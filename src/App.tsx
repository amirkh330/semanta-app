import { Flex } from '@chakra-ui/react'
import { useApp } from './App.biz'
import { MainContainer } from './components/mainContainer/MainContainer'
import { SettingContainer } from './components/settingContainer/SettingContainer'

export const App = () => {
  const {graph,handleAddNode} = useApp()

  return (
    <Flex w='full' p='1' h='container.md'>
      <Flex
        m='1'
        w='25%'
        borderRadius={8}
        boxShadow='md'
        border='1px solid'
        borderColor='gray.300'
      >
        <SettingContainer handleAddNode={handleAddNode} graph={graph} />
      </Flex>
      <Flex
        m='1'
        w='75%'
        boxShadow='md'
        borderRadius={8}
        border='1px solid'
        borderColor='gray.300'
      >
        <MainContainer graphList={graph} />
      </Flex>
    </Flex>
  )
}
