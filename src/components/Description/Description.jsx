import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Text } from './Description.styled';

function Description({ text }) {
    return (
        <Text>
      <TextTruncate
        line={0.8}
        element="span"
        truncateText="…"
        text={text}
            />
        </Text>
    );
}

export default Description