import { FunctionComponent } from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Image, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type network = {
  chainId: number
  name: string
  icon: string
}
const networks: network[] = [
  { chainId: 1, name: 'Mainnet', icon: '/assets/eth-diamond-black-white.jpeg' },
  { chainId: 5, name: 'Goerli', icon: '/assets/eth-diamond-black-white.jpeg' },
]

const Network: FunctionComponent = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Mainnet
      </MenuButton>
      <MenuList>
        {networks.map((network) => (
          <MenuItem key={network.chainId}>
            <Image boxSize="2rem" borderRadius="full" src={network.icon} alt="chain logo" mr="12px" />
            <span>{network.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export { Network }
