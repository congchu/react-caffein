import styled from "styled-components";
import { Header } from "./components/Header";

export const Home = () => {
  return (
    <Layout>
      <Header />
      <main>
        <section>인기부트캠프</section>
        <section>특가 할인 캠프</section>
        {/* Hero */}
        <div>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</div>

        <section>커뮤니티</section>
      </main>
      <footer>caffein</footer>
      {/* public/  */}
      {/* <img src="/logo192.png" alt="logo" /> */}
      {/* src/.../ */}
    </Layout>
  );
};

const Layout = styled.div`
  .wrapper {
    max-width: 960px;
    margin: 0 auto;
  }
`;

// "우리사이트도메인/logo192.png"
// "우리사이트도메인/logo192.png"
