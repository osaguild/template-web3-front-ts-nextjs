import { FunctionComponent } from 'react'
import { Text, Box, Wrap, WrapItem, Center } from '@chakra-ui/react'

const Content: FunctionComponent = () => {
  return (
    <Box>
      <Text fontSize="6xl" textAlign="center" my="30" className="web3-title">
        welcome to web3 template
      </Text>
      <Wrap spacing="30px" justify="center" my="50">
        <WrapItem border="2px" className="web3-background">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export { Content }
