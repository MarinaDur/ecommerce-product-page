import { styled } from "styled-components";
import Image from "./Image";

const StyledAvatarCon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  &:hover {
    border: 2px solid hsl(var(--color-pr-orange));
  }

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;
const StyledAvatar = styled(Image)`
  width: 100%;
`;

function Avatar() {
  return (
    <StyledAvatarCon>
      <StyledAvatar src="image-avatar.png/" alt="avatar" />;
    </StyledAvatarCon>
  );
}

export default Avatar;
