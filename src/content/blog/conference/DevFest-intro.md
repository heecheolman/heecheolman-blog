---
title: 'DevFest Seoul 2018 을 다녀오며'
date: 2018-11-11 16:00:00
category: 'conference'
description:  'DevFest Seoul 2018 을 다녀오며 느낀점 및 요약을 정리했습니다.'
author: 'HeeCheolKim'
---

![이미지](https://t1.daumcdn.net/cfile/tistory/99B5C24D5BE7E4DD3B)

![이미지](https://t1.daumcdn.net/cfile/tistory/99DD474D5BE7E4DF31)

## 과거의 나

처음에 인터넷을 하다가 DevFest 가 개최한다는것을 보았다.컨퍼런스에 참여하기 앞서 드는 생각은 대학생인 나로써 과연 저 세션들을 이해할 수 있을까? 라는 것이다.  

물론 대학생이라는것은 핑계인것 같고 내가 듣고 이해할 수 있는 능력이 되는가? 가 관건이었다. 2018년 1월에 처음 웹개발에 발을 들어서면서 친구의 권유로 [vuetiful korea4](https://heecheolman.github.io/#/what/posts/1) 를 가게되었는데 이때는 경험삼아 가본것이었고, 되게 신기했다. 나와는 다른세상 같았다.

## 지금의 나
**DevFest Seoul 2018** 은 약 10개월이 지난 후의 내가 갔다. 내가 알아들을 수 있을까? 라는 의문보다는 이젠 세션에 대해서 어느정도 알아들을 수 있을 것같다! 라는 생각이 좀 더 앞섰다.  
특히나 더 관심이 있었던 세션은 다음과 같았다.

* 한재엽님의 **Chrome Devtools 를 활용한 성능 측정과 개선**
* 진겸님의 **빠르다는 것 그 이상, Isomorphic PWA (feat. SSR + Code-splitting)**  

한재엽님의 세션이 관심있었던 이유는 최근 웹 프로젝트를 완료하고 드는 생각이 다음 프로젝트는 성능을 어떻게 올릴 수 있을까 에대해 고민하고있었고, 진겸님의 세션은 졸업작품을 할 때 PWA 를 이용할 예정이어서 관심이 갔다. 물론 다른 Web 세션들이 관심없었던것은 절대 아니다.


## 세션정리

### 한재엽님 세션

한재엽님의 세션은 그냥 좋았다. DevFest 가기전에 우연히 한재엽님의 github 을 갔는데 너무도 정돈된 Repo 들을 보고 놀랐다. 존경스러웠다. 특히나 그 안의 [Interview Repo](https://github.com/JaeYeopHan/Interview_Question_for_Beginner) 는 공부하기 좋은 자료들이 너무도 많았다. 세션은 전체적으로 for Beginner 수준이었고, 이해가 잘 되었다. 자세한 내용은 포스트를 확인!

### 김동우님 세션

김동우님 세션은 React 를 기준으로 하셨다. 이제 막 React 와 TypeScript 를 배우려고 다짐한 나로써는 중요한 지표가 된것같다. 상태관리 툴들을 알아보고 김동우님의 경험을 간접경험 함으로써 유익한 시간이었다! 자세한내용은 포스트를 확인!

### 진겸님 세션

진겸님 세션은 for Beginner 이긴 했지만.. 중간에 너무 어려웠다. 뭐 부족하다고 생각하고 열심히 공부하려고한다. 그래도 최적화를 엄청나게 하셔서 초기 웹페이지 로딩속도를 획기적으로 줄이셨다. 멋있었다.

### 이웅재님 세션

이웅재님 세션도 김동우님 세션처럼 TypeScript 를 막 접한 나로써는 너무 좋았다. 강의도 잘 진행하셔서 지루하지않고 재밌는 세션이 되었다. 세션이 끝나고 궁금한것이 생겨 쉬는시간에 가서 여쭤보았다. 정말s 별거 아닌 질문이지만 배우는 학생으로써 나에겐 중요한 질문이었다.

> Q. 타입스크립트를 이제 막 배우려고하는 대학생인데 말씀하신 세션의 내용처럼 tsconfig 의 strict type checking 옵션을 활성화한 상태를 기준으로 공부해야할까요?  
A. 네 그렇게 하셔야하고, 그렇게 하는게 좋습니다 ^^

친절히 답변해 주셨고, 앞으로의 방향을 한번더 잘 잡게된것같아 좋았다.

요약한 타입체크 버젼은 다음과 같았다.
- noImplicitAny
  - 명시적이지 않게 any 타입을 사용하여, 표현식과 선언에 사용하면, 에러를 발생
- noImplicitThis
  - 명시적이지 않게 any 타입을 사용하여, this 표현식에 사용하면, 에러를 발생
  - 함수의 맨 첫번째 인자로 this 를 받음
- strictNullChecks
  - strictNullChecks 모드에서는, null 및 undefined 값이 모든 유형의 도메인에 속하지 않으며, 그 자신을 타입으로 가지거나, any 일 경우에만 할당 가능
  - 한가지 예외는 void 타입의 경우 undefined 를 가짐
- strictFunctionTypes
  - 함수타입에 대한 bivariant 매개 변수를 비활성화합니다.
  - 반환타입은 공변적, 인자 타입은 반공변적으로 되어야하는데 타입스크립트에서 인자 타입은 공변적이면서, 반 공변적인게 문제!
- strictPropertyInitialization
  - 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인하빈다.
  - 할당 안하면 에러
  - constructor 에서 초기화
- alwaysStrict

나중에 천천히 찾아봐야겠다. 포스트는 별도로 하지않았다

### 방진호님 세션
방진호님 세션은 시작할때 몰랐는데 다 듣고나니 브라우저의 렌더링과정이 머릿속에서 그려지는 느낌이었다. 자세한내용은 포스트를 참고하면 된다.   
정말 유익했고 모르는 내용들도 중간중간 섞여서 정리하는데 힘들었지만... 전체적인 흐름만 보면 될것같다. 완벽하지 못한 포스트라 마음에 걸리긴하지만 그래도 기록하려한다.



## 마무리
정말 열심히 들었고 다음에도 이런 컨퍼런스는 또 참여하고싶다. 다음 컨퍼런스는 한층 더 성장해서 많이 알아들을 수 있지 않을까 싶다.  
올해 거의 막바지에 들어섰다. 1월부터 11월 지금까지 많은 시간이 흘렀는데 더 노력해서 지금보다 더 나은 나를 만들고싶다.


## 포스트 확인하기
* [Chrome Devtools를 활용한 성능 측정과 개선 - 한재엽님](https://heecheolman.heecheolman.now.sh/conference/DevFest01)
* [실전 SPA 상태관리 톺아보기 - 김동우님](https://heecheolman.heecheolman.now.sh/conference/DevFest02)
* [Chromium/Blink는 어떻게 동작하는가? - 방진호님](https://heecheolman.heecheolman.now.sh/conference/DevFest03)
