import { Avatar, Stack } from '@mui/material';
import { ChangePart } from 'components/Features/Features.styled'
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { AvatarHeader, TextReview } from './Reviews.styled';

function Reviews({ data }) {
  return (
    <ChangePart>
      {data?.map(({ reviewer_name, reviewer_rating, comment }) => {
        return (<div key={reviewer_name + 4}>
          <AvatarHeader >
            <Stack direction="row" spacing={2}>
              <Avatar>{reviewer_name}</Avatar>
            </Stack>
            <div>
            <p>{reviewer_name}</p>
              <Rating initialValue={reviewer_rating} size={16} />
            </div>
           </AvatarHeader>
            <TextReview>{comment}</TextReview>
         </div>
        );
      })}
    </ChangePart>
  );
}

export default Reviews