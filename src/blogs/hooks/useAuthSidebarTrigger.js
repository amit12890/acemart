import { useCallback } from 'react';
import { useAppContext } from '@magento/peregrine/lib/context/app';

export const useAuthSidebarTrigger = () => {
    const [, { toggleDrawer }] = useAppContext();

    const handleOpenAuthSidebar = useCallback(() => {
        toggleDrawer('authSidebar');
    }, [toggleDrawer]);

    return {
        handleOpenAuthSidebar
    };
};
