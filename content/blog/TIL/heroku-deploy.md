---
title: 'Heroku로 Deploy하기 👷'
date: 2020-08-23 18:08:67
category: TIL
thumbnail: './images/til.png'
draft: false
---

![](./images/til.png)

<br />

###🤦 TL; DR

<br />

**Heroku로 Deploy하기** 
  1) Create app 
  2) Set build pack && Heroku deploy

<br />

---

<br />

# Heroku로 Deploy하기 👷

<br />



### [Heroku](https://devcenter.heroku.com/) 란?

<br />

헤로쿠는 웹 애플리케이션 배치 모델로 사용되는 여러 프로그래밍 언어를 지원하는 클라우드 PaaS이다.

<br />
<br />

### Create App 

<br />

```
npx create-react-app $APP_NAME
cd $APP_NAME
```

1) Terminal을 열고 React 앱을 생성한다. (* $APP_NAME은 본인이 사용할 앱 네임으로 변경)

2) 앱 폴더로 이동한다.

<br />
<br />

### Set Build Pack

<br />

```
heroku create $APP_NAME --buildpack mars/create-react-app
git push heroku master
```

1) buildpack을 앱 세팅에서 추가하거나, Terminal 창에서 추가한다.

2) 배포한다.

<br />
<br />

### 글을 마치며

<br />

Deploy할 때마다 검색 -> 에러 -> 수정 -> 배포 하는 삽질을 반복하게 되어 (이제서야) 기록으로 남기게 되었다.

Buildpack 설정은 매번 잊게 되니 추후에 해당 글을 레퍼런스로 사용하여 삽질하지 말자.

<br />

---

### 🔗 Reference

- **[Heroku Buildpack for create-react-app](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)**

