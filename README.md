뉴욕타임즈 API 를 사용해 최신 뉴스 기사를 보여주고, 클립하여 저장할 수 있는 앱 입니다.

구동방식은 [navigation]-> BottomTabNavigator를 통해 HomeScreen, ClipedScreen 으로 각각의 탭을 이용해 화면 전환이 가능합니다.

HomeScreen 에서는 최신뉴스들을 검색해서 타이틀과 날짜를 보여주고
ClipedScreen 에서는 클립한 뉴스들의 타이틀과 날짜를 보여줍니다.

HomeScreen에서 타이틀을 누르면 해당 기사가 있는 웹 사이트로 이동하고, 우측에 별 모양을 누르면 Clip/Unclip이 가능합니다.
ClipedScreen에서도 동일하게 타이틀을 누르면 해당 기사가 있는 웹 사이트로 이동합니다.

뉴스들의 각 Item 들 안에는 headline, pub_date, web_url, icon 속성을 가지고 있으며, Key 에 해당하는 것은 web_url입니다. (id로 관리하고 싶었지만 시간상 web_url도 고유한 key이기 떄문에 사용하였습니다.)
icon은 clip or unclip 의 상태를 표시합니다.

HomeScreen에서 Clip 버튼을 누르면 AsyncStorage 를 통해 Local db에 저장됩니다.
ClipedScreen에서는 AsyncStorage를 통해 Clip 된 기사를 보여줍니다.

현재 앱의 문제는 ClipedScreen이 실시간 동기화가 안된다는 점입니다.
원래 계획했던 것은 탭을 이동할 때 마다 이벤트 리스너를 통해 ClipedScreen을 re-render 하려고 했지만 마땅한 이벤트 리스너가 없었습니다. 그래서 지금은 클립 한 후 앱을 껐다 켜야만 ClipedScreen에 정상적으로 데이터가 표현됩니다.

이를 해결하기 위해 Component 밖에서 데이터를 전달해 구독 방식으로 Clip 기사가 생길 때 마다 re-render 하려고 했지만, Redux 구현에 어려움을 겪어 구현 도중에 시간상 여기서 마칩니다..

앱 개발 시간은 이틀 소요 됐으며, RN에 대해 전혀 모르는 상태에서 진행하였습니다. 헤커톤 하듯이 개발하느라 변수명이라던지 컴포넌트화라던지 부족한 부분이 매우 많습니다. 프로젝트 제출 후 Redux를 제대로 구현해 완성할 것입니다.

불가피하게 갑작스런 사정으로 늦게 시작해서 정말 아쉽지만 그래도 React에 대해 관심이 있었는데, 이번 기회에 경험해 보게 되어 정말 즐거웠습니다.

부족하지만 코드 리뷰 부탁드리겠습니다.

감사합니다.
