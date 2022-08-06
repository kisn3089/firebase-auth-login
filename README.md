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