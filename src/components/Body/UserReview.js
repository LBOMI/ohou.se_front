import styled from "styled-components";


function UserReview() {
    return (
        <Container>
            <Header>
              <HeaderOne>
                  <strong>유저들의 인테리어 시공 리뷰</strong>
              </HeaderOne>
              <HeaderTwo>
                <button type='button'>더보기</button>
              </HeaderTwo>
            </Header>
            <Contents>
                <Content>
                  <Img>
                    <img src='UserReview\유저리뷰_1.avif'/>
                  </Img>
                  <Text>
                    <TextHeader>디자인코드인테리어</TextHeader>
                    <Comment>제가 여러 업체 실측&상담을 한 끝에 디자인 코드를 선택했습니다
  모든면에서 다 좋았지만!
  정해진 예산에 최대한으로 맞춰 도와주셨구
  무엇보다 소통이 정말 잘됐습니다
  전체공사라 의논할게 정말 많았는데 밤낮 가리지않고
  소통을 잘 해주셔서 정말 만족스러운 결과물이 나왔습니다
  제 지인들께도 무조건 추천 할꼬에욧</Comment>
                  </Text>
                </Content>
                <Content>
                  <Img>
                    <img src='UserReview\유저리뷰_2.avif'/>
                  </Img>
                  <Text>
                    <TextHeader>요즘인테리어</TextHeader>
                    <Comment>저희는 구축 아파트를 계약해서 무조건 올수리 인테리어를 생각했던 예비 신혼 부부입니다 여러 업체를 상담했지만 인테리어는 처음이라 판단이 잘 안섰는데 현실적으로 실현 가능한 인테리어를 고민해주시고 소통도 가장 잘된다고 느꼈던 권지헌 대표님과 최종 계약을 진행했습니다 결과적으로는 기대하던 것 보다도 훨씬 인테리어가 잘 나와서 너무나도 만족스럽습니다☺️ 우선 권지헌 대표님과  진행하면서 가장 만족스러웠던 점은 소통이었습니다 저희가 업체 선정을 일찍해서 첫미팅부터 공사 완성까지 약 5-6개월 정도가 걸렸는데 그 기간동안 단 한번도 연락 문제없이 바로바로 피드백을 주시고 더 나은 의견이 있으면 반영해서 수정해주셔서 더 좋은 인테리어가 나올 수 있었던 것 같습니다 그리고 대표님께서 젊은 감각을 가지고 해주셔서 그런지 타업체 분들 보다도 제가 원하는 그림을 대충 설명드려도 너무도 정확하고 빠르게 파악해주시고 제 취향에 맞게 인테리어적으로 제안도 많이 해주셔서 어려웠던 인테리어를 끝까지 잘 마무리할 수 있었습니다 정말 공사들어가는 그날 그날 바꾼 부분들 마저도 완벽했어요!! 공사뿐만 아니라 공사를 끝내고도 인테리어 업체의 역할이 중요하다고 생각하는데 그 부분에서도 너무 완벽하셨습니다🥲 문제가 있는 부분들은 그때 그때 다 처리해주시고 입주청소업체와도 문제가 있어서 혼란스러운 상황도 있었는데 그 부분들도 다 잘 처리할 수 있도록 도와주셨어요 대표님뿐만 아니라 공사해주시는 공사 팀 분들의 실력도 물론 출중하셔서 진짜 솔직히 거의 문제가 될 부분도 없었어요..아직은 가구가 덜 들어와서 조금 부족해보일 수 있지만 인테리어 자체를 너무 완벽하게 해주셔서 앞으로 채울 모습들이 더 기대가 됩니다 집 준비하면서 다른 신경쓸 것도 많아서 업체랑의 문제가 많으면 더 힘들었을텐데 대표님과 진행한 덕분에 잘 마무리할 수 있었구요 앞으로 주변에 인테리어 고민하시면 무조건 추천드릴 예정이에요 저희의 첫 집을 맡길 수 있어서 정말 감사했습니다~!</Comment>
                  </Text>
                </Content>
                <Content>
                  <Img>
                    <img src='UserReview\유저리뷰_3.avif'/>
                  </Img>
                  <Text>
                    <TextHeader>ABLY_design</TextHeader>
                    <Comment>구○빈 팀장님께서 소통도 원할히 잘 해주시고 젊은 감각으로  이런저런 부자재들을 트렌디한 것으로 잘 추천해주셨습니다. 첫 미팅때부터 3D 도면 준비해서 설명해주시니 이해도 잘 되고 저희 예산에 최대한 맞춰주시려고 애쓰셨습니다. 공사 후에도 A/S 요청 편히 받아주시고 최대한 불편함 없도록 신경써 주셨습니다. </Comment>
                  </Text>
                  </Content>
            </Contents>
          </Container>
    )
}

const Container = styled.div`
  // width: 100%;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  max-width: 1256px;
  padding: 50px 60px 10px 60px;
  margin: auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  font-size: 0px;
  line-height: 1;
`

const HeaderOne = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  // min-width: 0px;
  cursor: pointer;

  strong {
    overflow: hidden;
    display: inline-block;
    font-weight: 700;
    color: rgb(47, 52, 56);
    letter-spacing: -0.3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
    line-height: 28px;

    &:hover {
      color: rgb(136, 141, 144);
    }
  }
`

const HeaderTwo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 0px;
  margin-left: 10px;

  button {
    display: inline-block;
    margin: 0px;
  padding: 0px;
  border: none;
  background: none;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(53, 197, 240);
  cursor: pointer;
  
  &:hover {
    color: rgb(165, 210, 224);
  }
  }
`

const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0;
`

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 0px;
  flex-flow: column;
`

const Img = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  margin: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0px;
    left: 0px;
    transition: transform 0.3s ease; /* 확대 효과 */
    cursor: pointer; /* 포인터 변경 */

    &:hover {
      transform: scale(1.05);
    }
  }
`
const Text = styled.div`
  margin-top: 10px;
  min-width: 0px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(47, 52, 56);
  word-break: keep-all;
  overflow-wrap: break-word;
  cursor: pointer;
`

const TextHeader = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin: 0;
`

const Comment = styled.div`
  overflow: hidden;
  margin-top: 2px;
  font-size: 16px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
export default UserReview;