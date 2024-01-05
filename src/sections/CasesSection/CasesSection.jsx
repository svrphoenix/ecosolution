import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';

import { AdditionWrapper } from '../../components/common/styled/AdditionWrapper.styled';
import { SectionStyled } from '../../components/common/styled/Section.styled';
import {
  ActiveSlide,
  ArrowBtn,
  ArrowsWrapper,
  Caption,
  CaptionWrapper,
  CaseWrapper,
  CasesTitle,
  CasesWrapper,
  Description,
  DescriptionWrapper,
  GoToBtn,
  GoToSvg,
  Img,
  ImgWrapper,
  Pagination,
  PaginationSvg,
  PaginationWrapper,
  Slide,
  SlideList,
  TextWrapper,
} from './CasesSection.styled';
import { sections, cases } from '../../assets/content/main.json';

const CasesSection = forwardRef(function CasesSection(_, ref) {
  const [visibleSlides, setVisibleSlides] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setVisibleSlides([0, 1]);
      } else {
        setVisibleSlides([0]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeSlide = (direction = 1) => {
    if (direction === -1) {
      setVisibleSlides(prev => {
        const first = prev[0] === 0 ? cases.slides.length - 1 : prev[0] - 1;
        if (prev.length === 2) {
          const second = prev[1] === 0 ? cases.slides.length - 1 : prev[1] - 1;
          return [first, second];
        } else {
          return [first];
        }
      });
    }

    if (direction === 1) {
      setVisibleSlides(prev => {
        const first = prev[0] === cases.slides.length - 1 ? 0 : prev[0] + 1;
        if (prev.length === 2) {
          const second = prev[1] === cases.slides.length - 1 ? 0 : prev[1] + 1;
          return [first, second];
        } else {
          return [first];
        }
      });
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
      <CasesWrapper>
        <AdditionWrapper>
          <CasesTitle>{sections.cases.title}</CasesTitle>
        </AdditionWrapper>
        <AdditionWrapper>
          <PaginationWrapper>
            <Pagination>
              <ActiveSlide>{String(visibleSlides[0] + 1).padStart(2, '0')}</ActiveSlide>
              {` / ${String(cases.slides.length).padStart(2, '0')}`}
            </Pagination>
            <ArrowsWrapper>
              <ArrowBtn
                aria-label="arrow left button"
                onClick={() => changeSlide(-1)}
                iconSettings={{ name: 'arrow-left', svgStyled: PaginationSvg }}
              />
              <ArrowBtn
                aria-label="arrow right button"
                onClick={() => changeSlide(1)}
                iconSettings={{ name: 'arrow-right', svgStyled: PaginationSvg }}
              />
            </ArrowsWrapper>
          </PaginationWrapper>
        </AdditionWrapper>
      </CasesWrapper>
      <SlideList>
        {visibleSlides.map(idx => (
          <Slide key={idx} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <ImgWrapper>
              <Img src={cases.slides[idx].img} alt={cases.slides[idx].caption} />
            </ImgWrapper>
            <CaseWrapper>
              <CaptionWrapper>
                <Caption>{cases.slides[idx].caption}</Caption>
                <GoToBtn
                  aria-label="GoTo button"
                  iconSettings={{ name: 'arrow-right-up', svgStyled: GoToSvg }}
                />
              </CaptionWrapper>
              <DescriptionWrapper>
                <TextWrapper>
                  <Description>{cases.slides[idx].description}</Description>
                  <Description>{cases.slides[idx].date}</Description>
                </TextWrapper>
              </DescriptionWrapper>
            </CaseWrapper>
          </Slide>
        ))}
      </SlideList>
    </SectionStyled>
  );
});

CasesSection.propTypes = {
  sectionId: PropTypes.string,
};

export default CasesSection;
