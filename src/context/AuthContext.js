import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth,db } from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { setDoc,doc } from 'firebase/firestore'

const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const signUp = (email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
setDoc(doc(db,'users',email),{
    savedshows:[]
})
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe();
        };
    })
    return (
        <AuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

const UserAuth = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider
export { UserAuth }
