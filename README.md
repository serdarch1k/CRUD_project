# CRUD Project (Plan Management)

본 프로젝트는 간단한 CRUD(Create, Read, Update, Delete) 기능을 구현한 웹 애플리케이션입니다.  
Node.js, Express, MongoDB, EJS를 사용하여 사용자 데이터를 관리할 수 있도록 제작되었습니다.

---

## 📌 프로젝트 소개

이 프로젝트는 기본적인 CRUD 기능을 학습하고 구현하기 위한 백엔드 중심 웹 애플리케이션입니다.  
사용자는 데이터를 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)할 수 있습니다.

특히 EJS 템플릿을 사용하여 서버 사이드 렌더링 방식으로 화면을 구성했습니다.

---

## 🛠 기술 스택

- Node.js
- Express.js
- MongoDB
- EJS (View Engine)
- JavaScript

---

## ⚙️ 주요 기능

- 데이터 생성 (Create)
- 데이터 조회 (Read)
- 데이터 수정 (Update)
- 데이터 삭제 (Delete)
- 서버 사이드 렌더링 (EJS)
- MongoDB 기반 데이터 관리

---

## 📂 프로젝트 구조

CRUD_project/
├── database/
│   └── user.json
├── public/
│   └── browser.js
├── views/
│   └── reja.ejs
├── app.js
├── server.js
├── package.json
└── package-lock.json

---

## ▶️ 실행 방법

# 저장소 클론
git clone https://github.com/serdarch1k/CRUD_project.git

# 폴더 이동
cd CRUD_project

# 패키지 설치
npm install

# 서버 실행
npm start

또는 개발 모드:

npm run dev

---

## ⚡ 실행 스크립트

npm start  
→ Node.js 서버 실행

npm run dev  
→ nodemon으로 자동 재시작

---

## 🧠 동작 방식

- Express 서버가 요청을 처리
- EJS를 통해 HTML 페이지 렌더링
- MongoDB 또는 JSON 데이터를 기반으로 CRUD 수행
- 사용자 요청에 따라 데이터가 실시간으로 변경됨

---

## 🎯 개발 목적

본 프로젝트는 웹 개발에서 가장 기본적인 CRUD 기능을 이해하고,  
Node.js와 Express를 활용한 서버 개발 및 데이터 처리 방식을 학습하기 위해 제작되었습니다.

---

## 🔮 향후 개선 사항

- MongoDB 완전 연동 (현재 JSON → DB 확장)
- 로그인 / 인증 기능 추가
- REST API 구조 개선
- 프론트엔드 React SPA 적용
- UI/UX 개선
- 데이터 유효성 검사 강화

---

## 👨‍💻 개발자

Sardorbek  
GitHub: https://github.com/serdarch1k

---

## 📄 라이선스

본 프로젝트는 학습 및 포트폴리오 목적으로 제작되었습니다.
