---
title: 'REST API 알아보기'
date: 2018-07-17 20:00:55
category: 'other'
description:  'API 설계기법인 REST API 에 대해 알아봅니다.'
author: 'HeeCheolKim'
---

이 글에서는 REST API 가 무엇인지 알아보겠습니다.

## API 란?
API 는 Application Programming Interface 의 약자입니다.  

> **Interface 란?**  
  Interface 의 용어도 많이 접해볼 수 있는데 &nbsp;&nbsp;<span style="font-size:12px">(예를들면 GUI, CLI)</span>  
간단히, 어떤 두개의 시스템 사이에 상호 작용할 수 있도록 접목시켜주는 하드웨어, 소프트웨어, 조건, 규약 등을 인터페이스라고 합니다.

컴퓨터와 상호작용을 하기위한 키보드, 마우스 등등의 장치는 사람을 위한 인터페이스입니다.  
반대로 API 는 프로그램을 위한 인터페이스입니다.  
하나의 프로그램에서 다른 프로그램의 기능을 쓰기위해 어떠한 인터페이스를 통해 이용하는것처럼 프로그램간의 커뮤니케이션을 담당합니다.

결론적으로 API 는 응용 프로그램에서 사용할 수 있도록, 기능을 제어할 수 있게 만든 인터페이스를 뜻하는것입니다.


## REST API 역사
Representation State Transfer 의 약자로서 2000년도에 로이 필딩 (Roy Fielding)의 박사학위 논문에서 최초로 공개되었습니다.  
로이 필딩은 HTTP의 주요 저자 중 한명으로 웹 설계의 우수성에 비해 제대로 사용이 되어지지 않아 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로 REST를 발표했습니다.

## REST 구성
REST API 는 다음과 같은 구성으로 이루어져있습니다.
* 자원 (Resource) - URI
* 행위 (Verb) - HTTP Method
* 표현 (Representation)

> REST 는 간단히 요약하자면   
URI 와 HTTP Method 를 통해 객체화된 웹 서비스에 접근하는 것 정도가 되겠다.

## REST 특징
REST 는 다음과같은 6가지의 특징을 갖습니다.

###  Uniform Interface (유니폼 인터페이스)
유니폼 인터페이스는 URI로 지정한 리소스에 대해 조작을 통일되고 한정적인 인터페이스로 수하는 아키텍쳐 스타일을 말합니다.

### Stateless (무상태성)
REST 는 무상태성을 갖는데 다시말해 어떠한 작업을 위한 상태정보를 보관하고 있지 않다는 것입니다.  
API 서버는 단순히 들어오는 요청을 처리하기만 하면 됩니다. 때문에 서비스의 자유도도 높아지고 서버에서 불필요한 정보를 관리하지않으므로 구현이 단순해 집니다.
### Cacheable (캐시 가능)
REST 의 가장 큰 특징중 하나인데 HTTP는 웹표준을 그대로 사용하기 때문에 기존의 기능들을 활용할 수 있습니다. 때문에 캐싱기능을 적용할 수 있습니다.

### Self-descriptiveness (자체 표현 구조)
REST의 다른 큰 특징 중 하나로 REST API 의 메세지만 보고도 쉽게 이해가 가능한 자체 표현 구조로 되어있다는 것입니다.
### Client - Server 구조
Client 는 사용자 인증이나 컨텍스트(세션, 로그인정보 등)등을 직접관리 하는 구조,  
REST Server는 API 제공으로 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 의존성이 줄어들게 된다.

### 계층형 구조
REST 서버는 다중 계층으로 구성될 수 있어 보안, 로드밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트워크 기반의 중간 매체를 사용할 수 있게 합니다.

> **로드밸런싱 (Load Balancing)이란?**  
하나의 인터넷 서비스가 발생하는 트래픽이 많을 때 가상 IP를 통해 여러 서버에 접속하도록 분배하는 기능  
해당 기능을 수행하는 소프트웨어 또는 장비를 **로드밸런서** 라고 한다.

> **프록시 (Proxy) 란?**  
프록시(Proxy)는 '대신' 이라는 의미를 지니고 있는데 프로토콜에 있어서  대리 응답 등에서 사용하는 개념.  
예를들어 보안상의 문제로 직접 통신할 수 없는 사이에 프록시를 이용해 중계를 하는 개념을 들 수 있다.

> **게이트웨이 (Gateway) 란?**  
게이트웨이는 출입구, 관문 이란 뜻으로 현재 사용자가 위치한 네트워크에서 다른 네트워크로 이동하기위해 반드시 거쳐야하는 거점입니다.  
프로토콜이 다른 네트워크 상의 컴퓨터와 통신하려면 두 프로토콜을 적절히 이어주는 변환기가 필요한데 이것을 게이트웨이가 합니다.

## REST API 디자인 가이드
다른것은 다 잊더라도 다음의 두가지만 기억하면 됩니다.

1. URI 는 정보의 자원을 표현해야 한다.
2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE) 로 표현한다.

### REST API 중심규칙
* #### URI는 정보의 자원을 표현해야 한다. (리소스명은 동사보단 명사를 사용)
```
잘 적용되지 않은 사례 :
GET /members/delete/1
```
`delete` 는 행위인데 리소스에 포함되어 있기에 잘 적용된 사례가 아닙니다.
```
잘 적용된 사례 :
GET /members/1
```

* #### 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현
위의 잘 적용되지 않은 사례를 바로 고친다면 다음과 같습니다.
```
DELETE /members/1
```

### URI 설계시 주의할 점
* ##### 슬래시 구분자 ( / )는 계층관계를 나타내는데 사용
```
http://kimheecehol/phones/iphone
http://kimheecheol/laptop/macbook
```

* ##### URI 의 마지막 문자로 슬래시( / )를 포함하지 않는다.
URI 에 포함되는 모든 글자는 리소스의 유일한 식별자이기 때문에 혼동을 주지않기 위해 마지막에 포함시키지 않습니다.
```
http://kimheecheol/phones/iphone/ (X)
http://kimheecheol/phones/iphone  (O)
```

* ##### 하이픈( - ) 은 가독성을 높이는데 사용
긴 URI 경우에는 하이픈( - )을 이용해 가독성을 높일 수 있습니다.

* ##### 밑줄( _ ) 은 사용하지 않는다
밑줄때문에 글자가 가려질수 있으므로 하이픈을 사용한다.

* ##### URI 경로는 소문자로
대소문자에 따라 리소스를 다르게 인식하기 때문에 URI 경로에는 소문자가 적합하다.

* ##### 파일 확장자는 URI에 포함시키지 않는다
REST API 를 설계할 때 확장자는 사용하지 않게 되면 리소스가 좀 더 유연해집니다.  
`hello` 라는 파일이 있을 때 요청을 하면 `http://~~/hello.txt` 와 같이 요청을 하게 되는데  
만약 다른 형식으로 지원하려면 확장자가 `.??` 이런식이 될겁니다. 이러면 `http://~~/hello.??` 라는 URI 도 준비를 해야합니다.  
다른 리소스를 식별하는 두개의 URI 이지만 실제로는 하나의 리소스를 가리키고 있습니다.  
이것은 비효율적이기 때문에 REST API 에서는 `http://~~/hello` 라고 대응만 해 놓고 요청이 왔을 때, Accept header 를 적절히 파싱하여 클라이언트가 요청한대로 응답해주면 됩니다.

### 리소스간 관계 표현하기
리소스간에 관계가 있을 수 있습니다. 이럴 경우 다음과 같이 표현합니다.  
```
/리소스명/리소스 ID/관계가 있는 다른 리소스명

ex) GET : /users/{userid}/devices (일반적으로 소유 'has' 관계를 표현할 때)
```
관계명이 복잡한 경우에는 서브 리소스에 명시적으로 표현하는 방법이 있습니다. '좋아하는' 디바이스목록을 표현해야하는 경우입니다.
```
GET : /users/{userid}/likes/devices (관계명이 애매하거나 구체적 표현이 필요할 때)
```

### 자원을 표현하는 Collection 과 Document
**Document** 는 단순히 문서로 이해해도 되고, 하나의 객체로 이해해도 되고  
 **Collection** 은 Document 들의 집합, 객체들의 집합으로 보시면 됩니다.

 Collection 과 Document 모두 리소스라고 표현할 수 있으며 URI 표현됩니다.

>`Document` 는 어떤 문서에서는 `Element` 라고 소개하는 경우도 있습니다.

```
http://kimheecheol/sports/soccer
```
위의 URI 에서는 sports 는 Collection, soccer 는 Document로 볼 수 있습니다.

```
http://kimheecheol/sports/soccer/players/8
```
위의 URI 에서 Collection은 sports 와 players 가 되겠고,  
Document 는 soccer 와 8 이 되겠습니다.

여기서 특징은 **Collection 은 복수 형태로 표현한다** 는 점입니다.

## HTTP Method의 알맞은 역할
POST, GET, PUT, DELETE 의 4가지 Method 를 가지고 CRUD 를 할 수 있습니다.

> **CRUD 란?**  
대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리기능인  
Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말이다.

* #### POST
POST 를 통해 해당 URI 를 요청하면 리소스를 생성합니다.

* #### GET
GET 를 통해 해당 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼에 대한 자세한 정보를 가져온다.  
  > Collection 리소스를 조회하게 되면, 하위의 도큐먼트들의 목록과 아주 간단한 정보들을 가져옵니다.    
  Docuemnt 리소스를 조회하게 되면, 해당 도큐먼트에 대한 자세한 정보들을 가져옵니다.

* #### PUT
PUT 를 통해 해당 리소스를 수정합니다.

* #### DELETE
DELETE 를 통해 해당 리소스를 삭제합니다.

## HTTP 응답 상태 코드

상태 코드의 첫번째 숫자에 의해 크게 5가지로 구분됩니다.

#### 1xx : Informantion (정보)
요청 (request) 을 받고 대기중에 있는 상태
#### 2xx : Success (성공)
요청 (request) 이 성공적으로 처리 됨
#### 3xx : Redirection (리디렉션)
요청 (request) 완료를 위해 추가적인 동작이 필요함
#### 4xx : Client Error (클라이언트 오류)
클라이언트 오류를 처리할 수 없어 오류 발생
#### 5xx : Server Error (서버 오류)
서버에서 처리를 못하여 오류 발생


### 성공
* **200**  
클라이언트의 요청을 정상적으로 수행했음. 여기서 요청에대한 응답 바디(Body)엔 요과 관련된 내용을 넣어줍니다.  
200의 응답바디에 오류 내용을 전송해서는 안된다고 합니다.

* **201**  
클라이언트가 어떤 리소스 요청하였고, 해당 리소스가 성공적으로 생성 되었을 때 사용.

* **202**  
클라이언트의 요청이 비동기적으로 처리될 때 사용, 응답바디에는 처리되기까지의 시간정보등을 넣어주는 것이 좋다고 합니다.

* **204**  
클라이언트 요청을 정상적으로 수행했음. 200 과 다른 점이라고하면 204는 응답바디가 없을 때 사용합니다.  
예를들어 DELETE 와 같은 요청은 삭제가 성공하고 부가적으로 알려줄만한 정보가 없을 때 204를 씁니다.

### 실패
* **400**  
클라이언트가 서버에게 잘못된 HTTP 요청을 보냈을 때 사용.  
예를들어 클라이언트가 URL주소의 중간에 빈공간을 넣는 등 부적절한 방법으로 서버에게 요청한 경우가 해당됨.

* **401**  
클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청했을 때 사용하는 요청. 예를들어, Login 하지 않은 사용자가 로그인했을 때만 요청 가능한 리소스를 요청했을 때 401을 응답합니다.

* **403**  
클라이언트의 요청에 대해 접근을 차단하는것을 말합니다.  
403 은 리소스는 존재하지만 보여주고싶지않은 페이지입니다. 예를들면 관리자 페이지가 있습니다.  
보통 403은 보안상의 이유로 404 나 400으로 응답하는경우가 많습니다.

* **404**  
클라이언트가 서버에게 요청한 리소스가 존재하지 않을 때 사용하는 응답입니다.

* **405**  
클라이언트가 요청한 리소스에서 사용 불가능한 Method 를 사용했을 때 사용하는 응답입니다.  
예를들어 읽기전용 리소스에 DELETE Method 를 사용했다면 405로 응답합니다.

### 기타
* **301**  
클라이언트가 요청한 리소스에 대한 URI 가 변경되었을 때 사용하는데 301 코드와 함께 새로운 주소로 이동합니다.


* **500**  
클라이언트 요청에 서버가 응답하지 못하는 내부 서버에러입니다.  
서버상의 에러이기 때문에 서버관리자가 반드시 살펴봐야합니다.

## 마무리지으며
* 이번기회에 REST API 에 대해 어느정도 알게 된 것 같다.
* 항상 그렇듯 몸으로 느껴봐야 비로소 내것이되는 듯하다.
* [김동범님의 REST API 제대로 알고 사용하기](http://meetup.toast.com/posts/92) 를 보고 많은 도움이 되었습니다. 감사드립니다.  
(그냥 따라서 정리한 느낌.. 너무 정리가 잘 되어있어서 좋았다.)


## 참고문서
* [REST API 제대로 알고 사용하기 - 김동범](http://meetup.toast.com/posts/92)

* [RESTFul 이란 무엇인가? - 김한기](http://blog.remotty.com/blog/2014/01/28/lets-study-rest/#extension)

* [HTTP 응답 상태 코드 간략 정리 - yebeen](http://happily70.dothome.co.kr/?p=292)

* [HTTP 상태(응답) 코드 - ZeroCho](https://www.zerocho.com/category/NodeJS/post/579b4ead062e76a002648af7)
