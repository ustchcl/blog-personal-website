import Loading from "./components/Loading";
import React from "react"

export let loading: React.RefObject<Loading> | null = null
export function setLoading(loadingRef: React.RefObject<Loading>) {
    loading = loadingRef
}

export default class A {

}