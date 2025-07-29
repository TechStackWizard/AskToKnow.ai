import { SignUp } from "@clerk/react-router"

const SignUpPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignUp path="/sign-up" signInUrl="/sign-in"/>
    </div>
  )
}

export default SignUpPage