import { SignIn } from "@clerk/react-router"

const SignInPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignIn path="/sign-in" signUpUrl="/sign-up"/>
    </div>
  )
}

export default SignInPage