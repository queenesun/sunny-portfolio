# Vercel 배포 가이드 (CLI & GitHub 연동)

## 1. 사전 준비

### 필수 사항
- Node.js 설치
- Git 설치
- GitHub 계정
- Vercel 계정

---

# 방법 1. Vercel CLI로 배포

## 1-1. Vercel CLI 설치

```bash
npm install -g vercel
```

설치 확인

```bash
vercel --version
```

---

## 1-2. 로그인

```bash
vercel login
```

이메일 입력 후 인증을 완료한다.

---

## 1-3. 프로젝트 폴더 이동

```bash
cd 프로젝트폴더
```

예시

```bash
cd my-app
```

---

## 1-4. 최초 배포

```bash
vercel
```

질문이 나오면 대부분 기본값(Enter)을 선택하면 된다.

예시

```text
Set up and deploy? Y
Which scope? 개인 계정 선택
Link to existing project? N
Project name? my-app
Directory? ./
```

---

## 1-5. 운영 배포

프로덕션 배포 시

```bash
vercel --prod
```

배포 완료 후 URL이 출력된다.

예시

```text
https://my-app.vercel.app
```

---

# 방법 2. GitHub 연동 배포

## 2-1. GitHub 저장소 생성

GitHub에서 새 Repository 생성

예시

```text
my-app
```

---

## 2-2. 프로젝트 업로드

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/아이디/저장소명.git
git push -u origin main
```

예시

```bash
git remote add origin https://github.com/sunah/my-app.git
git push -u origin main
```

---

## 2-3. Vercel 접속

https://vercel.com

로그인 후

```text
Add New Project
```

선택

---

## 2-4. GitHub 저장소 연결

1. Import Git Repository 선택
2. GitHub 권한 허용
3. 배포할 Repository 선택

---

## 2-5. Build 설정 확인

대부분 자동 감지된다.

예시 (React/Vite)

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

예시 (Next.js)

```text
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
```

---

## 2-6. Deploy

```text
Deploy
```

버튼 클릭

수 분 후 배포 완료

---

# 자동 배포

GitHub 연동 후에는

```bash
git add .
git commit -m "update"
git push
```

만 하면 자동으로 재배포된다.

---

# 환경 변수 설정

Vercel Dashboard

```text
Project
→ Settings
→ Environment Variables
```

추가

예시

```env
API_URL=https://api.example.com
JWT_SECRET=my-secret-key
```

코드 사용 예시

```javascript
const apiUrl = process.env.API_URL;
```

---

# 배포 확인

### CLI 배포

```bash
vercel --prod
```

### GitHub 연동

```bash
git push origin main
```

배포 로그 확인

```text
Vercel Dashboard
→ Project
→ Deployments
```

---

# 자주 사용하는 명령어

```bash
vercel login
```

로그인

```bash
vercel
```

미리보기 배포

```bash
vercel --prod
```

운영 배포

```bash
vercel ls
```

프로젝트 목록 조회

```bash
vercel remove 프로젝트명
```

프로젝트 삭제

---

# 요약

### CLI 배포

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

### GitHub 연동 배포

```bash
git push origin main
```

→ Vercel이 자동으로 빌드 및 배포 수행