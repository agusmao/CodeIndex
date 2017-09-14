import firebaseApp from 'firebase'
import Rx from 'rx'

export function login(email, password) {
    return Rx.Observable.fromPromise(
            firebaseApp.auth()
                .signInWithEmailAndPassword(email, password)
        )
}