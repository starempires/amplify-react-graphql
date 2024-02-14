import * as React from 'react';
import { Accordion, Flex, View } from '@aws-amplify/ui-react';
import { IconsProvider, Rating } from '@aws-amplify/ui-react';
import { FiStar } from 'react-icons/fi';
import { Alert } from '@aws-amplify/ui-react';


export const CustomTitle = ({ courseNumber, courseName }) => {
  return (
    <Flex gap="small">
      <View width="xxl" color="teal.80">
        {courseNumber}
      </View>
      <View>{courseName}</View>

    </Flex>
  );
};

export const CustomTitleComponent = () => {
  return (
    <Accordion.Container>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          <CustomTitle
            courseNumber="CS 103"
            courseName="Mathematical Foundations of Computing"
          />
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>Example content for CS 103</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          <CustomTitle
            courseNumber="CS 106A"
            courseName="Programming Methodology"
          />
          <Accordion.Icon />
        </Accordion.Trigger>
        <Accordion.Content>
         <View>
              <IconsProvider
                    icons={{
                      alert: {
                       },
                    }}
                  >
                  <Alert
                    isDismissible={false}
                    hasIcon={true}
                    heading="Alert heading"
                    >
                    This is the alert message
                  </Alert>
                  </IconsProvider>
              </View>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Container>
  );
};