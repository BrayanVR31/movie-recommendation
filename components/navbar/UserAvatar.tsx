import { Avatar } from "@chakra-ui/react";

export default function UserAvatar() {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="User avatar" />
      <Avatar.Image src="example.jpg" />
    </Avatar.Root>
  );
}
