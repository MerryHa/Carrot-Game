# merry.github.io

# Carrot Game - Personal

## 💻프로젝트 개요

---

### 🔰 실행 URL : https://merryha.github.io/Carrot-Game/

### 🔰 타이머 시간내에 당근만 모두 클릭하기

- 💻 개발 환경 : HTML, CSS, Vanilla JS, VScode, Github

- 📅 기간
  > - 1차 완성 : 2020.11.24 ~ 2020.12.06
  > - 기능 추가 : 2020.12.21 ~ 2020.12.31

* 💡 프로젝트 목표

  > - 클래스를 이용해 모듈화 해보기
  > - 리팩토링 방법 배우기
  > - Vanilla JS의 각종 함수 사용 경험 늘리기

* 📋 프로젝트 내 조건

  > - 게임시작(▶) 버튼 클릭시 타이머와 당근 개수 표시 및 작동
  > - 게임이 시작되면 게임화면의 땅에 해당하는 부분에 벌레와 당근을 랜덤배치
  > - 지정된 시간 내에 당근을 모두 클릭해야함
  >   <img src="readme/gif_carrot.gif" width="200px">
  > - 당근 클릭 시 남은 당근 개수를 타이머 밑에 표시
  > - 당근이나 벌레 클릭시 각 효과음 재생
  > - 필드 위의 아이템들을 hover하면 크기 변경
  > - 벌레를 클릭하거나 시간 내에 당근을 모두 모으지 못하면 실패 메시지 팝업하기
  > - 게임정지(⏹) 버튼 클릭시 타이머 작동 중단 및 배경음 재생 중단
  > - 팝업의 리플레이 버튼 클릭시 타이머 초기화 및 배경음 처음부터 다시 재생

* 📌개인적으로 추가한 기능들

  > 1.  타이머 옆 시계 이미지 추가
  >     > - 천천히 똑딱거리는(rotate) 애니메이션 추가
  >     >   <img src="readme/gif_timer.gif" width=150px>
  >     > - 제한시간이 끝나가면 빠르게 똑딱거리며 효과음 재생, 이미지도 소리가 울리는 이미지로 변환
  >     > - 타이머가 중단되면 시계의 움직임도 멈춤

  > 2.  라운드 2 추가
  >     > - 클릭하면 안되는 몬스터를 벌레 외에 토끼도 추가함
  > 3.  라운드 3 추가
  >
  >     > - 보스몬스터를 때려서 피를 닳게 한 후 처치하면 본래 모습의 몬스터가 당근을 놓아줌
  >     >   <img src="readme/gif_hitBoss.gif" height=150px>
  >     > - 당근은 애니메이션을 이용해 둥둥 떠다니게 함
  >     > - 당근 클릭시 기존의 사운드 외에 새로운 mp3 추가
  >
  > 4.  라운드가 확장됨에 따라 Replay 외에 Next 팝업 내용 추가

* 💣프로젝트 진행 중 어려웠던 점 : block scope에서 정의된 setInterval 함수를 바깥에서 clearInterval하는 것에 어려움이 있었습니다.

* 💥어려웠던 점에 대한 해결 방안
  > 먼저 global scope에서 undefined로 정의후 사용

```js
let timer = undefined;
{
  timer = setInterval(() => {}, 1000);
}
clearInterval(timer);
```

## 프로젝트 구현 이미지

<img src="readme/level1.png">
<img src="readme/level2.png">
<img src="readme/level3.png">
<img src="readme/replay.png">
<img src="readme/success.png">
<img src="readme/won.png">
