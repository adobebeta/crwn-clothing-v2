import {signInWithGooglePopup} from "../../utils/firebase/firebase.utils.js"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

  return (
    <div>
    Sign in
    <button onClick={logGoogleUser}>
        Sign in with google
    </button>
    </div>

  )
};

export default SignIn;
