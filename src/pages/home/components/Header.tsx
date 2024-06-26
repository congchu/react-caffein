import styled from "styled-components";
import LogoIcon from "../../../assets/images/icons/ic-logo.png";
import ProfileIcon from "../../../assets/images/icons/ic-profile.svg";
import headerBackgroundImage from "../../../assets/images/bg-header.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Container(요새친구..들..) / Layout / Wrapper (대대손손)
export const Header = () => {
  return (
    <Layout backgroundImage={headerBackgroundImage}>
      <header className="wrapper">
        <Nav>
          <img className="icon-logo" src={LogoIcon} alt="logo" />
          <img className="icon-profile" src={ProfileIcon} alt="profile" />
        </Nav>
        {/* display: flex */}

        <SwiperWrapper>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            <SwiperSlide>
              <HeaderContent>
                {/* flex:1 */}
                <Title>{`개발은\n카페인과 함께1111`}</Title>
                {/* flex:1 */}
                <ImageWrapper>
                  <HeaderImage image="https://plus.unsplash.com/premium_photo-1681426788098-3aa38380605d?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </ImageWrapper>
              </HeaderContent>
            </SwiperSlide>

            <SwiperSlide>
              <HeaderContent>
                {/* flex:1 */}
                <Title>{`개발은\n카페인과 함께2222`}</Title>
                {/* flex:1 */}
                <ImageWrapper>
                  <HeaderImage image="https://plus.unsplash.com/premium_photo-1681426788098-3aa38380605d?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </ImageWrapper>
              </HeaderContent>
            </SwiperSlide>

            <SwiperSlide>
              <HeaderContent>
                {/* flex:1 */}
                <Title>{`개발은\n카페인과 함께3333`}</Title>
                {/* flex:1 */}
                <ImageWrapper>
                  <HeaderImage image="https://plus.unsplash.com/premium_photo-1681426788098-3aa38380605d?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </ImageWrapper>
              </HeaderContent>
            </SwiperSlide>
          </Swiper>
        </SwiperWrapper>
      </header>
    </Layout>
  );
};

const Layout = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  padding: 0px 20px;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  flex: 1;
  color: white;
  white-space: pre-line;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;
// 이미지일 때는 고유의 사이즈를 가지고 있다.
// background image는 사이즈를 지정해줘야한다.
const HeaderImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 100%;
  /* 마치 이미지 태그를 사용하는 것처럼 쓸수있다. */
  aspect-ratio: 3/2;
`;

const Nav = styled.nav`
  padding-top: 20px;
  padding-bottom: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .icon-logo {
  }
  .icon-profile {
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 60px;
`;

const SwiperWrapper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-button-prev {
    opacity: 0.5;
  }
`;
