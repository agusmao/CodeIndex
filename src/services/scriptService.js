import { database } from '../services/firebase.js'
import Rx from 'rx'

export function loadScripts() {
    return Rx.Observable.fromPromise(
        database.ref('/scripts/').once('value')
    ).map( snapshot => {
        let values = snapshot.val()
        return Object.keys(values)
            .map( (key) => {
                return {...values[key], key: key}
            } )
    } )
}

export function addScript(title, description, tags, language, code) {
    return Rx.Observable.fromPromise(
        database.ref('/scripts/').push().set({
            title,
            description,
            tags,
            language,
            code
        })
    )
}