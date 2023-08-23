"use client";
import { PRIVACY_POLICY_CONTENT } from "./privacyContentConsts";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const PrivacyContent = () => {
  return (
    <>
      {PRIVACY_POLICY_CONTENT.map((content, index) => (
        <Box key={index} marginBottom="1rem">
          <Text color="#797979">{content?.body}</Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            marginBottom="0.5rem"
            color="gray.700"
          >
            {content?.title}
          </Text>
          <Text marginBottom="0.5rem" color="#797979">
            {content?.content}
          </Text>
          <Text
            fontSize="xl"
            fontWeight="bold"
            marginBottom="0.5rem"
            color="gray.700"
          >
            {content?.subTitle}
          </Text>
          <Text color="#797979">{content?.subTitle_body}</Text>

          {/* Rendering the info_list */}
          {content?.info_list && content?.info_list.length > 0 && (
            <Box marginTop="0.5rem">
              <Text fontSize="xl" fontWeight="bold">
                How we use your information:
              </Text>
              <UnorderedList spacing="3" marginTop="0.5rem" color="#797979">
                {content?.info_list.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default PrivacyContent;
