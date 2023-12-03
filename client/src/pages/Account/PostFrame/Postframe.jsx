import React from 'react';
import { PostColumn} from './PostColumn.styled';
import PostBrowsing from '../../../components/PostCards/PostBrowsing';
import NoPostDialogue from '../NoPosts/NoPostDialogue';
import EmptyImage from '../../../../src/assets/code_1.png'

function Postframe({ postList }){
  return (
    <PostColumn>
        {postList.length > 0 ? (
        postList.map((it) => (
          <PostBrowsing user={it} />
        ))
      ) : (
        <NoPostDialogue src ={EmptyImage} />
      )}
    </PostColumn>
  );
};

export default Postframe;