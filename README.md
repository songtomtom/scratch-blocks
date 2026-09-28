# React 에서 Scratch3 블록 렌더링

스크래치(Scratch 3)의 블록 라이브러리인 [scratch-blocks](https://github.com/scratchfoundation/scratch-blocks) 만 분리해 React 앱 안에 렌더링하는 실험입니다. 두 패키지를 [Rush](https://rushjs.io) 모노레포로 묶었습니다.

블로그 글: [React 프로젝트에 Scratch3 블럭 랜더링 하기](https://songtomtom.github.io/blog/react-scratch3-blocks)

## 구조

```
packages/scratch-blocks   LLK/scratch-blocks 포크 (블록 렌더링 엔진, Blockly 기반)
packages/my-app           Create React App. scratch-blocks 를 workspace 의존성으로 사용
  src/Scratch3.jsx        ScratchBlocks.inject 로 워크스페이스를 주입하는 컴포넌트
  src/make-toolbox-xml.js scratch-gui 에서 가져온 툴박스 XML 생성 함수
  public/blocks-media/    블록 아이콘과 효과음 (scratch-blocks/media 복사)
common/config/rush        Rush 설정
```

## 실행

```bash
npm install -g @microsoft/rush
rush install
rush build            # scratch-blocks 빌드 (closure compiler)
cd packages/my-app
rushx start           # http://localhost:3000
```
