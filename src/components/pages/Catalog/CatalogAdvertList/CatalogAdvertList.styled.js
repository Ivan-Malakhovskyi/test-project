import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../../images/heart.svg';
import { ReactComponent as ActiveHeartIcon } from '../../../images/active_icon.svg';

export const NormalHeart = styled(HeartIcon)`
  &:hover {
    fill: #3470ff;
  }

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
`;

export const ActiveHeart = styled(ActiveHeartIcon)`
  cursor: pointer;
`;
