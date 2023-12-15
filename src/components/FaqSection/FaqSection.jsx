import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import icons from '../../assets/icons/sprite.svg';
import {
  FaqSectionStyled,
  MoreQuestion,
  Questions,
  Question,
  Answer,
  Wrapper,
  AdditionWrapper,
  PositionWrapper,
  IconWrapper,
  QuestionBtn,
  QuestionItem,
  StyledSvg,
} from './FaqSection.styled';

import { FAQS } from '../../constants/content';
import { SectionTitle } from '../common/SectionTitle/SectionTitle.styled';
import { colors } from '../../constants/theme';
import Button from '../common/Button/Button';
import { ScrollToElement } from '../../utils';
import { useRefsContext } from '../../hooks/refsContext';
import Svg from '../common/Svg.jsx/Svg';
import Icon from '../common/Icon/Icon';

const FaqSection = forwardRef(function FaqSection(props, ref) {
  const { contactUs } = useRefsContext();
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleSelected = id => {
    setSelectedQuestion(state => (state === id ? undefined : id));
  };

  return (
    <FaqSectionStyled id={props.id} ref={ref}>
      <Wrapper>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <AdditionWrapper>
          <Questions>
            {FAQS.map(({ id, question, answer }) => (
              <QuestionItem key={id}>
                <QuestionBtn
                  type="button"
                  id={`${id}-question`}
                  aria-expanded={selectedQuestion === id ? true : false}
                  aria-controls={`${id}-answer`}
                  onClick={() => handleSelected(id)}
                >
                  <IconWrapper aria-hidden="true">
                    <Svg
                      icon={StyledSvg}
                      sprite={icons}
                      name={selectedQuestion === id ? 'minus' : 'plus'}
                      stroke={
                        selectedQuestion === id ? colors.accentBackground : colors.accentColor
                      }
                    />
                    {/* {selectedQuestion === id ? (
                      <Icon
                        name={'minus'}
                        width={16}
                        height={16}
                        stroke={colors.accentBackground}
                      />
                    ) : (
                      <Icon name={'plus'} width={16} height={16} stroke={colors.accentColor} />
                    )} */}
                  </IconWrapper>
                  <Question>{question}</Question>
                </QuestionBtn>
                {selectedQuestion === id && (
                  <Answer
                    id={`${selectedQuestion}-answer`}
                    aria-labelledby={`${selectedQuestion}-question`}
                  >
                    {answer}
                  </Answer>
                )}
              </QuestionItem>
            ))}
          </Questions>
        </AdditionWrapper>
        <PositionWrapper>
          <MoreQuestion>Didn&apos;t find the answer to your question? </MoreQuestion>
          <Button
            handleClick={() => ScrollToElement('ref', contactUs)}
            caption="Contact Us"
            icon={
              <Icon name={'arrow-down'} width={14} height={14} fill={colors.accentBackground} />
            }
          />
        </PositionWrapper>
      </Wrapper>
    </FaqSectionStyled>
  );
});

FaqSection.propTypes = {
  id: PropTypes.string,
};

export default FaqSection;
