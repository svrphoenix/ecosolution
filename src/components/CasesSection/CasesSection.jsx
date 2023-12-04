import PropTypes from 'prop-types';

import { forwardRef, useState } from 'react';
import { colors } from '../../constants/theme';
import {
  ActiveSlide,
  ArrowBtn,
  ArrowsWrapper,
  Caption,
  CaptionWrapper,
  CaseWrapper,
  CasesSectionStyled,
  CasesTitle,
  CasesUnderline,
  Description,
  GoToBtn,
  Img,
  Pagination,
  PaginationWrapper,
  Slide,
  SlideList,
  TextWrapper,
  VerticalLine,
  Wrapper,
} from './CasesSection.styled';
import { SLIDES } from '../../constants/content';
import Icon from '../common/Icon/Icon';

const CasesSection = forwardRef(function ContactsSection(props, ref) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (currentSlide + direction < 0) {
      slideNumber = SLIDES.length - 1;
    } else {
      slideNumber = (currentSlide + direction) % SLIDES.length;
    }

    setCurrentSlide(slideNumber);

    if (slideNumber === SLIDES.length - 1) {
      setNextSlide(0);
    } else {
      setNextSlide(slideNumber + 1);
    }
  };

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <CasesSectionStyled id={props.id} ref={ref}>
      <Wrapper>
        <CasesTitle>Successful cases of our company</CasesTitle>
        <VerticalLine />
        <PaginationWrapper>
          <Pagination>
            <ActiveSlide>{String(currentSlide + 1).padStart(2, '0')}</ActiveSlide>
            {` / ${String(SLIDES.length).padStart(2, '0')}`}
          </Pagination>
          <ArrowsWrapper>
            <ArrowBtn onClick={() => changeSlide(-1)}>
              <Icon name={'arrow-left'} width={36} height={36} stroke={colors.accentBackground} />
            </ArrowBtn>
            <ArrowBtn onClick={() => changeSlide(1)}>
              <Icon name={'arrow-right'} width={36} height={36} stroke={colors.accentBackground} />
            </ArrowBtn>
          </ArrowsWrapper>
        </PaginationWrapper>
      </Wrapper>

      <SlideList>
        {SLIDES.map(({ id, img, caption, description, date }) => (
          <Slide
            key={id}
            $active={id === currentSlide}
            $next={id === currentSlide || id === nextSlide}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <Img src={img} alt={caption} />
            <CaseWrapper>
              <CaptionWrapper>
                <Caption>{caption}</Caption>
                <GoToBtn>
                  <Icon
                    name={'arrow-right-up'}
                    width={28}
                    height={28}
                    stroke={colors.accentBackground}
                  />
                </GoToBtn>
              </CaptionWrapper>
              <div>
                <CasesUnderline />
                <TextWrapper>
                  <Description>{description}</Description>
                  <Description>{date}</Description>
                </TextWrapper>
              </div>
            </CaseWrapper>
          </Slide>
        ))}
      </SlideList>
    </CasesSectionStyled>
  );
});

CasesSection.propTypes = {
  id: PropTypes.string,
};

export default CasesSection;
