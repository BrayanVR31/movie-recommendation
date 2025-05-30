import {
  HStack,
  VStack,
  Card,
  Button,
  Field,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { PasswordInput } from "@/components/ui/password-input";

export default function Home() {
  return (
    <HStack justifyContent="center" alignItems="center" minH="100vh">
      <Card.Root flex="0 1 370px">
        <Card.Header>
          <Card.Title fontWeight="bolder" fontSize="xl">
            Login
          </Card.Title>
          <Card.Description>
            Welcome back! Please login to your account.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <VStack gap={4}>
            {/** Email field */}
            <Field.Root required>
              <Field.Label>
                Email
                <Field.RequiredIndicator />
              </Field.Label>
              <InputGroup startElement={<AiOutlineMail />}>
                <Input placeholder="me@example.com" />
              </InputGroup>
            </Field.Root>
            {/** Password field */}
            <Field.Root required>
              <Field.Label>
                Password
                <Field.RequiredIndicator />
              </Field.Label>
              <InputGroup startElement={<RiLockPasswordLine />}>
                <PasswordInput placeholder="Enter your password" />
              </InputGroup>
            </Field.Root>
          </VStack>
        </Card.Body>
        <Card.Footer>
          <Button colorPalette="orange" flex="1">
            <RiLoginBoxLine />
            Sign in
          </Button>
        </Card.Footer>
      </Card.Root>
    </HStack>
  );
}
