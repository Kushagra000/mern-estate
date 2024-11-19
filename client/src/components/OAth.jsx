import {getAuth, GoogleAuthProvider, signInWithPopup} from '@firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function OAth() {
    const navigate= useNavigate();
    const dispatch = useDispatch()
    const handleGoogleClick =async()=>{
        try {
            const provider =  new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const res  = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({name:result.user.displayName, emial:result.user.email, photo:result.user.photoURL}),
            })
            const data = await res.json();
            dispatch(signInSuccess(data))
            navigate('/')

            console.log(result)

        } catch (error) {
            console.log("Could not pass with google",error)
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white rounded-lg uppercase p-3 hover:opacity-95'>Continue with Google</button>
  )
}
