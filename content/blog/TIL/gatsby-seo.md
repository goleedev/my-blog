---
title: 'Gatsby 블로그에 SEO 적용하기 🔍'
date: 2020-08-19 22:08:48
category: TIL
thumbnail: './images/til.png'
draft: false
---

![](./images/til.png)

<br />

### 🤦 TL; DR

#### *> References를 먼저 확인하자*

- sitemap.xml

- robots.txt

- 체크 포인트 1: URL 확인

- Google Search Console - URL 등록/색인 생성 요청

- react-helmet

  <br />

---

<br />

# Gatsby 블로그 검색엔진 최적화하기 🔍

<br />

### SEO 란?

​	검색 엔진 최적화(영어: **search engine optimization**, **SEO**)는 웹 페이지 검색엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과의 상위에 나올 수 있도록 하는 작업을 말한다. ([* 검색엔진 최적화]([https://ko.wikipedia.org/wiki/%EA%B2%80%EC%83%89_%EC%97%94%EC%A7%84_%EC%B5%9C%EC%A0%81%ED%99%94](https://ko.wikipedia.org/wiki/검색_엔진_최적화)))

<br /> 

### Reference 가이드 1번 따라하기

<br />

#### 👉 sitemap.xml 

#### 👉 robots.txt

여기까지 잘 따라왔다면 사이트가 크롤링 되기 위한 밑작업을 잘 마친 것인데, robots.txt가 build 과정에서 반복해서 fail 하였다. 에러는 말도 않되게 쉬운 것이었고 netlify로 배포한 사람은 아래 fix 과정을 참고하길 바란다.

<br />

### Error Fix

<br />

#### 👉 URL 확인

Netlify가 제공하는 기본 URL을 사용하는 사람이라면, ***블로그명*.netlify.com** 와 ***블로그명*.netlify.app**라는 두개의 도메인을 부여받는다. 

별 생각 없이 gatsby-config.js에는 .com을 robots.txt의 options에는 .app을 쓴다면 에러가 나는 것이 당연지사...

만약 netlify를 이용해 배포했다면 site URL을 붙여 넣을 때 다시 한번 확인해보자.

(어이없는 실수라도 이렇게 따로 적어 놓았으니, 추후에 생각없는 복붙은 하지 않을 것이라 기대한다)

<br />

### Reference 가이드 2번 따라하기

#### 👉 Google Search Console에 배포한 URL 등록하기

#### 👉 Google Search Console에 등록한 URL 색인 생성 요청하기

<br />

![](./images/search-console.png)

<br />

#### 👉 react-helmet을 이용해 meta tag 추가하기

<br />

### 글을 마치며

<br />

오늘은 가이드를 따라한 것을 정리해보았다. 이렇게 향후 반복이 예상되는 작업이라면 가이드를 조각 조각 모아서 정리하는 것도 효율적인 방법 중 하나라고 본다. 매번 다시 검색하고 검색 히스토리 내 검색...을 무한 반복하면 결국 찾을 수는 있지만, 이래저래 지치는 게 사실이기 때문이다.

<br />

개인적으로 (거의 모든 것을) 메모하는 습관은 꽤나 오랜 시간 유지하고 있었으나, 블로그 포스팅을 하는 것은 뭔가 HEAVY하게 느껴져 왠지 꺼려왔었다. 하지만 부담감을 내려놓고 완벽하지 않더라도, 담백하게 그날 배운 내용을 적는 것이라면 조금 씩 포스팅의 부담감도 덜어지리라 믿는다.

<br />

---

### 🔗 References

- [**delivan.dev | Gatsby 블로그에 검색엔진 최적화(SEO) 하기**](https://delivan.dev/web/gatsby-blog-seo-1/)
- [**brouk-devlog | Gatsby Blog 구글 검색 등록하기**](https://brouk-devlog.netlify.app/react/Gatsby Blog 구글 검색 등록하기(2)/) 