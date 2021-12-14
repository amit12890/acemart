import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { get } from 'lodash-es';

export const useSearchPage = (props = {}) => {

    const products = get(props, "results", [])
    return {
        products
    };
}