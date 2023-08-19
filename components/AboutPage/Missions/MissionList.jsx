import { List, ListItem, UnorderedList, Flex } from "@chakra-ui/react";
import { missionList } from "./missionConsts";

const MissionList = () => {
  return (
    <Flex flexDirection="column" marginTop="1rem">
      <MissionListing />
    </Flex>
  );
};

export default MissionList;

const MissionListing = () => {
  return (
    <UnorderedList>
      {missionList.map((mission) => (
        <ListItem
          key={mission.bullet}
          fontSize={{ base: "sm", sm: "md" }}
          color="#797979"
          marginBottom="0.5rem"
        >
          {mission.bullet}
        </ListItem>
      ))}
    </UnorderedList>
  );
};
