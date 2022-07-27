import { Box, Text } from "native-base"


interface IProps {
  children: React.Component
}

export default (props: IProps)  => {
  return(
    <Box>
      <Text>{props.children}</Text>
    </Box>
  )
}