import { FunctionComponent } from 'react'
import { Text, Box, Wrap, WrapItem, Center } from '@chakra-ui/react'

const Content: FunctionComponent = () => {
  return (
    <Box>
      <Text fontSize="6xl" textAlign="center" my="30" className="web3-title" data-testid="text">
        welcome to web3 template
      </Text>
      <Wrap spacing="30px" justify="center" my="50">
        <WrapItem border="2px" className="web3-background" data-testid="item-1">
          <Center w="300px" h="300px">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background" data-testid="item-2">
          <Center w="300px" h="300px">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background" data-testid="item-3">
          <Center w="300px" h="300px">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background" data-testid="item-4">
          <Center w="300px" h="300px">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem border="2px" className="web3-background" data-testid="item-5">
          <Center w="300px" h="300px">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export { Content }
