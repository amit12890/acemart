import { useCallback } from 'react';

export const useAuthSidebarHeader = props => {
    const { isTopLevel, onBack, onClose, view } = props;

    const isTopLevelMenu = isTopLevel && (view === 'SIGN_IN' || view === 'MY_ACCOUNT');

    const handleBack = useCallback(() => {
        onBack();
    }, [onBack]);

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    return {
        handleClose,
        handleBack,
        isTopLevelMenu
    };
};
