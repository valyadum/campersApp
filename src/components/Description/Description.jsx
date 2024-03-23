import React from 'react';
import TextTruncate from 'react-text-truncate';
import { Text } from './Description.styled';

function Description({text}) {
    return (
        <Text>
      <TextTruncate
        line={1}
        element="span"
        truncateText="…"
        text={text}
        // textTruncateChild={<a href="#">Read on</a>}
            />
        </Text>
    );
}

export default Description