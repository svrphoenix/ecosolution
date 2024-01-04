import { buttonCaptions } from '../../assets/content/main.json';
import { SendButtonStyled, SendIconContainer, SendSvg } from './SendButton.styled';

const SendButton = () => {
  return (
    <SendButtonStyled
      caption={buttonCaptions.send}
      type="submit"
      iconContainer={SendIconContainer}
      iconSettings={{ name: 'arrow-right', svgStyled: SendSvg }}
    />
  );
};

export default SendButton;
