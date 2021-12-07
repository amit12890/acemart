import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addToWishlistSession } from "./appState.action"

import { useApiData } from "../../data.utils"
import { apiAddToWishlist } from "../../url.utils"
import { get } from "lodash-es"

/**
 * session will only use for guest user
 * 
 * hook will provide handler method to add product to session 
 * and graphql call to add product to wishlist
 */
export const useWishlistSession = () => {
    // as web have multiple wishlist
    const [defaultWishlist, setDefaultWishlist] = useState(false)

    const wishlist_session_item = useSelector(store => store.appState.wishlist_session)
    const dispatch = useDispatch()

    const { callApi: addToWishlist } = useApiData({
        method: "post",
        isLazy: true,
        onSuccess: () => {
            // navigate to wishlist page
            console.log("added to wishlist....")
        }
    })

    const { callApi: getWishlist } = useApiData({
        isLazy: true,
        onSuccess: (data) => {
            console.log("🚀 ~ file: appState.hook.js ~ line 34 ~ useWishlistSession ~ data", data)
            const defaultWishlist = data[0]
            const reqData = {
                product_id: get(wishlist_session_item, "product_id", ""),
                qty: get(wishlist_session_item, "qty", 1)
            }
            addToWishlist(
                apiAddToWishlist(defaultWishlist),
                reqData
            )
        }
    })

    // adding will be silent as guest user will be navigate to signin
    const addProductToWishlistSession = useCallback((productItem) => {
        dispatch(addToWishlistSession(productItem))
    }, [])

    const addProductToWishlist = useCallback(async () => {
        getWishlist()
    }, [addToWishlist, defaultWishlist])

    return {
        addProductToWishlistSession,
        setDefaultWishlist,
        addProductToWishlist
    }
}