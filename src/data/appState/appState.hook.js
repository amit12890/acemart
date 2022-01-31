import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addToWishlistSession } from "./appState.action"

import { useApiData } from "../../data.utils"
import { apiAddToWishlist } from "../../url.utils"
import { size } from "lodash-es"

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
            // console.log("product added to wishlist....")
        }
    })

    // adding will be silent as guest user will be navigate to signin
    const addProductToWishlistSession = useCallback((productItem) => {
        dispatch(addToWishlistSession(productItem))
    }, [])

    const addProductToWishlist = useCallback(async (token) => {
        if (size(wishlist_session_item)) {
            const data = { product_id: wishlist_session_item.id, qty: 1 };
            await addToWishlist(apiAddToWishlist(""), data, token);
        }

    }, [defaultWishlist])

    return {
        addProductToWishlistSession,
        setDefaultWishlist,
        addProductToWishlist
    }
}