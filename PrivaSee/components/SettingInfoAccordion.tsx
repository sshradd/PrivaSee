import React, { useState } from 'react';
import {List} from 'react-native-paper';

interface SettingInfoAccordionProps {
  title: string;
  children: React.ReactNode;
}

const SettingInfoAccordion: React.FC<SettingInfoAccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title={title}
      expanded={expanded}
      onPress={handlePress}
    >
      {children}
    </List.Accordion>
  );
};

export default SettingInfoAccordion;