import { AntDesign } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Heading,
  Icon,
  Input,
  InputField,
  KeyboardAvoidingView,
  LinearGradient,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const LogoBlock = () => {
  return (
    <VStack flex={0} justifyContent="center" alignItems="center" mt={"$16"}>
      <Center h={"$56"} w={"$56"} bg="$white" borderRadius={"$3xl"} backgroundColor={'rgba(255, 255, 255, 0.4)'} >
        <FontAwesome6 name="mountain" size={125} color="black" />
      </Center>
      <Heading color="white" size="3xl" >The Crag</Heading>
      <Text color="white" italic>Where Community Meets Climbing</Text>
    </VStack>
  )
}

const LoginBlock = () => {
  return (
    <VStack flex={0} justifyContent="center" alignItems="center" space="md" mt={"$16"}>
      <HStack>
        <Box backgroundColor={'rgba(255, 255, 255, 0.2)'} h={"$12"} width={"$full"} borderRadius={"$full"} >
          <HStack>
            <Input flex={1} h={"$12"} borderWidth={0}>
              <Center flex={0} h={"$12"} w={"$12"} borderRadius={"$full"} opacity={"$100"} backgroundColor={'rgba(255, 255, 255, 0.7)'}>
                <AntDesign name={"user"} size={24} color="black" />
              </Center>
              <InputField color="$white" placeholderTextColor={"$white"} placeholder={"Username"} />
            </Input>
          </HStack>
        </Box>
      </HStack>
      <HStack>
        <Box backgroundColor={'rgba(255, 255, 255, 0.2)'} h={"$12"} width={"$full"} borderRadius={"$full"} >
          <HStack>
            <Input flex={1} h={"$12"} borderWidth={0}>
              <Center flex={0} h={"$12"} w={"$12"} borderRadius={"$full"} opacity={"$100"} backgroundColor={'rgba(255, 255, 255, 0.7)'}>
                <AntDesign name={"key"} size={24} color="black" />
              </Center>
              <InputField color="$white" placeholderTextColor={"$white"} placeholder={"Password"} />
            </Input>
          </HStack>
        </Box>
      </HStack>

    </VStack>
  )
}

const SubmitBlock = () => {
  return (
    <VStack flex={0} justifyContent="center" alignItems="center" space="md" mt={5}>
      <Button backgroundColor={"$white"} h={"$12"} width={"$full"} borderRadius={"$full"} >
        <ButtonText color={"$black"}>Login</ButtonText>
      </Button>
      <Text color="$white">
        Don't have an account? <Text color={"$white"} underline>Sign Up</Text>
      </Text>
      <Text underline mt={"$16"} color="$white">Forgot Password?</Text>
    </VStack>
  )
}




export default function Home() {
  return (
    <Box flex={1}>
      <LinearGradient
        flex={1}
        colors={['$rose500', '$orange500', '$cyan500']}
        as={ExpoLinearGradient}>
        <SafeAreaView flex={1} padding={20}>
          <Box flex={1} paddingHorizontal={"$5"} justifyContent="center" alignItems="center">
            <VStack space="md" flex={1} w={"$full"}>
              <LogoBlock />
              <LoginBlock />
              <SubmitBlock />
            </VStack>
          </Box>
        </SafeAreaView>
      </LinearGradient>
    </Box >
  );
}
