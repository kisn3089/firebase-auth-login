## Firebase-Auth-Login

## Deployment Vercle: https://firebase-auth-login.vercel.app/

### Firebase의 Authentication 이메일과 패스워드 인증을 이용하여 간단한 회원가입과 로그인을 구현했습니다.
> Router v5로 진행했다는 점 알려드립니다.

```
회원가입
- 아이디는 이메일 형식 준수
- 비밀번호는 7자리 이상 입력
- 회원가입 후 메인으로 Redirect
- 로그인 후 메인으로 Redirect
- 로그인시 쿠키에 Token 1시간 설정
- 로그아웃시 쿠키 삭제
```

### Technology
- React
    - useState
    - useRef
    - useEffect
    - useContext
    - useHistory
    - useCallback

- Router
    - useHistory
    - Link
    - Redirect


<img width="1252" alt="image" src="https://user-images.githubusercontent.com/96061695/183242191-196e2db6-11a9-43e5-94f4-770a4570e3a5.png">
<img width="1254" alt="image" src="https://user-images.githubusercontent.com/96061695/183242214-e58fe592-f87e-48e8-b8a5-bc0ffd8f3c6e.png">
<img width="1254" alt="image" src="https://user-images.githubusercontent.com/96061695/183242220-558908df-e5d5-42c8-a58d-5f35a2c61dd4.png">
<img width="1253" alt="image" src="https://user-images.githubusercontent.com/96061695/183242229-b1c5c06a-d950-4851-848f-eb5a135c570b.png">
