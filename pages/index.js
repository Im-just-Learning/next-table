import AuthLayout from '../layout/authLayout'
import LoginForm from "../components/login/loginForm";

export default function Page() {
  return (
      <LoginForm/>
  )
}

Page.getLayout = function getLayout(page) {
  return (
      <AuthLayout>
          {page}
      </AuthLayout>
  )
}
