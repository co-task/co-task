FROM node:16

# 작업 디렉터리 설정
WORKDIR /app

# 의존성 파일 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install --frozen-lockfile

# 나머지 파일 복사
COPY . .

# 리액트 앱 빌드
RUN yarn build

# 앱 실행을 위한 포트 지정
EXPOSE 3000

# 앱 실행 명령어
CMD ["yarn", "start"]