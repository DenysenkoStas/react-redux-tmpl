import React from 'react';
import {ExampleLayout} from './Examples';
import {TabItem, Tabs} from '../../shared';

const TabsExample = () => {
  return (
    <ExampleLayout propsList='children, className, defaultIndex, onTabClick'>
      <Tabs className='mt-25' defaultIndex='1' onTabClick={console.log}>
        <TabItem label='First tab' index='1'>
          Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit
          amet aliquam vel, ullamcorper sit amet ligula.
        </TabItem>
        <TabItem label='Second tab' index='2'>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis
          porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.
        </TabItem>
      </Tabs>
    </ExampleLayout>
  );
};

export default TabsExample;
