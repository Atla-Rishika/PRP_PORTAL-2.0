# PRP_PORTAL – Login & Password Reset flow

## Run
```
npm install
npm run dev
```
Open http://localhost:5173/PRP_Portal/Login

## Flow
| Step | Route | Component |
|------|-------|-----------|
| 1. Login | `/PRP_Portal/Login` | Components-Login/CommonLoginScreen |
| 2. Forgot password | `/PRP_Portal/ForgotPassword` | Components-ForgotPassword/ForgotPassword |
| 3. Reset link sent | `/PRP_Portal/ResetLinkSent` | Components-PlacementReset/PlacementReset |
| 4. New password | `/PRP_Portal/NewPassword` | Components-NewPassword/NewPassword |
| 5. Success | `/PRP_Portal/ResetSuccess` | Components-SuccessfulPage/SuccessfulPage |

Login -> "Forgot Password?" -> enter email -> "Reset Link Sent" -> (open email link) -> set new password -> Success -> Back to Login.

All paths live in `src/routes.js`.
