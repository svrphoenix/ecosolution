import PropTypes from 'prop-types';

import { forwardRef, useState } from 'react';
import {
  ActiveSlide,
  ArrowBtn,
  ArrowsWrapper,
  Caption,
  CaptionWrapper,
  CaseWrapper,
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
import { sections, cases } from '../../assets/content/main.json';
import { SectionStyled } from '../../components/common/styled/Section.styled';
// import Icon from '../../components/common/IconOld/IconOld';

const CasesSection = forwardRef(function CasesSection(_, ref) {
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
    <SectionStyled id={sections.cases.id} ref={ref}>
      <Wrapper>
        <CasesTitle>{sections.cases.title}</CasesTitle>
        <VerticalLine />
        <PaginationWrapper>
          <Pagination>
            <ActiveSlide>{String(currentSlide + 1).padStart(2, '0')}</ActiveSlide>
            {` / ${String(SLIDES.length).padStart(2, '0')}`}
          </Pagination>
          <ArrowsWrapper>
            <ArrowBtn onClick={() => changeSlide(-1)}>
              {/* <Icon name={'arrow-left'} width={36} height={36} stroke={colors.mainColor} /> */}
            </ArrowBtn>
            <ArrowBtn onClick={() => changeSlide(1)}>
              {/* <Icon name={'arrow-right'} width={36} height={36} stroke={colors.mainColor} /> */}
            </ArrowBtn>
          </ArrowsWrapper>
        </PaginationWrapper>
      </Wrapper>

      {/* <SlideList>
        {cases.slides.map(({ id, img, caption, description, date }) => (
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
                  <Icon name={'arrow-right-up'} width={28} height={28} stroke={colors.mainColor} />
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
      </SlideList> */}
    </SectionStyled>
  );
});

CasesSection.propTypes = {
  sectionId: PropTypes.string,
};

export default CasesSection;
